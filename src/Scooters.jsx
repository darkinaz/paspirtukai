import Scooter from './Scooter';


function Scooters({scooters, deleteScooter, showModal}) {



    return (
        <>
            <div className="container">
                <div className="row">
                    {scooters.map(scooter => <Scooter key={scooter.id} scooter={scooter} deleteScooter={deleteScooter} showModal={showModal} />)}
                </div>
            </div>
        </>
    );
}

export default Scooters;