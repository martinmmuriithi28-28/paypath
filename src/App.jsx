import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Landing from "./routes/Landing";
import Dashboard from "./routes/Dashboard";
import LoanList from "./routes/LoanList";
import AddLoan from "./routes/AddLoan";
import LoanDetail from "./routes/LoanDetail";
import NotFound from "./routes/NotFound";


const API_URL = "http://localhost:3001/loans";

function App() {
  const [loans, setLoans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  
  useEffect(() => {
    fetch(API_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Could not load loans.");
        }
        return response.json();
      })
      .then((data) => {
        setLoans(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Could not load loans. Is the server running?");
        setLoading(false);
      });
  }, []);

  
  function handleAddLoan(formData) {
    const newLoan = {
      lender: formData.lender,
      amount: Number(formData.amount),
      dueAmount: Number(formData.amount),
      dueDate: formData.dueDate,
    };

    fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newLoan),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Could not save the loan.");
        }
        return response.json();
      })
      .then((savedLoan) => {
        setLoans([...loans, savedLoan]);
      })
      .catch(() => {
        setError("Could not save the loan. Is the server running?");
      });
  }

  
  function handleDeleteLoan(id) {
    fetch(API_URL + "/" + id, { method: "DELETE" })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Could not delete the loan.");
        }
        setLoans(loans.filter((loan) => loan.id !== id));
      })
      .catch(() => {
        setError("Could not delete the loan. Is the server running?");
      });
  }

  
  function handleUpdateLoan(id, newDueAmount) {
    fetch(API_URL + "/" + id, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ dueAmount: newDueAmount }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Could not update the loan.");
        }
        return response.json();
      })
      .then((updatedLoan) => {
        setLoans(loans.map((loan) => (loan.id === id ? updatedLoan : loan)));
      })
      .catch(() => {
        setError("Could not update the loan. Is the server running?");
      });
  }

  return (
    <Routes>
      
      <Route element={<Layout />}>
        <Route path="/" element={<Landing />} />
        <Route
          path="/dashboard"
          element={<Dashboard loans={loans} loading={loading} error={error} />}
        />
        <Route
          path="/loans"
          element={
            <LoanList
              loans={loans}
              loading={loading}
              error={error}
              onDelete={handleDeleteLoan}
              onUpdate={handleUpdateLoan}
            />
          }
        />
        <Route path="/loans/new" element={<AddLoan onAddLoan={handleAddLoan} />} />

      <Route
          path="/loans/:id"
          element={
            <LoanDetail
              loans={loans}
              loading={loading}
              error={error}
              onDelete={handleDeleteLoan}
              onUpdate={handleUpdateLoan}
            />
          }
        />
        
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;