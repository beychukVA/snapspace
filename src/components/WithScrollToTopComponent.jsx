import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const WithScrollToTopComponent = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  return <>{children}</>;
};
