import { Inter } from "next/font/google";
import Header from "./components/Header";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="h-screen bg-[#00c4bb] px-[0.5rem] py-2 md:px-[5vw] overflow-x-hidden flex flex-col">
        <div className="md:bg-none">
          <Header />
        </div>
        <div className="w-full p-2 lg:p-10 bg-[#d9fff9] rounded- lg flex flex-col gap-10 h-full rounded-md  ">
          {children}
        </div>
      </body>
    </html>
  );
}
