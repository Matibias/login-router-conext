import { Navigate, Route, Routes } from "react-router-dom"
import { HomePage, AboutPage, LoginPage } from "./pages"
import { Navbar } from "./components/Navbar"

export const RouterApp = () => {
  return (
    <>
      <h1>RouterApp</h1>
      <Navbar />
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
