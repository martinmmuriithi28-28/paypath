import { useState, useEffect } from "react";

const SETTINGS_URL = "http://localhost:3001/settings";

export function useIncome() {
 
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
        console.log("Could not load settings. Is the server running?");
      });
  }, []);

  
  function saveIncome(newIncome) {
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

  return { monthlyIncome, saveIncome };
}