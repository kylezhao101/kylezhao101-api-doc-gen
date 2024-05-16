import type { Metadata } from "next";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "kylezhao101/api/documentation",
  description: "Generated by create next app",
};

export default function DocumentationLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <div className="flex">
      <Sidebar />
      <div className="container pl-5 pr-5 mb-20">
        {children}
      </div>
    </div>
  );
}
