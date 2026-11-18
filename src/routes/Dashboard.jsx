import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import SummaryCard from "../components/SummaryCard";
import {
  formatMoney,
  calculateTotalOutstanding,
  calculateTotalBorrowed,
  calculateDueThisMonth,
  calculatePercentage,
} from "../utils/loanUtils";

function Dashboard({ loans, loading, error, monthlyIncome }) {
  const outstanding = calculateTotalOutstanding(loans);
  const borrowed = calculateTotalBorrowed(loans);
  const dueThisMonth = calculateDueThisMonth(loans);
  
  const pressure = calculatePercentage(dueThisMonth, monthlyIncome);

  return (
    <Container className="py-4">
      <h1 className="h3 mb-3">Dashboard</h1>

      {loading && <p className="text-secondary">Loading loans...</p>}
      {error && <p className="text-danger">{error}</p>}

      
      <Row className="g-3 mb-4">
        <Col xs={12} sm={6} xl={4}>
          <SummaryCard title="Outstanding Loans" value={formatMoney(outstanding)} />
        </Col>
        <Col xs={12} sm={6} xl={4}>
          <SummaryCard title="Due This Month" value={formatMoney(dueThisMonth)} />
        </Col>
        <Col xs={12} sm={6} xl={4}>
          <SummaryCard title="Monthly Income" value={formatMoney(monthlyIncome)} />
        </Col>
        <Col xs={12} sm={6} xl={4}>
          <SummaryCard title="Repayment Pressure" value={pressure.toFixed(1) + "%"} />
        </Col>
        <Col xs={12} sm={6} xl={4}>
          <SummaryCard title="Total Borrowed" value={formatMoney(borrowed)} />
        </Col>
        <Col xs={12} sm={6} xl={4}>
          <SummaryCard title="Paid So Far" value={formatMoney(borrowed - outstanding)} />
        </Col>
      </Row>

      <Link to="/loans" className="btn btn-dark">
        View all loans
      </Link>
    </Container>
  );
}

export default Dashboard;