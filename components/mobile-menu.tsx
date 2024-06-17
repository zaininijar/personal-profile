"use client";

import { Tab, Tabs } from "@nextui-org/tabs";
import { usePathname } from "next/navigation";

import { FlameIcon, HomeIcon, UserIcon } from "@/components/icons";

export const MobileMenu = () => {
  const pathname = usePathname();

  return (
    <div className="flex md:hidden flex-col place-items-center fixed z-20 pb-2 bottom-0 w-full px-2">
      <Tabs
        fullWidth
        aria-label="Tabs"
        className="bg-slate-900 rounded-xl"
        color="secondary"
        selectedKey={pathname}
        variant="bordered"
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
          key="/"
          href="/"
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
