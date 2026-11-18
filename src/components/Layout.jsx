import { Link, NavLink, Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";

function Layout() {
  return (
    <>
      <nav className="top-nav">
        <Container className="d-flex flex-wrap justify-content-between align-items-center gap-2">
          <Link to="/" className="brand">
            Pay<span>Path</span>
          </Link>

          <div className="d-flex flex-wrap gap-3">
            <NavLink to="/" end className="top-link">
              Home
            </NavLink>
            <NavLink to="/dashboard" className="top-link">
              Dashboard
            </NavLink>
            <NavLink to="/loans" end className="top-link">
              My Loans
            </NavLink>
            <NavLink to="/loans/new" className="top-link">
              Add Loan
            </NavLink>
            <NavLink to="/settings" className="top-link">
              Settings
            </NavLink>
          </div>
        </Container>
      </nav>

      <Outlet />
    </>
  );
}

export default Layout;