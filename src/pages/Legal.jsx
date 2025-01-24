import { Link, NavLink, Outlet } from "react-router-dom";
import UnderlineLink from "../components/others/UnderlineLink";
import { useMemo } from "react";

const Legal = () => {
  const links = useMemo(() => [
    {
      to: "/legal/license",
      text: "License"
    },
    {
      to: "/legal/privacy",
      text: "Privacy"
    },
    {
      to: "/legal/terms",
      text: "Terms"
    }
  ], []);

  return (
    <div className="flex flex-col mx-4 md:mx-12 my-6 gap-y-6">
      <div className="flex gap-x-8">
        {
          links.map(link => <UnderlineLink {...link} />)
        }
      </div>
      <Outlet />
    </div>
  );
};

export default Legal;