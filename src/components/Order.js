import React from 'react';

export default function Order({ order }) {
  return (
    <div>
      <div className="alert alert-success" role="alert">
        {order}
      </div>
    </div>
  );
}
