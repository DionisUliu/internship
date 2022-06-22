import "./App.css";
import LogIn from "./components/routes/auth/logIn/LogIn";
import AppView from "./components/routes/appView/AppView";
import NotFound from "./assets/notFound/NotFound";
import Books from "./components/routes/books/Books";
import "antd/dist/antd.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "./services/translationServices/translationServices";
import ProtectedRoute from "./components/common/protectedRoutes/ProtectedRoutes";

function App() {
  return (
    <>
      <I18nextProvider i18n={i18n}>
        <Routes>
          <Route path="/" element={<Navigate to="/auth/login" />} />
          <Route path="/auth/login" element={<LogIn />} />

          <Route
            path="/app"
            element={
              <ProtectedRoute>
                <AppView />
              </ProtectedRoute>
            }
          >
            <Route path="books" element={<Books />} />
            <Route path="settings" element={<p>Hello Settings</p>} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </I18nextProvider>
    </>
  );
}

export default App;
