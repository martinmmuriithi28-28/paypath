
import { useState, useId } from "react";
import { Container, Alert } from "react-bootstrap";

function Settings({ monthlyIncome, onSave }) {
 
  
  const [typedIncome, setTypedIncome] = useState(null);
  
  const [message, setMessage] = useState(null);
  const id = useId();

  
  const income = typedIncome === null ? String(monthlyIncome) : typedIncome;

  function handleSubmit(event) {
    event.preventDefault();


    onSave(Number(income))
      .then(() => {
        setTypedIncome(null);
        setMessage({ type: "success", text: "Monthly income saved." });
      })
      .catch(() => {
        setMessage({ type: "danger", text: "Could not save. Is the server running?" });
      });
  }

  return (
    <Container className="py-4">
      <h1 className="h3 mb-3">Settings</h1>

      {message && <Alert variant={message.type}>{message.text}</Alert>}

      <form onSubmit={handleSubmit} className="loan-card">
        <label htmlFor={id} className="form-label">
          Monthly income (KSh)
        </label>
        <input
          id={id}
          className="form-control mb-3"
          type="number"
          required
          min="1"
          value={income}
          onChange={(event) => setTypedIncome(event.target.value)}
        />
        <button type="submit" className="btn btn-dark">
          Save Settings
        </button>
      </form>
    </Container>
  );
}

export default Settings;