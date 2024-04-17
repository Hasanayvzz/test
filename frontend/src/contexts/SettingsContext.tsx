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
import { LoaderContext } from "./loaderContext";

export interface ISettingsContextProps {
  settingsData: any;
  setSettingsData: any;
  setTrigger: any;
  trigger: any;
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
  const [trigger, setTrigger] = useState<boolean>(false);
  const { handleLoading } = useContext(LoaderContext);
  const handleGetSettingsData = useCallback(async () => {
    if (user && accessToken) {
      handleLoading(true);
      await ApiRequest.getUserById(user)
        .then((res: any) => {
          setSettingsData(res.user);
          console.log("res", res);
          handleLoading(false);
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
          handleLoading(false);

          Cookies.remove("accessToken");
        });
    }
  }, [user]);
  useEffect(() => {
    handleGetSettingsData();

    return () => {};
  }, [handleGetSettingsData, trigger]);

  const value = useMemo(
    () => ({
      settingsData,
      setSettingsData,
      setTrigger,
      trigger,
    }),
    [settingsData, trigger]
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
