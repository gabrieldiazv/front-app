import Dashboard from "../../components/dashboard";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return <Dashboard>{children}</Dashboard>;
};

export default layout;
