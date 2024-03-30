import "./App.css"
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./components/About";
import Error from "./components/Error";
import {BrowserRouter as Router, Outlet,Routes, Route} from "react-router-dom";
import Contact from "./components/Contact";
import RestaurantDetails from "./components/RestaurantMenu";
import { Suspense } from "react";
import Shimmer from "./components/Shimmer";
import { lazy } from "react";
import RestaurantMenu from "./components/RestaurantMenu";

const InstaMart = lazy(()=>import("./components/InstaMart"));

const App=()=>{
  return(
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  );
};

export const appRouter = (
  <Router>
    <Routes>
        <Route
          path="/"
          element={<App />}
          errorElement={<Error />}>
        <Route 
          path="/" 
          element={<Body />} />
        <Route 
          path="/contact" 
          element={<Contact />} />
        <Route 
          path="/about" 
          element={<About />} />
        <Route 
          path="/restaurant/:resId" 
          element={<RestaurantMenu />}/>
        <Route 
          path="/InstaMart" 
          element={ <Suspense fallback={<Shimmer/>}><InstaMart/>
                    </Suspense> } />
      </Route>
    </Routes>
  </Router>
);

// export const appRouterr = createBrowserRouter(
//   <Route path="/" element={<App/>}>
//     <Route path="/" element={<Body/>}>
//     <Route path="/contact" element={<Contact/>}></Route>
//     <Route path="/about" element={<About/>}></Route>
//     <Route path="/restaurant/:id" element={<Restaurant/>}></Route>
//     </Route>
//   </Route>
// )

// export const appRouter = createBrowserRouter([
//   {
//     path : "/",
//     element : <App/>,
//     errorElement : <Error/>,
//     children : [
//       {
//         path : "/",
//         element : <Body/>,
//       },
//       {
//         path : "/contact",
//         element : <Contact/>,
//       },
//       {
//       path : "/about",
//       element : <About/>,
//       },
//       {
//         path : "/restaurant/:id",
//         element : <RestaurantDetails/>,
//       },
//   ],
//   },
// ])

export default App;