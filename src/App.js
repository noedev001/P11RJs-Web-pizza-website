import { BrowserRouter as Router } from "react-router-dom";
import Hero from "./components/hero/Hero";
import Products from "./components/Products/Products";
import { GlobalStyle } from "./global.styled";
import { productData, productDataTwo } from './components/Products/data.js';
import Feature from "./components/Feature/Feature";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading='Chose your favorite' data={productData} />
      <Feature />
      <Products heading='Sweet Treats for You' data={productDataTwo} />
      <Footer />
    </Router>
  );
}

export default App;
