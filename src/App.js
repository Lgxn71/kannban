import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Provider } from "react-redux";
import { store } from "./store/store";

import KanbanPage from "./pages/KanbanPage";
import RootLayout from "./pages/RootLayout";

const router = createBrowserRouter([
  {
    path: "",
    element: <RootLayout />,
    children: [{ path: "/", element: <KanbanPage /> }],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  );
}

export default App;
