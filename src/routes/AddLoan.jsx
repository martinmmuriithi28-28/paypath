// AddLoan.jsx: the "/loans/new" page. Shows the form, then sends the user to the list.
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import AddLoanForm from "../components/AddLoanForm";

function AddLoan({ onAddLoan }) {
  const navigate = useNavigate();

  function handleAdd(formData) {
    onAddLoan(formData);
    navigate("/loans");
  }

  return (
    <Container className="py-4">
      <h1 className="h3 mb-3">New loan</h1>
      <AddLoanForm onAddLoan={handleAdd} />
    </Container>
  );
}

export default AddLoan;
