import {RouterProvider,createBrowserRouter} from 'react-router-dom'
import Home from "./pages/home";
import Navbar from "./components/navbar";
import Login from "./pages/Login.js";
import Register from './pages/regist';

function App() {
  const router = createBrowserRouter([
    {
      element: <Navbar />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/regist",
      element: <Register />,
    }
]);
  
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
