import { BrowserRouter,Routes,Route } from 'react-router-dom'
import PublicPage from '../pages/Public/index'
import PublicLayout from '@/layouts/PublicLayout'
import adminRoutes from './adminRoutes'
import AdminLayout from '@/layouts/AdminLayout'
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<PublicPage/>}/>
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          {/* <Route path="/user" element={<PublicPage/>}/> */}
          {adminRoutes&&adminRoutes.map(item => {
            const Page = item.element
            return (
              <Route key={item.key} path={item.path} element={<Page/>}/>
            )
          })}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router