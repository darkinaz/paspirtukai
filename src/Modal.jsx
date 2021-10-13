import { useState, useEffect } from "react";

function Modal({id, scooter, editScooter, hideModal}) {
    const [registration_code, setReg] = useState('');
    const [is_busy, setBusy] = useState('');
    const [last_use_time, setTime] = useState('');
    const [total_ride_kilometres, setKilo] = useState('');

    useEffect(() => {
        setReg(scooter.registration_code);
        setBusy(scooter.is_busy);
        setTime(scooter.last_use_time);
        setKilo(scooter.total_ride_kilometres);
    }, [scooter])


    const control = (e, what) => {
        switch (what) {
            case 'registration_code':
                setReg(e.target.value);
                break;
            case 'is_busy':
                setBusy(e.target.value);
                break;
            case 'last_use_time':
                setTime(e.target.value);
                break;
            case 'total_ride_kilometres':
                setKilo(e.target.value);
                break;
        }
    }

    const edit = () => {
       editScooter(id, {
            registration_code: registration_code,
            is_busy: is_busy,
            last_use_time: last_use_time,
            total_ride_kilometres: total_ride_kilometres
        });
        hideModal();
        setReg('');
        setBusy('');
        setTime('');
        setKilo('');

    }

    if (id === 0) {
        return null;
    }

    return (
        <div className="edit-modal">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="card m-3">
                            <div className="card-body">
                                <h5 className="card-registration_code">Edit scooter</h5>
                                <div className="form-group">
                                    <label>Title</label>
                                    <input type="text" className="form-control" onChange={(e) => control(e, 'registration_code')} value={registration_code} />
                                    <small className="form-text text-muted">Edit scooter registration_code</small>
                                </div>
                                <div className="form-group">
                                    <label>Author</label>
                                    <input type="text" className="form-control" onChange={(e) => control(e, 'is_busy')} value={is_busy} />
                                    <small className="form-text text-muted">Edit is_busy name</small>
                                </div>
                                <div className="form-group">
                                    <label>Category</label>
                                    <input type="text" className="form-control" onChange={(e) => control(e, 'last_use_time')} value={last_use_time} />
                                    <small className="form-text text-muted">Edit scooters last_use_time</small>
                                </div>
                                <div className="form-group">
                                    <label>Pages</label>
                                    <input type="text" className="form-control" onChange={(e) => control(e, 'total_ride_kilometres')} value={total_ride_kilometres} />
                                    <small className="form-text text-muted">Edit scooters page count</small>
                                </div>
                                <button type="button" className="btn btn-info m-1" onClick={edit}>Edit scooter</button>
                                <button type="button" className="btn btn-danger m-1" onClick={hideModal}>Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;