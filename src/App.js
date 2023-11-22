import "./App.css"
import { About } from "./components/about";
import { Contact } from "./components/contact";
import { Home } from "./components/home";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Template } from "./template/template";

function App() {

  const myRouter = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Template />}>
      <Route path="/home"element={<Home />} />
      <Route path="/about"element={<About />} />
      <Route path="/contact"element={<Contact />} />
      <Route path="*"element={<p>Thsi page is not available</p>} />
    </Route>
  )
    );

  return <div className="App">
    <RouterProvider router={myRouter} />
  
    </div>;
}

export default App;
