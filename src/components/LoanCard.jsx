function LoanCard({ loan }) {
  return (
    <div>
      <h3>{loan.lender}</h3>
      <p>Original amount: KSh {loan.amount}</p>
      <p>Amount still due: KSh {loan.dueAmount}</p>
      <p>Due date: {loan.dueDate}</p>
    </div>
  );
}

export default LoanCard;