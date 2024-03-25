import React, {
  createContext,
  FC,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import AuthContext from "./AuthContext";
import { ApiRequest } from "../pages/api";
import { useRouter } from "next/router";

export interface ISettingsContextProps {
  settingsData: any;
  setSettingsData: any;
}
const SettingsContext = createContext<ISettingsContextProps>(
  {} as ISettingsContextProps
);
interface ISettingsContextProviderProps {
  children: ReactNode;
}
export const SettingsContextProvider: FC<ISettingsContextProviderProps> = ({
  children,
}) => {
  const [settingsData, setSettingsData] = useState<{
    date: string;
    email: string;
    fullName: string;
    password: string;
    userRole: string;
    __v: 0;
    _id: string;
  }>();

  // }
  const { user, handleLogout } = useContext(AuthContext);
  const accessToken = Cookies.get("accessToken");
  const handleGetSettingsData = useCallback(async () => {
    user &&
      accessToken &&
      (await ApiRequest.getUserById(user)
        .then((res: any) => {
          setSettingsData(res.user);
          console.log("res", res);
        })
        .catch((e) => {
          toast.error("Token Expired please login.", {
            position: "top-right",
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            theme: "light",
            autoClose: 3000,
          });

          Cookies.remove("accessToken");
          Cookies.remove("refreshToken");
          localStorage.removeItem("cocktail_user");
        }));
  }, [user]);
  useEffect(() => {
    handleGetSettingsData();

    return () => {};
  }, [handleGetSettingsData]);

  const value = useMemo(
    () => ({
      settingsData,
      setSettingsData,
    }),
    [settingsData]
  );
  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
};
SettingsContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SettingsContext;
