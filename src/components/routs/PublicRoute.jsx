import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getSession } from "../../features/getSession";

export default function PublicRoute({ redirectTo = "/", restricted = false }) {
  const [isLoggedIn, setLoggedIn] = useState(
    getSession()
      .then((res) => setLoggedIn(res))
      .catch((res) => setLoggedIn(res))
  );

  return !isLoggedIn ? <Outlet /> : <Navigate to={redirectTo} replace />;
}
