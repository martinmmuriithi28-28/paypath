import { Link, Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";

function PublicLayout() {
  return (
    <>
      <nav className="top-nav">
        <Container className="d-flex justify-content-between align-items-center">
         
          <Link to="/" className="brand">
            Pay<span>Path</span>
          </Link>
          <div>
            <Link to="/" className="top-link">
              Home
            </Link>
            <Link to="/dashboard" className="btn btn-sm btn-lime">
              Open App
            </Link>
          </div>
        </Container>
      </nav>

      <Outlet />
    </>
  );
}

export default PublicLayout;