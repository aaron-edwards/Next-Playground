"use client";

import { useState, useCallback } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import ResponsiveSidebar from "./ResponsiveSidebar";

type Props = {
  children: React.ReactNode;
};

export default function AppShell({ children }: Props) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = useCallback(() => setSidebarOpen(true), [setSidebarOpen]);
  const closeSidebar = useCallback(
    () => setSidebarOpen(false),
    [setSidebarOpen]
  );

  return (
    <>
      <ResponsiveSidebar open={sidebarOpen} closeSidebar={closeSidebar}>
        <Sidebar onClose={closeSidebar} />
      </ResponsiveSidebar>

      <div className="lg:pl-88">
        <Header onSidebarOpen={openSidebar} />
        <main className="py-10">{children}</main>
      </div>
    </>
  );
}
