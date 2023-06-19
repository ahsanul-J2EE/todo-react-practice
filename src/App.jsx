import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";

const LOCAL_STORAGE_KEY = "todo:tasks";

function App() {
  return (
    <>
      <Header />
      <Tasks />
    </>
  );
}

export default App;
