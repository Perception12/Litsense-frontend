import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import { User_Icon, Scan_Icon } from "@/assets/icons";
import { Logo } from "@/assets/images";

const data = {
  navMain: [
    {
      title: "Scan a book",
      url: "#",
      items: [
        {
          title: "User Info",
          url: "#",
          isActive: true,
          icon: User_Icon,
        },
        {
          title: "Identify",
          url: "#",
          icon: Scan_Icon,
        },
      ],
    },
  ],
};

interface AppSidebarProps {
  activePage: string;
  setActivePage: (page: string) => void;
}

const AppSidebar = ({ activePage, setActivePage }: AppSidebarProps) => {
  return (
    <Sidebar className="border-r-secondary">
      <SidebarHeader className="flex items-start justify-center p-4">
        <img src={Logo} alt="LitSense Logo" className="w-[80%]" />
      </SidebarHeader>
      <SidebarContent>
        <SidebarContent>
          {/* We create a SidebarGroup for each parent. */}
          {data.navMain.map((item) => (
            <SidebarGroup key={item.title}>
              <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {item.items.map((item) => (
                    <SidebarMenuItem
                      key={item.title}
                      onClick={() => setActivePage(item.title.toLowerCase())}
                    >
                      <div
                        className={`flex cursor-pointer hover:bg-blue-100 rounded-sm transition-all duration-300 p-2 ${activePage === item.title.toLowerCase() ? "bg-secondary text-black" : "text-gray-800"}`}
                      >
                        <div className="flex items-center gap-2">
                          <img
                            src={item.icon}
                            alt={item.title}
                            className="w-4 h-4"
                          />
                          <a href={item.url}>{item.title}</a>
                        </div>
                      </div>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ))}
        </SidebarContent>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
};

export default AppSidebar;
