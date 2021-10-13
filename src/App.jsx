import { useEffect, useState } from "react";
import './App.css';
import Scooter from './Scooters';
import NewScooter from './NewScooter';
import Modal from './Modal';
import axios from 'axios';
import Top from './Top';


function App() {

  const [scooters, setScooters] = useState([]);
  const [lastUpdate, setLastUpdate] = useState(Date.now());
  const [modalId, setModalId] = useState(0);
  const [scootersCount, setScootersCount] = useState(0);
  const [scootCount, setScootCount] = useState([]);


  useEffect(() => {
    axios.get('http://localhost:3003/scooters')
      .then((response) => {
        setScooters(response.data);
      })
  }, [lastUpdate])

  useEffect(() => {
    axios.get('http://localhost:3003/scooters/count')
      .then((response) => {
        setScootersCount(response.data[0].scootersCount);
      })
  }, [lastUpdate])

  useEffect(() => {
    axios.get('http://localhost:3003/scooters/scooters-count')
      .then((response) => {
        console.log(response.data);
        setScootCount(response.data);
      })
  }, [lastUpdate])

  const addScooter = (scooter) => {
    axios.post('http://localhost:3003/scooters', scooter)
      .then(() => {
        setLastUpdate(Date.now())
      })
  }

  const editScooter = (id, scooter) => {
    axios.put('http://localhost:3003/scooters/'+ id, scooter)
      .then(() => {
        setLastUpdate(Date.now())
      })
  }

  const deleteScooter = (id) => {
    axios.delete('http://localhost:3003/scooters/'+ id)
      .then(() => {
        setLastUpdate(Date.now())
      })
  }

  const getScooter = id => {
    if (id === 0) {
      return {
        registration_code: '',
        is_busy: '',
        last_use_time: '',
        total_ride_kilometres: ''
    };
    }
    for(let i = 0; i < scooters.length; i++) {
      if (scooters[i].id === id) {
        return {...scooters[i]};
      }
    }
  }

  const showModal = id => {
    setModalId(id)
  }

  const hideModal = () => {
    setModalId(0)
  }

  const sort = by => {
    const scootersCopy = scooters.slice();
    if ('registration_code' === by) {
      scootersCopy.sort((a, b) => {
        if (a.registration_code > b.registration_code) {
          return 1;
        }
        if (a.registration_code < b.registration_code) {
          return -1;
        }
        return 0;
      });
    }
    if ('is_busy' === by) {
      scootersCopy.sort((a, b) => a.is_busy - b.is_busy);
    }
    setScooters(scootersCopy);
  }


  return (
    <>
      <Top sort={sort} scootersCount={scootersCount} scootCount={scootCount}></Top>
      <NewScooter addScooter={addScooter}></NewScooter>
      <Scooter scooters={scooters} deleteScooter={deleteScooter} showModal={showModal}></Scooter>
      <Modal id={modalId} editScooter={editScooter} scooter={getScooter(modalId)} hideModal={hideModal}></Modal>
    </>
  );
}

export default App;