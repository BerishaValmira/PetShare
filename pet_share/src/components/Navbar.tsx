import { NavLink } from "react-router-dom";

type NavLinkType = {
  route: string;
  name: string;
};

const NAVLINKS: NavLinkType[] = [
  {
    route: "",
    name: "Home",
  },
  {
    route: "pets",
    name: "Pets",
  },
  { route: "pet-add", name: "Add a Pet" },
];

const Navbar = () => {
  return (
    <div>
      <div className="navbar rounded-md">
        <div className="navbar-start">
          <a className="navbar-item">Ripple UI</a>
        </div>
        <div className="navbar-end">
          {NAVLINKS.map((navLink, index) => (
            <NavLink
              className="navbar-item"
              to={`/${navLink.route}`}
              key={index}
            >
              {navLink.name}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export { Navbar };
