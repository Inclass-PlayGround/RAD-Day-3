import './App.css';
import {createBrowserRouter,RouterProvider} from "react-router";
import Dashboard from  "./Pages/Dashboard.tsx"
import AddCustomer from "./Pages/Addcustomer.tsx";
import UpdateCustomer from "./Pages/UpdateCustomer.tsx"
import DeleteCustomer from "./Pages/DeleteCustomer.tsx"

function App() {

    const router = createBrowserRouter([
        {path:'',element:<Dashboard/>},
        {path:'/add',element:<AddCustomer/>},
        {path:'/update',element:<UpdateCustomer/>},
        {path:'/delete',element:<DeleteCustomer/>},
    ])

    return (
        <>
            <RouterProvider router={router}/>
        </>
    );
}

export default App;
