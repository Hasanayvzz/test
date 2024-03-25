import React from "react";
import Header from "../header";
export interface IPageBuilder {
  children?: React.ReactNode;
}
function PageBuilder({ children }: IPageBuilder) {
  return (
    <>
      <Header page="sub-header" />
      {children && children}
    </>
  );
}

export default PageBuilder;
