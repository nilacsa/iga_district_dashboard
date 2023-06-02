import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Layout from "./components/shared/Layout";
import Dashbord    from "./components/Dashbord";
import Classreport from "./components/Classreport";
import Sectorreport from "./components/Sectorreport";
import Reports from './components/Reports';
function App() {
  return (
    <div className="">
      <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={ <Dashbord /> } />
            <Route path="Sectorreport" element={ <Sectorreport/> } />
            <Route path="classreport" element={ <Classreport/> } />
            <Route path="reports" element={ <Reports/> } />
            
        </Route>    
      </Routes>
      </Router>

    </div>
    
  );
}

export default App;
