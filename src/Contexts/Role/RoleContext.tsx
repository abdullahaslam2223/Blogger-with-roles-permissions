import React from "react";

interface RoleContextType {
  role: string;
  setRole: (role: string) => void;
}

const initialRoleContext: RoleContextType = {
  role: "manager",
  setRole: () => {},
};

export const RoleContext =
  React.createContext<RoleContextType>(initialRoleContext);

export const RoleProvider: React.FC = ({ children }) => {
  const [role, setRoleState] = React.useState<string>("");

  const setRole = (newRole: string) => {
    setRoleState(newRole);
  };

  return (
    <RoleContext.Provider value={{ role, setRole }}>
      {children}
    </RoleContext.Provider>
  );
};
