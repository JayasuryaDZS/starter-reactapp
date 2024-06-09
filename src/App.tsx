import React from "react";
import { Route, Routes } from "react-router-dom";
import { authProtectedRoutes, publicRoutes } from "./routes/allRoutes";
import AuthProtected from "./routes/AuthProtected";

function App() {

  return (
    <React.Fragment>
      <Routes>
        {publicRoutes.map((route, idx) => (
          <Route 
            path={route.path}
            key={idx}
            element={
              <React.Fragment>
                {route.component}
              </React.Fragment>
            }
          />
        ))}
        {authProtectedRoutes.map((route,idx) => (
          <Route 
            path={route.path}
            key={idx}
            element={
              <React.Fragment>
                <AuthProtected>
                  {route.component}
                </AuthProtected>
              </React.Fragment>
            }
          />
        ))}
      </Routes>
    </React.Fragment>
  )
}

export default App
