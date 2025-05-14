import Banner from "./components/banner/Banner"
import Navbar from "./components/navbar/Navbar"
import "./App.css"
import Product from "./components/product/Product"
import Lead from "./components/lead/Lead"
import Footer from "./components/footer/Footer"


function App() {

  return (
    <>
      <div className="app">
        <Navbar />
        <Banner />
        <Product/>
        <Lead/>
        <Footer/>

      </div>
    </>
  )
}

export default App
