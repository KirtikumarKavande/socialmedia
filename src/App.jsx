import MainContainer from "./components/MainContainer/MainContainer.jsx";
import SocialMedia from "./components/SocialMedia.jsx";
import { BrowserRouter } from "react-router-dom";
import CustomRoutes from "./routes/CustomRoutes.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import PostProvider from "./components/Provider/PostProvider.jsx";
const App = () => {
  return (
    <>
      <PostProvider>
        <Navbar />
        <CustomRoutes />
      </PostProvider>
    </>
  );
};

export default App;
