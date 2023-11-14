
import User from './index'
import UserDetail from './UserDetail'
const routesUser = [
    {key: "admin-user",path: '/admin/user',element: User, layout: "AdminLayout"},
    {key: "admin-user-detail",path: '/admin/:id',element: UserDetail, layout: "AdminLayout"}
]
export default routesUser