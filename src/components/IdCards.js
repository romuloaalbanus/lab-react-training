function IdCards(props) {
  return (
    <div>
      <div className="card mb-3" style={{ maxWidth: '540px' }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={props.image} alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <p className="card-text">
                <strong>FirstName: </strong>
                {props.firstName} <br />
                <strong>LastName: </strong>
                {props.lastName} <br />
                <strong>Gender: </strong>
                {props.gender} <br />
                <strong>Heigth: </strong>
                {props.heigth} <br />
                <strong>Birth: </strong>
                {props.birth} <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IdCards;
