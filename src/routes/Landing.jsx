import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

function Landing() {
  const features = [
    { icon: "📋", title: "Track every loan", text: "Keep all your lenders and amounts in one place." },
    { icon: "💰", title: "Record payments", text: "Log each payment and watch what you owe go down." },
    { icon: "📅", title: "Never miss a due date", text: "See what is due this month against your income." },
  ];

  return (
    <>
      <section className="hero">
        <Container>
          <p className="hero-tag">PAYPATH</p>
          <h1>Take control of your loans</h1>
          <p className="lead mb-4">
            Your money, your way forward. Track what you owe, what you have paid and what is due next.
          </p>
          <Link to="/dashboard" className="btn btn-lime btn-lg me-2">Get started</Link>
          <Link to="/loans/new" className="btn btn-outline-light btn-lg">Add a loan</Link>
        </Container>
      </section>

      <Container className="py-5">
        <Row className="g-4">
          {features.map((feature) => (
            <Col key={feature.title} xs={12} md={4}>
              <div className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      <section className="cta-band">
        <Container className="text-center">
          <h2>Ready to take control of your loans?</h2>
          <Link to="/loans/new" className="btn btn-lime btn-lg mt-3">Add your first loan</Link>
        </Container>
      </section>
    </>
  );
}

export default Landing;