import React, {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import Loader from "../components/Loader";

interface LoaderContextProps {
  isLoading: boolean;
  handleLoading: Dispatch<SetStateAction<any>>;
  isOpen: boolean;
  handleOpen: Dispatch<SetStateAction<any>>;
}

const initialValue: LoaderContextProps = {
  isLoading: false,
  handleLoading: () => {},
  isOpen: true,
  handleOpen: () => {},
};

const LoaderContext = createContext<LoaderContextProps>(initialValue);

interface LoaderProviderProps {
  children: ReactNode;
}

const LoaderProvider = ({ children }: LoaderProviderProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleLoading: React.Dispatch<React.SetStateAction<any>> = (prop) => {
    setIsLoading(prop);
  };

  const handleOpen: React.Dispatch<React.SetStateAction<any>> = (prop) => {
    setIsOpen(prop);
  };

  const values: LoaderContextProps = {
    isLoading,
    handleLoading,
    isOpen,
    handleOpen,
  };

  return (
    <LoaderContext.Provider value={values}>
      {children}
      {isLoading && <Loader />}
    </LoaderContext.Provider>
  );
};

export { LoaderContext, LoaderProvider };
