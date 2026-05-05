import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <div className="container ">
      <Navbar />
      <main className="border border-red-500">
        <Outlet />
      </main>
      <div className="pt-50">
        <Footer />
      </div>
    </div>
  );
}

export default App;
