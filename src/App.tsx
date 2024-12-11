import './App.css';
import {useState} from "react";
import {Customer} from "./Modles/Customer.ts";

function App() {

    const [customer, setCustomer] = useState<Customer[]>([]);

    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phone, setPhone] = useState<string>('');

    function addCustomer(){
        const newCustomer = new Customer(name, email, phone);
        setCustomer((prevCustomers) => [...prevCustomers, newCustomer]);
    }

    function deleteCustomer(){
        setCustomer((prevCustomers) => prevCustomers.slice(0, -1));
    }

    function deleteByEmailCustomer(){
         setCustomer(customer.filter((customer) => (customer.email!=email)))
    }

    function updateCustomer(){
        const customers =customer.map((cus)=>{
            if (cus.email != email) {
                return cus
            }else{
                return {...customer,name:name,email:email,phone:phone}
                // return new Customer(name, email, phone);
            }
        })

        setCustomer(customers);
    }

    return (
        <div>
            <input name={"firstName"} className={"inputs"} type="text" placeholder={"name"} onChange={(e) => {
                setName(e.target.value)
            }}/>
            <input name={"lastName"} className={"inputs"} type="text" placeholder={"email"} onChange={(e) => {
                setEmail(e.target.value)
            }}/>
            <input name={"lastName"} className={"inputs"} type="text" placeholder={"phone"} onChange={(e) => {
                setPhone(e.target.value)
            }}/>

            <br/>
            <br/>

            <button onClick={addCustomer}>Add Customer</button>
            <button onClick={deleteCustomer}>Delete Customer</button>
            <button onClick={deleteByEmailCustomer}>Delete By Customer</button>
            <button onClick={updateCustomer}>update By Customer</button>

            {customer.map(customer => (
                <h1>{customer.name + " " + customer.email + " " + customer.phone}</h1>
            ))}
        </div>
    );
}

export default App;
