import Navbar from "@/components/Navbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="h-screen flex overflow-hidden font-baloo">
      {/* Sidebar */}
      <Sidebar />
      <main className="w-full overflow-y-auto">
        <Navbar />
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
