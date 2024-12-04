import './App.css';
import { ChangeEvent, useState } from 'react';
import {Customer} from "./Modles/Customer.ts";

function App() {
    const [customer, setCustomer] = useState<Customer[]>([]);

    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phone, setPhone] = useState<string>('');

    function addCustomer() {
        const newCustomer = new Customer(name, email, phone);
        setCustomer((prevCustomers) => [...prevCustomers, newCustomer]);
    }

    function deleteCustomer() {
        setCustomer((prevCustomers) => prevCustomers.slice(0, -1));
    }

    function deleteByEmailCustomer(){
        console.log(email);

        const filteredcustomers: Customer[] = customer.filter((cus) => cus.email != email);

        setCustomer(filteredcustomers)
    }

    function updateCustomer(){
        // let index = -1;
        // for(let cus of customer){
        //     if(cus.email == email){
        //         customer[index] = new Customer(name, email, phone);
        //     }
        //     index+=1;
        // }
        const set = customer.map((cus) => {
            if(cus.email !=email){
                return cus
            }else{
                return new Customer(name, email, phone);
            }
        });

        setCustomer(set)


    }


    return (
        <div>
            <input
                name="name"
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
            />
            <input
                name="email"
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            />
            <input
                name="phone"
                type="text"
                placeholder="Phone"
                value={phone}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)}
            />

            <br />

            <button onClick={addCustomer}>Add Customer</button>
            <button onClick={deleteCustomer}>Delete Customer</button>
            <button onClick={deleteByEmailCustomer}>Delete by Email Customer</button>
            <button onClick={updateCustomer}>Update</button>


            {customer.map((cust) => (
                <h2>{cust.name +" "+ cust.email +" "+ cust.phone}</h2>
            ))}

        </div>
    );
}

export default App;
