import { RiAddCircleLine } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
import { Body, Collapse, Title } from "../components/others/Collapse";

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="h-screen flex flex-col md:flex-row p-6 font-body">
      <div className="w-72 hidden md:flex flex-col gap-6">
        <div className="flex flex-row gap-3">
          <button className="h-20 w-full flex justify-center items-center gap-1 rounded-2xl bg-primary hover:bg-primary-dark text-white transition-all">
            <RiAddCircleLine className="size-6" />
            <p className="text-lg font-medium">Form</p>
          </button>
          <button className="h-20 w-full flex justify-center items-center gap-1 rounded-2xl bg-secondary hover:bg-secondary-light text-primary transition-all">
            <RiAddCircleLine className="size-6" />
            <p className="text-lg font-medium">Project</p>
          </button>
        </div>
        <div className=" h-full bg-secondary rounded-2xl p-3">
          {[
            {
              projectId: "001",
              projectName: "My First Project",
              createdBy: "abhishek.am988@gmail.com",
              forms: [
                {
                  formId: "001_001",
                  formName: "My First Form",
                  submissions: "0"
                },
                {
                  formId: "001_002",
                  formName: "My Second Form",
                  submissions: "11"
                },
                {
                  formId: "001_003",
                  formName: "My Third Form",
                  submissions: "35"
                },
              ],
            },
            {
              projectId: "002",
              projectName: "My Second Project",
              createdBy: "abhishek.am988@gmail.com",
              forms: [
                {
                  formId: "002_001",
                  formName: "My First Form 2",
                  submissions: "10"
                },
                {
                  formId: "002_002",
                  formName: "My Second Form 2",
                  submissions: "3"
                },
                {
                  formId: "002_003",
                  formName: "My Third Form 2",
                  submissions: "7"
                },
              ],
            },
          ].map((project) => (
            <Collapse key={project?.projectId}>
            <Title actionIcon={IoIosArrowForward}>
            <h1>{project?.projectName}</h1>
            </Title>
            <Body>
            <ul>
                {
                 project?.forms?.map(form => <li key={form.formId} className="flex justify-between items-center text-sm p-2 rounded-xl hover:bg-secondary-light hover:text-white transition-all cursor-pointer">
                    <span className="text-white">
                    {form.formName}
                    </span>
                    <span className="size-8 rounded-full bg-primary text-white flex justify-center items-center">
                    <p>{form.submissions}</p>
                    </span>
                  </li>)
                }
              </ul>
            </Body>
          </Collapse>
          ))}
        </div>
      </div>
      <div className="flex-grow"></div>
    </div>
  );
};

export default Dashboard;
