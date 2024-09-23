import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import "./index.scss";
import Dashboard from "./pages/Dashboard";
import DashboardDark from "./pages/DashboardDark";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <div>Not Found</div>,
    children: [
      {
        path: "/",
        index: true,
        element: <Dashboard />,
      },
      {
        path: "/darkmode",
        index: true,
        element: <DashboardDark />,
      },
    ],
  },
]);

root.render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
);
