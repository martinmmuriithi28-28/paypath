import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

function NotFound() {
  return (
    <Container className="py-5">
      <h1>Page not found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/" className="btn btn-dark">
        Go Home
      </Link>
    </Container>
  );
}

export default NotFound;