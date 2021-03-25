import React from 'react';
import { Jumbotron as Banner } from 'react-bootstrap';
import styled from 'styled-components';
import bootstrapLogo from '../../assets/img/bootstrap-logo.png';
import './styles.css';

const Styles = styled.div`
  max-width: 1140px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: 15px;
  padding-left: 15px;
`;

const Jumbotron = () => {
  return (
    <>
      <Banner className="jumbotron" fluid>
        <Styles>
          <img
            src={bootstrapLogo}
            alt="bootstrap logo"
            srcset=""
            width="106.5"
            className="hero_image"
          />
          <h1 className="display-1 text-bold">Build anything</h1>
          <h5 className="text-gray-soft text-regular">
            Themes built by or reviewed by Bootstrap's creators.
          </h5>
          <button variant="primary" size="lg" className="button button-brand btn-lg mb-5 mb-lg-2">
            Why our themes?
          </button>
        </Styles>
      </Banner>
    </>
  );
};

export default Jumbotron;
