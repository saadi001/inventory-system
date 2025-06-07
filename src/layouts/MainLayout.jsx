import { SidebarMenu } from "@/assets/data/SidebarMenu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronLeft, LogOut } from "lucide-react";
import { Link, Outlet } from "react-router";
import logo from "../assets/logo/logo.png";

const MainLayout = () => {
  return (
    <div className="h-screen flex overflow-hidden font-baloo">
      {/* Sidebar */}
      <aside className="w-[280px] flex-shrink-0 flex flex-col text-textColor border-r border-gray-100">
        {/* Top: Logo */}
        <div className="px-6 py-4 relative ">
          <div className="flex justify-center">
            <img src={logo} alt="logo" className="w-20" />
          </div>
          <div className="border rounded-full bg-white absolute top-1/2 -translate-y-1/2  -right-3 w-6 h-6 flex items-center justify-center cursor-pointer hover:bg-slate-100 z-[50]">
            <ChevronLeft size={16} className="text-slate-600" />
          </div>
        </div>

        {/* Middle: Scrollable Menu */}
        <ScrollArea scrollHideDelay={400} className={"flex-1"}>
          <nav className="  space-y-1 px-4 py-1 ">
            {SidebarMenu.map((menu, i) => (
              <div key={i} className=" rounded cursor-pointer ">
                {menu?.link ? (
                  <Link
                    to={menu?.link}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-slate-700"
                  >
                    {menu?.icon}
                    <span className="text-base">{menu?.section}</span>
                  </Link>
                ) : (
                  <>
                    {" "}
                    <p className="px-3 py-1.5 text-base flex items-center gap-2 rounded-lg text-slate-700">
                      {menu?.icon}
                      {menu?.section}
                    </p>
                    {menu?.menus?.length > 0 && (
                      <div className=" ml-5 relative overflow-hidden">
                        {menu?.menus?.map((m, i) => (
                          <Link
                            to={m?.link}
                            key={i}
                            className="relative px-3 py-1.5 ml-3 text-base flex items-center gap-2 rounded-lg text-slate-700 "
                          >
                            {m?.name}
                            <div className="border border-r-0 border-t-0  w-3 h-14 absolute -left-[12px] bottom-4 rounded-bl-xl "></div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </nav>
        </ScrollArea>

        {/* Bottom: Logout */}
        <div className=" py-3  px-5">
          <button className="w-full  py-3 px-4 rounded text-sm flex items-center bg-red-100/55 hover:bg-red-100/80 hover:text-red-400 justify-center gap-4 text-textColor font-semibold">
            <LogOut size={20} /> Logout
          </button>
        </div>
      </aside>
      <main className="w-full overflow-y-auto">
        <div>Navbar</div>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
