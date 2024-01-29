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
