import { useState, useEffect } from "react";
import { getToday } from "../utils/loanUtils";

const API_URL = "http://localhost:3001/loans";

function useLoans() {
  const [loans, setLoans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setLoans(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Could not load loans. Is the server running?");
        setLoading(false);
      });
  }, []);

  function addLoan(formData) {
    return fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        lender: formData.lender,
        amount: Number(formData.amount),
        dueAmount: Number(formData.amount),
        dueDate: formData.dueDate,
        borrowerId: 1,
      }),
    })
      .then((response) => response.json())
      .then((saved) => {
        setLoans([...loans, saved]);
      });
  }

  function deleteLoan(id) {
    return fetch(API_URL + "/" + id, { method: "DELETE" }).then(() => {
      setLoans(loans.filter((loan) => loan.id !== id));
    });
  }

  function updateLoan(id, newDueAmount) {
    const loan = loans.find((item) => item.id === id);
    const paidAmount = loan.dueAmount - newDueAmount;

    return fetch("http://localhost:3001/payments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        loanId: id,
        borrowerId: loan.borrowerId,
        amount: paidAmount,
        date: getToday(),
      }),
    })
      .then(() =>
        fetch(API_URL + "/" + id, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ dueAmount: newDueAmount }),
        })
      )
      .then((response) => response.json())
      .then((updated) => {
        setLoans(loans.map((item) => (item.id === id ? updated : item)));
      });
  }

  return { loans, loading, error, addLoan, deleteLoan, updateLoan };
}

export { useLoans };
export default useLoans;