import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppRoutes from "./routes";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<AppRoutes />}>
          <Route path="" element={<HomePage />}></Route>
          <Route path="/error" element={<ErrorPage />}></Route>
        </Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
