import { GoogleOAuthProvider } from "@react-oauth/google";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchPage from "./pages/search";
import LoginPage from "./pages/login";
import DashboardPage from "./pages/dashboard";
import ListCarPage from "./pages/list-car";

const CLIENT_ID =
  "501582206439-ie655fk44mnfd81defk11trq0vopng64.apps.googleusercontent.com";
function App() {
  return (
    <>
      <GoogleOAuthProvider clientId={CLIENT_ID}>
        <BrowserRouter>
          <Routes>
            <Route path="/search" element={<SearchPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/cars" element={<ListCarPage />} />
          </Routes>
        </BrowserRouter>
      </GoogleOAuthProvider>
    </>
  );
}

export default App;
