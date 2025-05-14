import Banner from "./components/banner/Banner"
import Navbar from "./components/navbar/Navbar"
import "./App.css"
import Product from "./components/product/Product"


function App() {

  return (
    <>
      <div className="app">
        <Navbar />
        <Banner />
        <Product/>

      </div>
    </>
  )
}

export default App
