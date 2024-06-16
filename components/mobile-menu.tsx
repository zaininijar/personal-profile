"use client";

import { Tab, Tabs } from "@nextui-org/tabs";
import { FlameIcon, GithubIcon, HomeIcon, UserIcon } from "@/components/icons";
import { usePathname } from "next/navigation";

export const MobileMenu = () => {
  const pathname = usePathname();

  return (
    <div className="flex md:hidden flex-col place-items-center fixed z-20 pb-2 bottom-0 w-full px-2">
      <Tabs
        selectedKey={pathname}
        aria-label="Tabs"
        color="secondary"
        variant="bordered"
        fullWidth
        className="bg-slate-900 rounded-xl"
      >
        <Tab
          key="/about"
          href="/about"
          title={
            <div className="flex flex-col items-center justify-center space-x-2">
              <UserIcon />
            </div>
          }
        />
        <Tab
          href="/"
          key="/"
          title={
            <div className="flex flex-col items-center justify-center space-x-2">
              <HomeIcon />
            </div>
          }
        />
        <Tab
          key="/projects"
          href="/projects"
          title={
            <div className="flex flex-col items-center justify-center space-x-2">
              <FlameIcon />
            </div>
          }
        />
      </Tabs>
    </div>
  );
};
