import { useNavigate } from "react-router-dom";
import AddLoanForm from "../components/AddLoanForm";

function AddLoan({ onAddLoan }) {
  
  const navigate = useNavigate();

  function handleAdd(formData) {
    onAddLoan(formData); 
    navigate("/loans"); 
  }

  return (
    <>
      <h1 className="h3 mb-3">New loan</h1>
      <AddLoanForm onAddLoan={handleAdd} />
    </>
  );
}

export default AddLoan;