import "./styles.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

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
