import { Outlet } from "react-router-dom";
import Footer from "./Footer/";
import Header from "./Header/";
import "../../App.css";

export default function Layout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
