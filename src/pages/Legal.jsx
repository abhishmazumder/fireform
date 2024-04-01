import { useEffect, useMemo, useState } from "react";
import { Tab, Tabs } from "../components/others/Tabs";
import {
  getLicense,
  getPrivacyPolicy,
  getTermsAndConditions,
} from "../apis/api";
import Markdown from "react-markdown";
import { useLocation } from "react-router-dom";

const markdownH1 = ({ children }) => {
  return <h1 className="text-3xl font-bold">{children}</h1>;
};

const markdownH2 = ({ children }) => {
  return <h1 className="text-xl font-bold">{children}</h1>;
};

const markdownParagraph = ({ children }) => {
  return <p className="text-md">{children}</p>;
};

const markdownAnchor = ({ children, href }) => {
  return (
    <a
      className="text-primary hover:underline transition-all"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};

const markdownUl = ({ children }) => {
  return <ul className="list-disc list-inside">{children}</ul>;
};

const markdownLi = ({ children }) => {
  return <li className="mb-2">{children}</li>;
};

const Legal = () => {
  const [license, setLicense] = useState("");
  const [privacyPolicy, setPrivacyPolicy] = useState("");
  const [termsAndConditions, setTermsAndConditions] = useState("");

  const [defaultActiveTab, setDefaultActiveTab] = useState(null);

  const location = useLocation();

  useEffect(() => {
    const setup = async () => {
      try {
        const [licenseRes, privacyRes, termsRes] = await Promise.all([
          getLicense(),
          getPrivacyPolicy(),
          getTermsAndConditions(),
        ]);
        setLicense(licenseRes);
        setPrivacyPolicy(privacyRes);
        setTermsAndConditions(termsRes);
      } catch (err) {
        console.log(err);
      }
    };

    setup();
  }, []);

  useEffect(() => {
    const tab = location.pathname?.split("/")?.pop()?.toLocaleLowerCase();
    if (["license", "privacy", "terms"].includes(tab)) {
      setDefaultActiveTab(tab);
    }
  }, [location.pathname]);

  const components = useMemo(
    () => ({
      h1: markdownH1,
      h2: markdownH2,
      p: markdownParagraph,
      a: markdownAnchor,
      ul: markdownUl,
      li: markdownLi,
    }),
    []
  );

  return (
    <div className="flex flex-col my-3">
      <Tabs defaultActiveTab={defaultActiveTab}>
        <Tab label={"License"}>
          <div className="text-white flex flex-col gap-y-6 py-6">
            <Markdown components={components}>{license}</Markdown>
          </div>
        </Tab>
        <Tab label={"Privacy"}>
          <div className="text-white flex flex-col gap-y-6 py-6">
            <Markdown components={components}>{privacyPolicy}</Markdown>
          </div>
        </Tab>
        <Tab label={"Terms"}>
          <div className="text-white flex flex-col gap-y-6 py-6">
            <Markdown components={components}>{termsAndConditions}</Markdown>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default Legal;
