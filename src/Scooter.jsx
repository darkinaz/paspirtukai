function Scooter({ scooter, deleteScooter, showModal }) {

    return (
        <div className="col-lg-4 col-md-6">
            <div className="card m-3">
                <div className="card-body">
                    <h5 className="card-title">Registration code: {scooter.registration_code}</h5>
                    <h6>{scooter.is_busy}</h6>
                    <span className="badge badge-pill badge-secondary m-1 p-2">Last time used: {scooter.last_use_time}</span>
                    <span className="badge badge-pill badge-secondary m-1 p-2">Used: {scooter.total_ride_kilometres}km</span>
                    <div className="form-group mt-3">
                        <button type="button" className="btn btn-danger m-1" onClick={()=>deleteScooter(scooter.id)}>Delete</button>
                        <button type="button" className="btn btn-success m-1" onClick={()=>showModal(scooter.id)}>Edit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Scooter;