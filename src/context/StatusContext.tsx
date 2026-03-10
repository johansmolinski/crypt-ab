import { createContext, useContext, useState, ReactNode } from "react";

interface StatusContextType {
  statusText: string;
  setStatusText: (text: string) => void;
  resetStatus: () => void;
}

const DEFAULT_STATUS = "STATUS: OPERATIONAL // CRYPT AB // EST. 2013 // JOHAN SMOLINSKI";

const StatusContext = createContext<StatusContextType>({
  statusText: DEFAULT_STATUS,
  setStatusText: () => {},
  resetStatus: () => {},
});

export const useStatus = () => useContext(StatusContext);

export const StatusProvider = ({ children }: { children: ReactNode }) => {
  const [statusText, setStatusText] = useState(DEFAULT_STATUS);
  const resetStatus = () => setStatusText(DEFAULT_STATUS);

  return (
    <StatusContext.Provider value={{ statusText, setStatusText, resetStatus }}>
      {children}
    </StatusContext.Provider>
  );
};
