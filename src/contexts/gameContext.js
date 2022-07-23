import { createContext, useState } from "react";

export const gameContext = createContext();

export const GameContextProvider = ({ children }) => {
  const [game, setGame] = useState(null);

  return (
    <gameContext.Provider value={{ game, setGame }}>
      {children}
    </gameContext.Provider>
  );
};
