import { useEffect, useState } from "react";
import axios from "axios";

function DataFetching() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchMyData = async () => {
            const res = await axios.get('https://fakestoreapi.com/users');
            setData(res.data);
            console.log(res.data);
        };

        fetchMyData();
    }, []);

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Email</th>
                        <th scope="col">Username</th>
                        <th scope="col">Password</th>
                        <th scope="col">Address</th>
                        <th scope="col">Name</th>
                        <th scope="col">Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((dataItem) => (
                        <tr key={dataItem.id}>
                            <td>{dataItem.id}</td>
                            <td>{dataItem.email}</td>
                            <td>{dataItem.username}</td>
                            <td>{dataItem.password}</td>
                            <td>{dataItem.address.street}</td>
                            <td>{dataItem.address.city}</td>
                            <td>{dataItem.address.zipcode}</td>
                            <td>{dataItem.name.firstname}</td>
                            <td>{dataItem.name.lastname}</td>
                            <td>{dataItem.phone}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default DataFetching;