import Login from "../components/login";
import Dashboard from '../components/Dashboard'
import Signup from '../components/Signup'
import SingleProduct from '../components/SingleProduct'
import PageNotFound from '../components/PageNotFound'
const routes=[
    {path:'/',component:Login},
    {path:'/dashboard',component:Dashboard},
    {path:'/Signup',component:Signup},
    {path:'/product/:id',component:SingleProduct},
    {path:'*',component:PageNotFound}
    

]
export default routes