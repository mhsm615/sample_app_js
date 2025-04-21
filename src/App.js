import "./styles.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="container">
      <Header />
      <div className="content">
        <Sidebar />
        <Main />
      </div>
      <Footer />
    </div>
  );
}
