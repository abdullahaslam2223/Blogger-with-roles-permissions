import React, { FormEvent, ChangeEvent } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { UserContext } from "../../Contexts/User/UserContext";

const Login = () => {
  const navigate: NavigateFunction = useNavigate();
  const { setUser } = React.useContext(UserContext);
  const [selectedRole, setSelectedRole] = React.useState<string>("user");
  const [email, setEmail] = React.useState<string | undefined>(undefined);
  const [password, setPassword] = React.useState<string | undefined>(undefined);
  const handleRoleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedRole(e.target.value);
  };
  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    navigate("/blog");
    const user = { email: email, password: password, role: selectedRole };
    localStorage.setItem("user", JSON.stringify(user));
    setUser(user);
  };

  return (
    <div className="bg-gray-200">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-1/2 mx-auto pt-20 h-screen"
      >
        <h1 className="text-lg font-bold mx-auto p-2 bg-green-500 text-white mb-2 rounded-lg">
          Login here
        </h1>
        <input
          className="p-2 mb-2"
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
          required
        />
        <input
          className="p-2 mb-2"
          type="text"
          placeholder="Password"
          required
          value={password}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
        />
        <select
          className="p-2 mb-2"
          value={selectedRole}
          name="roles"
          id="roles"
          onChange={handleRoleChange}
        >
          <option value="user">User</option>
          <option value="manager">Manager</option>
          <option value="admin">Admin</option>
        </select>
        <button className="px-3 mr-1 py-2 border text-green-500 border-green-500 border-1 font-semibold rounded-lg shadow-md hover:bg-green-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-75">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
