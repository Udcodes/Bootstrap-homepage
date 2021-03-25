import React from 'react';
import './styles.css';

export const Star = () => {
  return (
    <>
      <p className="hidden-sm-down d-none d-lg-block">
        <i className="fa fa-star checked" aria-hidden="true"></i>
        <i className="fa fa-star checked" aria-hidden="true"></i>
        <i className="fa fa-star checked" aria-hidden="true"></i>
        <i className="fa fa-star" aria-hidden="true"></i>
        <i className="fa fa-star" aria-hidden="true"></i>
      </p>
    </>
  );
};
