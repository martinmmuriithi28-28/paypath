import { Link, NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      <Link to="/" className="brand">
        Pay<span>Path</span>
      </Link>

      <nav className="mt-4 d-flex flex-column">
       
        <NavLink to="/dashboard" className="sidebar-link">
          Dashboard
        </NavLink>
       
        <NavLink to="/loans" end className="sidebar-link">
          My Loans
        </NavLink>
        <NavLink to="/loans/new" className="sidebar-link">
          Add Loan
        </NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;