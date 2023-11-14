import userRoutes from '@/pages/Admin/User/routes'
import dashBoardRoutes from '@/pages/Admin/routes'
const adminRoutes = [
    ...dashBoardRoutes,
    ...userRoutes,
]
export default adminRoutes