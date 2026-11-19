import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Landing from "./routes/Landing";
import Dashboard from "./routes/Dashboard";
import LoanList from "./routes/LoanList";
import AddLoan from "./routes/AddLoan";
import LoanDetail from "./routes/LoanDetail";
import Settings from "./routes/Settings";
import NotFound from "./routes/NotFound";
import { useLoans } from "./hooks/useLoans";

const SETTINGS_URL = "http://localhost:3001/settings";

function App() {
  
  const { loans, loading, error, addLoan, deleteLoan, updateLoan } = useLoans();

  
  const [monthlyIncome, setMonthlyIncome] = useState(0);

  useEffect(() => {
    fetch(SETTINGS_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Could not load settings.");
        }
        return response.json();
      })
      .then((data) => {
        setMonthlyIncome(data.monthlyIncome);
      })
      .catch(() => {
        console.log("Could not load settings.");
      });
  }, []);

  function handleSaveIncome(newIncome) {
    return fetch(SETTINGS_URL, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ monthlyIncome: newIncome }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Could not save the income.");
        }
        return response.json();
      })
      .then((savedSettings) => {
        setMonthlyIncome(savedSettings.monthlyIncome);
      });
  }

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Landing />} />
        <Route
          path="/dashboard"
          element={
            <Dashboard
              loans={loans}
              loading={loading}
              error={error}
              monthlyIncome={monthlyIncome}
            />
          }
        />
        <Route
          path="/loans"
          element={
            <LoanList
              loans={loans}
              loading={loading}
              error={error}
              onDelete={deleteLoan}
              onUpdate={updateLoan}
            />
          }
        />
        <Route path="/loans/new" element={<AddLoan onAddLoan={addLoan} />} />
        <Route
          path="/loans/:id"
          element={
            <LoanDetail
              loans={loans}
              loading={loading}
              error={error}
              onDelete={deleteLoan}
              onUpdate={updateLoan}
            />
          }
        />
        <Route
          path="/settings"
          element={<Settings monthlyIncome={monthlyIncome} onSave={handleSaveIncome} />}
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;