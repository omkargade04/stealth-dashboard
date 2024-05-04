import { Poppins } from "next/font/google";
import Sidebar from "@/components/layout/Sidebar";
import { Toaster } from "sonner";
import "./globals.css"

const inter = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex">
          <div className="bg-[#f5f5f5] max-w-xs min-h-screen overflow-y-auto md:min-w-[25rem]">
            <Sidebar />
          </div>
          <div className="bg-[#f5f5f5] flex-1">
            {children}
            <Toaster
              position="top-right"
              richColors
              closeButton
              duration={2000}
              pauseWhenPageIsHidden
              visibleToasts={1}
            />
          </div>
        </main>
      </body>
    </html>
  );
}
