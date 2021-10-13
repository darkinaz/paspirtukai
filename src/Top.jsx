function Top({sort, scooterCount, scootCount}) {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="card m-3">
                <div className="card-body">
                  <h5 className="card-title">Sort by</h5>
                  <button type="button" className="btn btn-info m-1" onClick={()=>sort('registration_code')}>Title</button>
                  <button type="button" className="btn btn-info m-1" onClick={()=>sort('total_ride_kilometres')}>Used</button>
                </div>
              </div>
            </div>
            <div className="col">
            <div className="card m-3">
                <div className="card-body">
                  <h5 className="card-title">Available</h5>
                  <h6>All Scooters: {scooterCount} </h6>
                  {scootCount.map(scoot => <h6 style={{color:'blue'}} key={scoot.is_busy}>{scoot.is_busy}: {scoot.count}</h6>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default Top;