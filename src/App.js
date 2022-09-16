import LandingPage from "./components/LandingPage";
import PostView from "./components/PostView";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<PostView />} path="/postview" />
          <Route element={<LandingPage />} path="/" />
        </Routes>
      </Router>
    </>
  );
}

export default App;
