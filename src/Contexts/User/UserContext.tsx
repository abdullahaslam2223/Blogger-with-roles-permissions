import React from "react";
import { User } from "../../Components/Blog/types";

interface UserContextType {
  user: User;
  setUser: (role: string) => void;
}

export const UserContext = React.createContext<UserContextType>({
  user: {
    email: undefined,
    password: undefined,
    role: "user",
  },
  setUser: () => {},
});

export const UserProvider: React.FC = ({ children }) => {
  const [user, setUser] = React.useState<User>({
    email: undefined,
    password: undefined,
    role: "user",
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
