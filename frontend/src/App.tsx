import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";

import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";

const App = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Toaster />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;
