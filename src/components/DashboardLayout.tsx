import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <div className="flex flex-row-reverse w-screen ">
        <div className="w-3/4">
          <Topbar />
          <div className="flex flex-col px-8 pt-24 pb-8 bg-slate-200">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
