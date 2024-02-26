import React from "react";
import { setIsAuth } from "../features/user/userSlice";
import { useDispatch } from "react-redux/es/exports";
import { useSelector } from "react-redux";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";

export const SignOutButton = () => {
  const isLoggedIn = useSelector((state) => state.user.isAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signOut = () => {
    if (isLoggedIn) {
      dispatch(setIsAuth(false));
      navigate("/");
    }
  };

  return (
    <Button bgColor="#fff" onClick={signOut}>
      SignOut
    </Button>
  );
};
