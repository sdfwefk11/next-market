import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "./components/navigater";
import { cls } from "../../libs/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  title,
  canGoBack,
  hasTabBar,
}: {
  children: React.ReactNode;
  title?: string;
  canGoBack?: boolean;
  hasTabBar?: boolean;
}) {
  return (
    <html lang="en">
      <body
        className={cls(
          "w-full max-w-xl mx-auto pt-20",
          inter.className,
          hasTabBar ? "pb-16" : ""
        )}
      >
        <NavBar title={title} />
        {children}
      </body>
      {hasTabBar ? (
        <nav className="bg-white text-gray-800 border-t fixed bottom-0 pb-10 pt-3 flex justify-between items-center w-full">
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
        </nav>
      ) : null}
    </html>
  );
}
