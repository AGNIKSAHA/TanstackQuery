import { NavLink } from "react-router-dom";

const Navbar = () => {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `transition-colors duration-200 ${
      isActive ? "text-sky-400" : "text-slate-200 hover:text-sky-400"
    }`;

  return (
    <nav className="w-full bg-slate-900 px-8 py-4 flex items-center justify-between">
      <h1 className="text-xl font-semibold text-white tracking-wide">
        TanstackQuery
      </h1>

      <ul className="flex gap-8 text-sm">
        <li>
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/trad" className={linkClass}>
            FetchOld
          </NavLink>
        </li>
        <li>
          <NavLink to="/rq" className={linkClass}>
            FetchRQ
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
