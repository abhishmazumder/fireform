import { RiAddCircleLine } from "react-icons/ri";

const Dashboard = () => {
  return (
    <div className="h-screen flex p-6 font-body">
      <div className="w-1/5 flex flex-col gap-6">
        <div className="flex gap-3 h-20">
          <button className="h-full flex justify-center items-center gap-1 flex-1 rounded-xl bg-primary hover:bg-primary-dark text-white transition-all">
            <RiAddCircleLine className="size-6" />
            <p className="text-lg font-medium">Form</p>
          </button>
          <button className="h-full flex justify-center items-center gap-1 flex-1 rounded-xl bg-secondary hover:bg-secondary-light text-primary transition-all">
            <RiAddCircleLine className="size-6" />
            <p className="text-lg font-medium">Project</p>
          </button>
        </div>
        <div>
          
        </div>
      </div>
      <div className="w-4/5"></div>
    </div>
  );
};

export default Dashboard;
