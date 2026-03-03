import { Banner } from "./components/Banner/Banner";
import { Brands } from "./components/Brands/Brands";
import { Categories } from "./components/Categories/Categories";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header"
import { Partners } from "./components/Partners/Partners";
import { Product } from "./components/Product/Product";
import './styles/global.css'
function App() {
  return (
  <>
    <Header />
    <Banner />
    <Categories />

    <Product title="Produtos relacionados" />
    <Partners />

    <Product title="Produtos relacionados" />
    <Partners />

    <Brands />

    <Product title="Produtos relacionados" />
    
    <Footer />

  </>
  
  );
};

export default App