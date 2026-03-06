import "./App.css";
import {
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import AppSidebar from "@/components/AppSidebar";
import IdentifyPage from "./components/IdentifyPage";
import UserInfoPage from "./components/UserInfoPage";
import { useState } from "react";
import type { UserInfo } from "./lib/data_models";

function App() {
  const [activePage, setActivePage] = useState("identify");
  const [userInfo, setUserInfo] = useState<UserInfo>({
    name: "",
    age: undefined,
    occupation: undefined,
    location: undefined,
    favoriteGenres: [],
    favoriteAuthors: [],
  });

  return (
    <>
      <SidebarProvider>
        <AppSidebar activePage={activePage} setActivePage={setActivePage} />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 border-b border-b-secondary px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <p className="text-sm font-semibold text-blue-950">
              Discover your taste!
            </p>
          </header>
          {activePage === "identify" ? (
            <IdentifyPage userInfo={userInfo} />
          ) : (
            <UserInfoPage userInfo={userInfo} setUserInfo={setUserInfo} />
          )}
        </SidebarInset>
      </SidebarProvider>
    </>
  );
}

export default App;
