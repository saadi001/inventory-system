import { SidebarMenu } from "@/assets/data/SidebarMenu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronLeft, LogOut } from "lucide-react";
import { Link, Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="h-screen flex overflow-hidden">
      {/* Sidebar */}
      <aside className="w-[280px] flex-shrink-0 flex flex-col text-textColor border-r border-gray-100">
        {/* Top: Logo */}
        <div className="px-6 py-5 relative">
          {/* <Image src={logo} alt="logo" className="w-20" /> */}
          <h4>Inventory System</h4>
          <div className="border rounded-full bg-white absolute top-1/2 -translate-y-1/2  -right-3 w-6 h-6 flex items-center justify-center cursor-pointer hover:bg-slate-100 z-[50]">
            <ChevronLeft size={16} className="text-slate-600" />
          </div>
        </div>

        {/* Middle: Scrollable Menu */}
        <ScrollArea scrollHideDelay={400} className={"flex-1"}>
          <nav className="  space-y-2  px-4 py-2 ">
            {SidebarMenu.map((menu, i) => (
              <div key={i} className=" rounded cursor-pointer ">
                {menu?.link ? (
                  <Link to={menu?.link}>{menu?.section}</Link>
                ) : (
                  <p className="p-2 font-publicSans text-[11px] font-[700] text-textColor/80">
                    {menu?.section}
                  </p>
                )}
                {menu?.menus?.length > 0 && (
                  <div className="space-y-1 flex flex-col gap-2">
                    {menu?.menus.map((m, i) => (
                      <Link key={i} to={m?.link}>
                        {m?.name}
                      </Link>
                    ))}
                  </div>
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
