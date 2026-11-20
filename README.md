# PayPath

**Your money, your way forward.** PayPath is a React website that helps you track the loans you owe, record your payments, and see what is due each month.

Built for the React summative lab: a React-based personal project showcase app. A loan is the "product", and the amount still due is the editable "price".

## Features (MVPs)
- Add a loan with the lender, amount and due date
- View all my loans and open one loan's page
- Record a payment and see the amount still due go down
- Delete a loan
- See totals on a dashboard: outstanding, due this month, paid so far, repayment pressure
- Set my monthly income

## Tech used
- React (Vite), React Router v6, React Bootstrap and plain CSS
- `json-server` as a simulated backend (`db.json`)
- `fetch` with `.then` for all API requests

## How to run it
You need **two terminals**.

```
npm install
```

Terminal 1, the fake backend:
```
npm run server
```

Terminal 2, the website:
```
npm run dev
```

Then open http://localhost:5173. If the server is not running, the site shows "Could not load loans. Is the server running?"

## Pages (routes)
| Path | Page |
|---|---|
| `/` | Landing page |
| `/dashboard` | Dashboard with totals |
| `/loans` | List of all loans |
| `/loans/new` | Add a loan |
| `/loans/:id` | One loan (dynamic route) |
| `/settings` | Monthly income |
| `*` | Page not found |

## Database (`db.json`)
The records are linked by IDs.

| Endpoint | Holds |
|---|---|
| `/borrowers` | `id`, `name` |
| `/lenders` | `id`, `name` |
| `/loans` | `id`, `borrowerId`, `lenderId`, `lender`, `amount`, `dueAmount`, `dueDate` |
| `/payments` | `id`, `loanId`, `borrowerId`, `amount`, `date` |
| `/settings` | `monthlyIncome` |

Many payments can belong to one loan. Each payment is saved as its own record, so the full history is kept.

## Where each lab requirement lives
| Requirement | Where |
|---|---|
| Landing page | `src/routes/Landing.jsx` |
| 3+ routes, one dynamic | `src/App.jsx` |
| Reusable components | `src/components/` (SummaryCard, LoanCard, AddLoanForm, Layout) |
| Event handlers | onClick, onChange and onSubmit in `LoanCard.jsx`, `AddLoanForm.jsx`, `Settings.jsx` |
| Controlled forms | `AddLoanForm.jsx`, the payment form in `LoanCard.jsx`, `Settings.jsx` |
| Hooks | `useState`, `useEffect`, `useRef`, `useId`, and custom hooks `useLoans` and `useIncome` in `src/hooks/` |
| API requests | GET, POST, PATCH and DELETE in `src/hooks/useLoans.js` and `src/hooks/useIncome.js` |
| Responsive design | Bootstrap grid and a wrapping top navigation |

## Known notes
- `npm audit` reports advisories in some dependencies. I stayed on React Router v6 and did not force fixes, to keep the project stable.
- Automated tests (Vitest and React Testing Library) are still in progress.

## Future improvements
- Lender dropdown when adding a loan, so every new loan stores its `lenderId`
- Payment history list on each loan's page
- Search box on the loans page
- Lender and borrower accounts, with pairing so a lender can see what is owed
- A "which loan to pay first" suggestion and a warning before taking a new loan

## Author
Martin Muriithi, SDFT-FT19
