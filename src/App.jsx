import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import UserManager from "./components/UserManager";
import BookManager from "./components/BookManager";
import DashBoardManager from "./components/DashBoardManager";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      errorElement: "Not Found Page 404",
      element: <Home />,
      children: [
        {
          path: "/",
          element: <DashBoardManager />,
        },
        {
          path: "/user",
          element: <UserManager />,
        },
        {
          path: "/book",
          element: <BookManager />,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
