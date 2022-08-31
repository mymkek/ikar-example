import './App.css';
import Workspace from "./modules/workspace/workspace";
import Sidebar from "./modules/sidebar/sidebar";
import AppContainer from "./utils/appContainer/app-container";

function App() {
  return (
      <AppContainer>
        <Sidebar/>
        <Workspace/>
      </AppContainer>
  );
}

export default App;
