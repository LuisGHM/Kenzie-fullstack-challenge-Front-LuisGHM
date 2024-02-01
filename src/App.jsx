import { UserProvider } from "./providers/userContext";
import { RoutesMain } from "./routes"
import "./styles/index.scss";

function App() {
  return (
    <UserProvider>
      <RoutesMain/>
    </UserProvider>
  )
}

export default App
