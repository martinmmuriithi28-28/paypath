import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

function Landing() {
  return (
    <>
      <section className="hero">
        <Container>
          <h1>Take control of your loans</h1>
          <p className="lead">
            Track every loan, see what you still owe, and stay on top of your
            repayments.
          </p>
          <Link to="/dashboard" className="btn btn-lime btn-lg">
            Get started
          </Link>
        </Container>
      </section>

      <Container className="py-5">
        <Row className="g-3">
          <Col xs={12} md={4}>
            <div className="loan-card">
              <h2 className="h5">Track every loan</h2>
              <p className="mb-0">
                Save each lender, the amount borrowed and the due date in one
                place.
              </p>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <div className="loan-card">
              <h2 className="h5">Record repayments</h2>
              <p className="mb-0">
                Update the amount still due whenever you pay, and see how much
                you have paid so far.
              </p>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <div className="loan-card">
              <h2 className="h5">Know what you owe</h2>
              <p className="mb-0">
                See your total outstanding at a glance before you take on
                anything new.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Landing;