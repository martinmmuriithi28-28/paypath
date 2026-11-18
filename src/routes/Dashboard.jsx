import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import SummaryCard from "../components/SummaryCard";
import {
  formatMoney,
  calculateTotalOutstanding,
  calculateTotalBorrowed,
} from "../utils/loanUtils";

function Dashboard({ loans, loading, error }) {
  const outstanding = calculateTotalOutstanding(loans);
  const borrowed = calculateTotalBorrowed(loans);

  return (
    <Container className="py-4">
      <h1 className="h3 mb-3">Dashboard</h1>

      {loading && <p className="text-secondary">Loading loans...</p>}
      {error && <p className="text-danger">{error}</p>}

      <Row className="g-3 mb-4">
        <Col xs={12} sm={6} xl={3}>
          <SummaryCard title="Outstanding Loans" value={formatMoney(outstanding)} />
        </Col>
        <Col xs={12} sm={6} xl={3}>
          <SummaryCard title="Total Borrowed" value={formatMoney(borrowed)} />
        </Col>
        <Col xs={12} sm={6} xl={3}>
          <SummaryCard title="Paid So Far" value={formatMoney(borrowed - outstanding)} />
        </Col>
        <Col xs={12} sm={6} xl={3}>
          <SummaryCard title="Number of Loans" value={loans.length} />
        </Col>
      </Row>

      <Link to="/loans" className="btn btn-dark">
        View all loans
      </Link>
    </Container>
  );
}

export default Dashboard;