import {createBrowserRouter} from 'react-router';
import Home from '../pages/Home';
import Main from '../layout/Main';


const router = createBrowserRouter([
    {
        path:"/",
        Component:Main,
        children:[
            {index:true, Component:Home}
        ]
    }
])

export default router;