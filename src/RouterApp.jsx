import { Navigate, Route, Routes } from "react-router-dom"
import { HomePage } from "./pages/HomePage"
import { AboutPage } from "./pages/AboutPage"
import { LoginPage } from "./pages/LoginPage"

export const RouterApp = () => {
  return (
    <>
      <h1>RouterApp</h1>
      <hr />

      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="login" element={ <LoginPage /> } />
        <Route path="about" element={ <AboutPage /> } />

        {/* <Route path="/*" element={ <LoginPage /> } /> */}
        <Route path="/*" element={ <Navigate to="/about" /> } />

      </Routes>

    </>
  )
}
