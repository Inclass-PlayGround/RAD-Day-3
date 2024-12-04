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


            {customer.map((cust) => (
                <h2>{cust.name +" "+ cust.email +" "+ cust.phone}</h2>
            ))}

        </div>
    );
}

export default App;
