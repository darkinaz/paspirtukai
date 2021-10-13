import { useState } from "react";

function NewScooter({addBook}) {
    const [registration_code, setReg] = useState('');
    const [is_busy, setBusy] = useState('');
    const [last_use_time, setTime] = useState('');
    const [total_ride_kilometres, setKilo] = useState('');

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

    const insert = () => {
       addBook({
            registration_code: registration_code,
            is_busy: is_busy,
            last_use_time: last_use_time,
            total_ride_kilometres: total_ride_kilometres
        });
        setReg('');
        setBusy('');
        setTime('');
        setKilo('');
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="card m-3">
                            <div className="card-body">
                                <h5 className="card-registration_code">New Scooter</h5>
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" className="form-control" onChange={(e) => control(e, 'registration_code')} value={registration_code} />
                                    <small className="form-text text-muted">Enter new scooter registration_code</small>
                                </div>
                                <div className="form-group">
                                    <label>State</label>
                                    <input type="text" className="form-control" onChange={(e) => control(e, 'is_busy')} value={is_busy} />
                                    <small className="form-text text-muted">Enter is_busy name</small>
                                </div>
                                <div className="form-group">
                                    <label>Category</label>
                                    <input type="text" className="form-control" onChange={(e) => control(e, 'last_use_time')} value={last_use_time} />
                                    <small className="form-text text-muted">Enter scooter last_use_time</small>
                                </div>
                                <div className="form-group">
                                    <label>Kilometers</label>
                                    <input type="text" className="form-control" onChange={(e) => control(e, 'total_ride_kilometres')} value={total_ride_kilometres} />
                                    <small className="form-text text-muted">Enter scooters kilometers count</small>
                                </div>
                                <button type="button" className="btn btn-info" onClick={insert}>Add scooter</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NewScooter;