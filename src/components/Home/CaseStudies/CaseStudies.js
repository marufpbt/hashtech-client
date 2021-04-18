import React from 'react';
import './CaseStudies.css';
import case1 from '../../../images/case1.jpg';
import case2 from '../../../images/case2.jpg';
import case3 from '../../../images/case3.jpg';
import { Card, Button, CardDeck } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'

const CaseStudies = () => {
  return (
    <section className="container-fluid my-5 py-5 case-container">
      <div className="row text-center my-4">
        <div className="col-12">
          <h6 className="section-sub-title mb-20">CASE STUDIES</h6>
          <h3 className="heading">Proud projects that  <span className="text-primary">make us stand out</span></h3>
        </div>
      </div>
      <div className="container">
        <CardDeck>
        <Card className="text-dark cardStyle" style={{ width: '22rem', height: 'fitContent', textAlign: 'center' }}>
            <Card.Img variant="top" src={case1} />
            <Card.Body>
              <Card.Title>Hitech-Smart Vision</Card.Title>
              <small className="text-primary case-primary">Cybar Security</small>
              <Card.Text>
                At Hashtech, we have a holistic and integrated approach towards core modernization to experience technological evolution.

      </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-primary case-primary">View case study  <FontAwesomeIcon icon={faAngleDoubleRight} /></small>
            </Card.Footer>
          </Card>
          <Card className="text-dark cardStyle" style={{ width: '22rem', height: 'fitContent', textAlign: 'center' }}>
            <Card.Img variant="top" src={case2} />
            <Card.Body>
              <Card.Title>Arden-Internal Networking</Card.Title>
              <small className="text-primary case-primary">Cybar Security</small>
              <Card.Text>
                The prospects for a company operating in this new market are varied and exciting. The potential …

      </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-primary case-primary ">View case study  <FontAwesomeIcon icon={faAngleDoubleRight} /></small>
            </Card.Footer>
          </Card>
          <Card className="text-dark cardStyle" style={{ width: '22rem', height: 'fitContent', textAlign: 'center' }}>
            <Card.Img variant="top" src={case3} />
            <Card.Body>
              <Card.Title>A Freeserve case study</Card.Title>
              <small className="text-primary case-primary">Cybar Security</small>
              <Card.Text>
                The prospects for a company operating in this new market are varied and exciting. The potential …

      </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-primary case-primary">View case study  <FontAwesomeIcon icon={faAngleDoubleRight} /></small>
            </Card.Footer>
          </Card>
        </CardDeck>
      </div>
    </section>
  );
};

export default CaseStudies;
