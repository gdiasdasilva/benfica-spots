import React from 'react';

export default function Spot(props) {
  return (
    <div className="col-md-6 mt-1">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{props.city}</h6>
        </div>
      </div>
    </div>
  );
};
