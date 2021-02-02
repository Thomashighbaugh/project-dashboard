import { useState, useEffect } from "react";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useTheme } from "next-themes";

export function Layout({ children }) {
  return (
    <div className="w-full min-h-screen bg-hero-brick-wall dark:bg-hero-brick-wall-dark dark:bg-gray-900 dark:text-white">
      <div className="max-w-screen-xl px-6 py-12 mx-auto antialiased font-body">
        <Header />
        <main className="text-gray-300 border-4 border-gray-900 dark:border-gray-200 rounded-2xl bg-gray-50 dark:bg-gray-900">{children}</main>

      </div>
    </div>
  );
}

const Header = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const { pathname } = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const toggleDarkMode = (checked) => {
    const isDarkMode = checked;

    if (isDarkMode) setTheme("dark");
    else setTheme("light");
  };

  const isRoot = pathname === "/";
  const isDarkMode = resolvedTheme === "dark";

  return (
    <header
      className={clsx("flex items-center justify-between", {
        "mb-16": isRoot,
        "mb-5": !isRoot,
      })}
    >
        {isRoot ? <LargeTitle /> : <SmallTitle />}
      {mounted && (
        <DarkModeSwitch
          checked={isDarkMode}
          onChange={toggleDarkMode}
          size={80}
          className= "px-6 py-3 mx-1 text-2xl bg-white border-2 border-gray-900 outline-none rounded-2xl focus:shadow-outline dark:bg-gray-400 dark:border-white hover:bg-gray-50 dark:hover:bg-gray-200 hover:bg-white hover:border-gray-400"
        />
      )}
    </header>
  );
};

const LargeTitle = () => (
  <h1>
    <Link href="/">
      <a
          className={clsx(
               "bg-gray-700 text-white text-5xl font-light border-2 rounded-2xl px-6 py-3  mx-1 outline-none focus:shadow-outline dark:bg-gray-400 dark:border-white hover:bg-gray-50 dark:hover:bg-gray-50 hover:text-gray-900  sm:text-2xl xs:text-2xl hover:border-gray-900"

          )}
      >
        Projects Lab
      </a>
    </Link>
  </h1>
);

const SmallTitle = () => (
  <h1>
    <Link href="/">
      <a
        className={clsx(
          "text-5xl bg-gray-700 text-white font-light  border-2 hover:bg-gray-400 rounded-2xl  px-4 py-4 mx-1 outline-none dark:bg-gray-400 dark:border-white dark:hover:bg-white dark:hover:text-gray-600 sm:text-2xl xs:text-2xl  dark:hover:border-gray-600",
          "dark:text-white"
        )}
      >
        Projects Lab{" "}
      </a>
    </Link>
  </h1>
);
