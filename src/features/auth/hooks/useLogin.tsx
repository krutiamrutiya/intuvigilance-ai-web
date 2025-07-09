import { useState } from "react";
import type { LoginValueProps } from "@features/auth/types";
import { removeAccessToken, setAccessToken } from "@store/actions/loginAction";
import { login, logout } from "@features/auth/services/authentication";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import useFetchAPI from "@/hooks/useFetchAPI";
import { AppDispatch } from "@/store/store";
import { saveToken } from "@/utils/common";

const useLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const [submitPayload, setSubmitPayload] = useState<Partial<LoginValueProps>>(
    {}
  );
  const [isLogout, setLogout] = useState<boolean>(false);

  const accessToken = useSelector(
    (state: { login: { accessToken: string } }) => {
      return state.login.accessToken;
    }
  );

  const handleLogin = (values: LoginValueProps) => {
    setSubmitPayload({
      ...values,
    });
  };

  const handleLogout = () => {
    const token = accessToken;
    if (token) {
      setLogout(true);
    }
  };

  const success = (data: any, type: string) => {
    switch (type) {
      case "login": {
        const token = data?.data?.access_token;
        setSubmitPayload({});
        saveToken(token);
        setAccessToken(token);
        break;
      }
      case "logout": {
        setLogout(false);
        dispatch(removeAccessToken());
        navigate("/");
        break;
      }
      default:
        break;
    }
  };

  const failureCb = (error: any, type: string) => {
    switch (type) {
      case "login": {
        setSubmitPayload({});
        break;
      }
    }
  };

  const { isLoading } = useFetchAPI({
    accessPath: ["data"],
    apiFunction: login,
    apiCallCondition: Object.keys(submitPayload).length,
    dependencyArray: [submitPayload],
    apiParams: { payload: submitPayload },
    defaultResponseValue: [],
    showSuccessMessage: true,
    hideErrorMesssage: false,
    successCb: (data: any) => success(data, "login"),
    failureCb: (error) => failureCb("login", error),
  });

  const { isLoading: isLogoutLoading } = useFetchAPI({
    apiCallCondition: isLogout,
    apiFunction: logout,
    dependencyArray: [isLogout],
    defaultResponseValue: [],
    showSuccessMessage: true,
    hideErrorMesssage: false,
    successCb: () => success([], "logout"),
    failureCb: () => setLogout(false),
  });

  return [
    { isLoading, isLogoutLoading },
    { handleLogin, handleLogout },
  ];
};

export default useLogin;
