
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GridBox from './Components/GridBox';
import DefaultPage from './Components/DefaultPage';
function App() {
  return (
   <>
     <Router>
            <Routes>
                <Route path="/task-1" element={<GridBox/>} />
                <Route path="*" element={<DefaultPage />} />
            </Routes>
        </Router>
   </>
  );
}

export default App;
