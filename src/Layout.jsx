import { Outlet } from "react-router-dom";

import { Navbar } from "./components/NavBar";

export const Layout = () => (
  <>
    <header>
      <Navbar />
    </header>
    <main>
      <Outlet />
    </main>
  </>
);
