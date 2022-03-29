import { BrowserRouter as Router } from "react-router-dom";
// import Home from "./components/Home";
// import About from "./components/About";
// import SinglePost from "./components/SinglePost";
// import Post from "./components/Post";
// import Stories from "./components/Stories";
// import SingleStory from "./components/SingleStory";
// import NavBar from "./components/NavBar";
// import { AnimatePresence } from "framer-motion";
import { AnimatedRoutes } from "./components/AnimatedRoutes";
import NavBarN from "./components/NavBarN";

function App() {
  // let location = useLocation();
  return (
    <>
      {/* <AnimatePresence> */}
      <Router>
        {/* <NavBar /> */}
        <NavBarN />
        <AnimatedRoutes />
      </Router>
      {/* </AnimatePresence> */}
    </>
  );
}

export default App;
