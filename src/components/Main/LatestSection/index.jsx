import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { latestData } from '../../../data';
import Cards from '../../Card';
import './styles.css';

const LatestSection = () => {
  return (
    <section className="section">
      <Container>
        <div className="card_holder">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div>
              <h5 className="mb-0">Latest</h5>
              <p className="text-gray-soft sub_text">Most recently added to our collection</p>
            </div>
            <Button variant="outline-primary">View all</Button>
          </div>
          {latestData?.map(
            ({ id, thumb, title, category, price, thumb2, title2, category2, price2 }) => (
              <div key={id}>
                <Cards
                  thumb={thumb}
                  title={title}
                  category={category}
                  price={price}
                  thumb2={thumb2}
                  title2={title2}
                  category2={category2}
                />
              </div>
            )
          )}
        </div>
      </Container>
    </section>
  );
};

export default LatestSection;
