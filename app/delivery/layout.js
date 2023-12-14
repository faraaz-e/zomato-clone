import { Suspense } from "react";
import Loading from "./loading";

const { default: Header } = require("@/components/Header");
const { default: NavSection } = require("@/components/NavSection");

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <Header />
        <NavSection />
        {children}
      </div>
    </>
  );
};

export default Layout;
