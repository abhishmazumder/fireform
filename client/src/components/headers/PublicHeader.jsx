import { useState } from "react";
import Logo from "../../assets/logo-white-text.svg?react";
import { Link } from "react-router-dom";
import { FiX, FiMenu } from "react-icons/fi";
import ButtonPrimary from "../others/ButtonPrimary";
import UnderlineLink from "../others/UnderlineLink";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase";

const PublicHeader = () => {
  const [user] = useAuthState(auth);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (<nav className="sticky w-full min-h-16 flex items-center justify-between flex-wrap py-3 px-6 bg-secondary-dark border-b-[1px] border-white">
    <Link to="/" className="flex items-center flex-shrink-0">
      <Logo />
    </Link>

    <button
      className="md:hidden cursor-pointer"
      onClick={toggleMenu}
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      {isOpen ? <FiX className=" text-white size-6" /> : <FiMenu className=" text-white size-6" />}
    </button>

    <div className={`${isOpen ? "flex" : "hidden"} md:flex flex-col md:flex-row w-full md:w-auto gap-y-6 md:gap-y-0 gap-x-0 md:gap-x-12 pt-6 md:pt-0 items-center`}>
      <UnderlineLink to="/docs" text="Docs" />
      <UnderlineLink to="/help" text="Help" />
      {
        user ? <ButtonPrimary variant="bright" size="sm" to="/dashboard">
          Dashboard
        </ButtonPrimary> : <div className="w-full md:w-auto flex flex-col md:flex-row gap-x-3 gap-y-3 justify-center items-center">
          <ButtonPrimary variant="bright" size="sm" to="/auth/signup">
            SignUp
          </ButtonPrimary>
          <ButtonPrimary variant="dark" size="sm" to="/auth/login">
            Login
          </ButtonPrimary>
        </div>
      }
    </div>
  </nav>)
};

export default PublicHeader;
