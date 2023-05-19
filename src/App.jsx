import { Navigate, Route, Router, Routes } from "react-router-dom";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import SingleProduct from "./components/SingleProduct";
import { useMediaQuery } from "./useMediaQuery";
import CategoriesPage from "./components/CategoriesPage";
import Checkout from "./components/Checkout";
import About from "./components/About";
import { cartData } from "./data";
import Search from "./components/Search";

function App() {
  let isPageWide = useMediaQuery("(min-width: 1100px)");

  const ProtectedRoute = ({ data, redirectPath = "/" }) => {
    if (data.length === 0) {
      return <Navigate to={redirectPath} replace />;
    }

    return <Checkout />;
  };

  return (
    <div className="App">
      {isPageWide ? <Navbar /> : <Sidebar />}
      <Routes>
        <Route exact path="/" element={<Hero />} />
        <Route exact path="/product/:id" element={<SingleProduct />} />
        <Route
          exact
          path="/categories/:category"
          element={<CategoriesPage />}
        />
        <Route element={<ProtectedRoute data={cartData}/>}>
          <Route exact path="/checkout" element={<Checkout />} />
        </Route>
        <Route exact path="/about" element={<About />} />
        <Route path="*" element={<p>There's nothing here: 404!</p>} />
        <Route exact path="/search/:search" element={<Search />}/>
      </Routes>
      {/* <Modal /> */}
    </div>
  );
}

export default App;
