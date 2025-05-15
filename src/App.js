import "./styles.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="container">
      <Header />
      <div className="content">
        <Main />
      </div>
      <Footer />
    </div>
  );
}
