import { useRoutes } from "react-router-dom"
import { Login } from "../components/Login"

export default function Routes() {
  return useRoutes([
    {
      path: "/login",
      element: <Login />
    }
  ])
}