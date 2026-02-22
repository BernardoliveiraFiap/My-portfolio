import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";

const App = () => {
  

  return (
    <div className="layout">
      <Header />
      <main className="layout__main">
        <Home />
      </main>
      <Footer />
    </div>
  )
};

export default App
