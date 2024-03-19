import { memo, useState } from "react";
import Logo from "../../assets/logo-white-text.svg?react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { FiX } from "react-icons/fi";

const Header = memo(() => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav
      className={
        "sticky w-full flex items-center justify-between flex-wrap py-3 px-6 bg-secondary-dark border-b-[1px] border-white"
      }
    >
      <div className="flex items-center flex-shrink-0">
        <Link className="cursor-pointer" to={"/"}>
          <Logo />
        </Link>
      </div>
      <div
        className="flex md:hidden cursor-pointer justify-center items-center "
        onClick={toggleMenu}
      >
        {isOpen ? (
          <FiX className=" text-white size-6" />
        ) : (
          <FiMenu className=" text-white size-6" />
        )}
      </div>
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } md:flex flex-col md:flex-row w-full md:w-auto h-auto md:h-auto gap-y-6 md:gap-y-0 gap-x-0 md:gap-x-12 pt-6 md:pt-0 items-center`}
      >
        <Link to={"/docs"} className="text-white hover:underline">
          <p>Docs</p>
        </Link>
        <Link to={"/help"} className="text-white hover:underline">
          <p>Help</p>
        </Link>
        <div className="w-full md:w-auto flex flex-col md:flex-row gap-x-3 gap-y-3 justify-center items-center">
          <Link to={"/auth/signup"} className="w-full md:w-auto">
            <button className="w-full md:w-auto px-3 py-2 bg-primary rounded-md text-white hover:bg-primary-dark transition-all">
              <p className="text-sm">SignUp</p>
            </button>
          </Link>
          <Link to={"/auth/login"} className="w-full md:w-auto">
            <button className="w-full md:w-auto px-3 py-2 bg-secondary rounded-md text-primary hover:bg-secondary-light transition-all">
              <p className="text-sm">Login</p>
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
});

Header.displayName = "Header";

export default Header;
