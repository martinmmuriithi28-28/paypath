# PayPath

**Your money. Your way forward.**

Most people know they owe money. Few know exactly how much, to whom, and when it's due. PayPath is a small React website that answers all three at a glance: add your loans, record each payment, and watch what you owe shrink.

## Try it

Two terminals:

```
npm install
npm run server    # the fake backend (db.json)
npm run dev       # the website, at http://localhost:5173
```

## What you can do

- Add a loan: lender, amount, due date
- Record a payment and watch the balance fall
- See what's due this month against your income
- Delete a loan you've cleared

## Under the hood

React · React Router · React Bootstrap · json-server

Loans, lenders, borrowers and payments live in `db.json`, linked by IDs. All the fetching sits in two custom hooks, `useLoans` and `useIncome`.



