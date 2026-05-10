import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./features/auth/pages/Login";
import Register from "./features/auth/pages/Register";
import Dashboard from "./features/items/pages/Dashboard";
import ReportLost from "./features/items/pages/ReportLost";
import ReportFound from "./features/items/pages/ReportFound";
import BrowseItems from "./features/items/pages/BrowseItems";
import MyReports from "./features/items/pages/MyReports";
import ProtectedRoute from "./features/auth/components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/report-lost" element={<ProtectedRoute><ReportLost /></ProtectedRoute>} />
        <Route path="/report-found" element={<ProtectedRoute><ReportFound /></ProtectedRoute>} />
        <Route path="/browse" element={<ProtectedRoute><BrowseItems /></ProtectedRoute>} />
        <Route path="/my-reports" element={<ProtectedRoute><MyReports /></ProtectedRoute>} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;