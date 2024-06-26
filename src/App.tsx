import Blog from "./Components/Blog/Blog";
import { RoleProvider } from "./Contexts/Role/RoleContext";

function App() {
  return (
    <RoleProvider>
      <Blog />
    </RoleProvider>
  );
}

export default App;
