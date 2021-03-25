import React from 'react';
import { Container } from 'react-bootstrap';
import { data } from '../../../data';
import Cards from '../../Card';
import Footer from '../../Footer';

const PopularSection = () => {
  return (
    <section>
      <Container>
        <div className="card_holder">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div>
              <h5 className="mb-0">Popular</h5>
              <p className="text-gray-soft">Top-sellers in the past week!</p>
            </div>
          </div>
          {data?.map(({ id, thumb, title, category, price, thumb2, category2, price2, title2 }) => (
            <div key={id}>
              <Cards
                thumb={thumb}
                title={title}
                category={category}
                price={price}
                thumb2={thumb2}
                title2={title2}
                category2={category2}
                price2={price2}
              />
            </div>
          ))}
        </div>
        <Footer />
      </Container>
    </section>
  );
};

export default PopularSection;
