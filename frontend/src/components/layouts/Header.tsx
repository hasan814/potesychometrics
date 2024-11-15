import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

import {
  Button,
  Navbar,
  NavbarLink,
  NavbarToggle,
  TextInput,
} from "flowbite-react";

const Header = () => {
  // =========== Path ===========
  const path = useLocation().pathname;

  // =========== Rendering ===========
  return (
    <Navbar className="border-b-2">
      <Link
        to={"/"}
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
      >
        <span className="rounded-lg px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
          Potesychometrics
        </span>
      </Link>
      <form>
        <TextInput
          type="text"
          placeholder="Search..."
          rightIcon={AiOutlineSearch}
          className="hidden lg:inline"
        />
      </form>
      <Button className="w-12 h-10 lg:hidden" color="gray" pill>
        <AiOutlineSearch />
      </Button>
      <div className="flex gap-2 md:order-2">
        <Button className="w-12 h-10 hidden sm:inline" color="gray" pill>
          <FaMoon />
        </Button>
        <Link to="/sign-in">
          <Button gradientDuoTone="purpleToBlue" outline>
            Sign In
          </Button>
        </Link>
        <NavbarToggle />
      </div>
      <Navbar.Collapse>
        <NavbarLink active={path === "/"} as={"div"}>
          <Link to={"/"}>Home</Link>
        </NavbarLink>
        <NavbarLink active={path === "/about"} as={"div"}>
          <Link to={"/about"}>About</Link>
        </NavbarLink>
        <NavbarLink active={path === "/projects"} as={"div"}>
          <Link to={"/projects"}>Projects</Link>
        </NavbarLink>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
