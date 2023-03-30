import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import KannbanPage from "./pages/KannbanPage";
import RootLayout from "./pages/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "kannban", element: <KannbanPage /> },
      { index: true, element: "docs" },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
