import { useMemo, useState } from "react";
import Logo from "../../assets/logo-white-text.svg?react";
import { Link, useNavigate } from "react-router-dom";
import { Popover } from "react-tiny-popover";
import { RiUserSettingsLine, RiLogoutCircleRLine, RiExternalLinkLine } from "react-icons/ri";
import { auth, logout } from "../../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const UserHeader = () => {
  const [user, loading] = useAuthState(auth);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const navigate = useNavigate();

  const userPhotoUrl = useMemo(() => {
    if(user?.photoURL) return user?.photoURL;

    return user?.photoURL || "https://images.pexels.com/photos/281260/pexels-photo-281260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  }, [user]);

  return (
    <nav className="sticky w-full min-h-16 flex items-center justify-between flex-wrap py-3 px-6 bg-secondary-dark border-b-[1px] border-white">
      <div className="flex items-center flex-shrink-0">
        <Link className="cursor-pointer" to={"/user/dashboard"}>
          <Logo />
        </Link>
      </div>
      <div>
        <Popover
          isOpen={isPopoverOpen}
          positions={["bottom", "left"]}
          align="center"
          content={
            <div className="flex flex-col min-w-72 pt-6 pb-3 gap-3 bg-secondary rounded-2xl font-body">
              <div className="px-6">
                <p className="text-sm font-bold text-neutral-300">
                  {
                    loading ? "Loading..." : user?.email
                  }
                </p>
              </div>
              <div className="flex items-center justify-between px-6 py-3 group transition-all cursor-pointer hover:bg-secondary-light">
                <p className="text-sm font-normal text-neutral-300 group-hover:text-white">
                  Account Settings
                </p>
                <RiUserSettingsLine className="size-5 text-neutral-300 group-hover:text-white" />
              </div>
              <div className="flex items-center justify-between px-6 py-3 group transition-all cursor-pointer hover:bg-secondary-light" onClick={() => navigate("/")}>
                <p className="text-sm font-normal text-neutral-300 group-hover:text-white">
                  fireform Homepage
                </p>
                <RiExternalLinkLine className="size-5 text-neutral-300 group-hover:text-white" />
              </div>
              <div className="flex items-center justify-between px-6 py-3 group transition-all cursor-pointer hover:bg-secondary-light" onClick={logout}>
                <p className="text-sm font-normal text-neutral-300 group-hover:text-white">
                  Logout
                </p>
                <RiLogoutCircleRLine className="size-5 text-neutral-300 group-hover:text-white" />
              </div>
            </div>
          }
          containerStyle={{
            overflow: "visible",
            paddingRight: "20px",
            paddingTop: "10px",
          }}
          onClickOutside={() => setIsPopoverOpen(false)}
        >
          <div
            className="w-9 h-9 overflow-hidden rounded-full bg-white hover:shadow-[0_0_15px_0px] hover:shadow-white transition-all duration-300"
            onClick={() => setIsPopoverOpen(!isPopoverOpen)}
          >
            <img
              src={userPhotoUrl}
              loading="lazy"
              className="object-cover w-full h-full cursor-pointer"
              alt="placeholder"
            />
          </div>
        </Popover>
      </div>
    </nav>
  );
};

export default UserHeader;