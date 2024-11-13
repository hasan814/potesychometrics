import { Outlet } from "react-router-dom";
import Header from "./components/layouts/Header";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <Toaster />
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default App;
