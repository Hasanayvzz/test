import React, {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { ApiRequest } from "../pages/api";
import { toast } from "react-toastify";
import SettingsContext from "./SettingsContext";

export interface IAuthContextProps {
  user: string | null | any;
  userData: any;
  trigger: any;
  setTrigger: any;
  setUserData: any;
  handleLogout: any;
  displaySuccessToast: any;
  displayErrorToast: any;
  itemData: any;
  setItemData: any;
  handleLogin: any;
  setUser?(...args: unknown[]): unknown;
}
const AuthContext = createContext<IAuthContextProps>({} as IAuthContextProps);
interface IAuthContextProviderProps {
  children: ReactNode;
}
export const AuthContextProvider: FC<IAuthContextProviderProps> = ({
  children,
}) => {
  const [user, setUser] = useState<string | null>(
    typeof window !== "undefined" ? localStorage?.getItem("travel_user") : null
  );
  const [trigger, setTrigger] = useState(false);
  const [userData, setUserData] = useState<any>();
  const [itemData, setItemData] = useState<any>();

  const displaySuccessToast = (message: any) => {
    toast.success(message, {
      position: "top-right",
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: "light",
      autoClose: 3000,
    });
  };
  const displayErrorToast = (err: any, message) => {
    toast.error(err?.response?.data?.message || message, {
      position: "top-right",
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: "light",
      autoClose: 3000,
    });
  };
  const { settingsData, setSettingsData } = useContext(SettingsContext);
  const router = useRouter();
  const handleLogin = async (email, password) => {
    try {
      const res = await ApiRequest.login({
        email: email,
        password: password,
      });
      if (res && res.status === "OK") {
        setUser(res.user._id);
        Cookies.set("accessToken", res.token);
        router.push("/");
        displaySuccessToast("Hoşgeldiniz");
      }
    } catch (err: any) {
      console.log(err);
      displayErrorToast(err, "");
    }
  };
  const handleLogout = async () => {
    Cookies.remove("accessToken");
    Cookies.remove("refreshToken");
    localStorage.removeItem("travel_user");
    if (setSettingsData) setSettingsData(null);
    if (setUser) setUser(null);
    await router.push("/");
    window.location.reload();
  };
  useEffect(() => {
    if (user) {
      localStorage.setItem("travel_user", user);
    } else if (!user) {
      //  router.push("/auth/login");
    }
  }, [user]);

  const value = useMemo(
    () => ({
      user,

      userData,
      setUserData,
      trigger,
      setTrigger,
      setUser,
      handleLogout,
      displaySuccessToast,
      displayErrorToast,
      handleLogin,
      itemData,
      setItemData,
    }),
    [
      user,

      userData,
      handleLogout,
      itemData,
      setItemData,
      handleLogin,
      displaySuccessToast,
      trigger,
      setTrigger,
    ]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthContext;
