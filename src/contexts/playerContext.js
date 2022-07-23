import { createContext, useState } from "react";

export const playerContext = createContext();

export const PlayerContextProvider = ({ children }) => {
  const [player, setPlayer] = useState(null);

  return (
    <playerContext.Provider value={{ player, setPlayer }}>
      {children}
    </playerContext.Provider>
  );
};
