import { Route, Routes } from "react-router-dom"
import AdminLayout from "./Layouts/Admin/AdminLayout"
import { AdminRoutes } from "./Routes/adminRoutes"

function App() {
  return (
    <Routes>
      <Route path="admin" element={<AdminLayout />}>
        {AdminRoutes.map((route, index) => {
          return (
            <Route key={index + 0} path={route.path} element={<route.element />} />
          )
        })}
      </Route>
    </Routes>
  )
}

export default App
