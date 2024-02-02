import { Toaster } from "react-hot-toast";
import { UserProvider } from "./providers/userContext";
import { RoutesMain } from "./routes"
import "./styles/index.scss";

function App() {
  return (
    <UserProvider>
      <RoutesMain/>
      <Toaster/>
    </UserProvider>
  )
}

export default App
