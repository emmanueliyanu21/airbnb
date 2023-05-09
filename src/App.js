import "./App.css";
import AppLayout from "./AppLayout";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
};
export default App;
