import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Layout } from "./Layout";
import { Home } from "./views/Home";
import { ContentCreator } from "./views/ContentCreator";
import { NotFound } from "./views/NotFound";
import { LaboralExperience } from "./views/LaboralExperience";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/content-creator",
        element: <ContentCreator />,
      }, {
        path: "/laboral-experience",
        element: <LaboralExperience />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
