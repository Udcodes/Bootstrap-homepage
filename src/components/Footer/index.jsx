import React from 'react';
import { Button, Col, FormControl, InputGroup, Row } from 'react-bootstrap';
import './styles.css';

const Footer = () => {
  return (
    <div>
      <div className="footer_holder">
        <Row className="align-content-center">
          <Col lg={7} md={6}>
            <h5 className="mb-1">Get new themes in your inbox!</h5>
            <p className="text-gray-soft form-text mt-0">
              New themes or big discounts. Never spam.
            </p>
          </Col>
          <Col lg={5} md={6}>
            <InputGroup className="mb-3">
              <FormControl
                className="email_input"
                placeholder="Email Address"
                aria-label="email Address"
                aria-describedby="basic-addon2"
              />
              <Button variant="primary" className="ml-2">
                Subscribe
              </Button>
            </InputGroup>
          </Col>
        </Row>
      </div>
      <div className="footer_item_bottom">
        <Row>
          <Col lg={6}>
            <ul className="footer_list d-flex justify-content-center align-items-center justify-content-md-start">
              <li className="footer_list">Help Center</li>
              <li className="footer_list">Terms of Service</li>
              <li className="footer_list">Licenses</li>
              <li className="footer_list">Sell Themes</li>
            </ul>
          </Col>
          <Col lg={6}>
            <p className="hidden-sm-down d-none d-lg-block float-lg-right m-0">
              Trying to redownload a theme? Use our{' '}
              <a className="sub_link" href="/">
                redownload page.
              </a>
            </p>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Footer;
