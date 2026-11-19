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
import { useIncome } from "./hooks/useIncome";

function App() {
  const { loans, loading, error, addLoan, deleteLoan, updateLoan } = useLoans();
  const { monthlyIncome, saveIncome } = useIncome();

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
          element={<Settings monthlyIncome={monthlyIncome} onSave={saveIncome} />}
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;