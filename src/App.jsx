import SummaryCard from "./components/SummaryCard";
import LoanCard from "./components/LoanCard";


const sampleLoans = [
  { id: 1, lender: "Example Bank", amount: 50000, dueAmount: 32000, dueDate: "2026-11-28" },
  { id: 2, lender: "Sacco Loan", amount: 120000, dueAmount: 90000, dueDate: "2026-12-15" },
];

function App() {
  const appName = "PayPath";
  const tagline = "Your money. Your way forward.";

  return (
    <div>
      <h1>{appName}</h1>
      <p>{tagline}</p>

      <h2>Your Loan Summary</h2>
      
      <SummaryCard title="Outstanding Loans" value="KSh 122000" />
      <SummaryCard title="Due This Month" value="KSh 32000" />
      <SummaryCard title="Monthly Income" value="KSh 30000" />

      <h2>My Loans</h2>
    
      {sampleLoans.map((loan) => (
        <LoanCard key={loan.id} loan={loan} />
      ))}
    </div>
  );
}

export default App;