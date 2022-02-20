import { useLazyQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { FETCH_ORDERS } from "../../graphql/queries";

export default function OrdersTable(){
    const [ordered, setOrdered] = useState([]);
    const [getOrders, {data, loading, errors}] = useLazyQuery(FETCH_ORDERS, {
        variables: {
            status: "Ordered"
        }
    });

    useEffect(()=>{
        getOrders().then((res)=>{
            setOrdered(res.data.getOrders);
            console.log(res.data.getOrders);
        }).catch((err)=>{
            console.log(err);
        });
    },[]);
    
    const orders = [
        {
            id: 100,
            orderId: 1,
            source: "Dhanbad",
            destination: "Patna",
            type: "Documents",
            bill: "520",
            priority: "Normal",
            status:"Pending"
        },
        {
            id: 101,
            orderId: 1,
            source: "Kolkata",
            destination: "Bangalore",
            type: "Electronics",
            bill: "1520",
            priority: "Priority",
            status:"Pending"
        },
        {
            id: 102,
            orderId: 1,
            source: "Delhi",
            destination: "Mumbai",
            type: "Documents",
            bill: "120",
            priority: "Normal",
            status:"Pending"
        },
        {
            id: 103,
            orderId: 1,
            source: "Jaipur",
            destination: "Indore",
            type: "Food Items",
            bill: "730",
            priority: "Normal",
            status:"Pending"
        },
        {
            id: 104,
            orderId: 1,
            source: "Dehradun",
            destination: "Haridwar",
            type: "Documents",
            bill: "324",
            priority: "Priority",
            status:"Pending"
        }
    ];
    return(
        <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                    <table className="min-w-full text-center">
                    <thead className="border-b bg-red-50">
                        <tr>
                            <th scope="col" className="text-sm font-medium text-gray-800 px-6 py-4">
                                Sl.No.
                            </th>
                            <th scope="col" className="text-sm font-medium text-gray-800 px-6 py-4">
                                Order ID
                            </th>
                            <th scope="col" className="text-sm font-medium text-gray-800 px-6 py-4">
                                Source
                            </th>
                            <th scope="col" className="text-sm font-medium text-gray-800 px-6 py-4">
                                Destination
                            </th>
                            <th scope="col" className="text-sm font-medium text-gray-800 px-6 py-4">
                                Type
                            </th>
                            <th scope="col" className="text-sm font-medium text-gray-800 px-6 py-4">
                                Bill
                            </th>
                            <th scope="col" className="text-sm font-medium text-gray-800 px-6 py-4">
                                Priority
                            </th>
                            <th scope="col" className="text-sm font-medium text-gray-800 px-6 py-4">
                                Status
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {orders.map((order,index)=>
                            <tr className="bg-white border-b">
                                <td className="px-auto py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    {index+1}
                                </td>
                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    {order.id}
                                </td>
                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    {order.source}
                                </td>
                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    {order.destination}
                                </td>
                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    {order.type}
                                </td>
                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    Rs.{order.bill}
                                </td>
                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    {order.priority}
                                </td>
                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    <select>
                                        <option value="Pending">Pending</option>
                                        <option value="Accepted">Accepted</option>
                                        <option value="Completed">Completed</option>
                                        <option value="Rejected">Rejected</option>
                                    </select>
                                </td>
                            </tr>
                        )} */}
                        {ordered.map((order,index)=>
                            <tr className="bg-white border-b">
                                <td className="px-auto py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    {index+1}
                                </td>
                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    {order.order_id}
                                </td>
                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    {order.source_city}
                                </td>
                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    {order.destination_city}
                                </td>
                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    {order.type}
                                </td>
                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    Rs.{order.amount}
                                </td>
                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    {order.priority}
                                </td>
                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                    <select>
                                        <option value="Pending">Pending</option>
                                        <option value="Accepted">Accepted</option>
                                        <option value="Completed">Completed</option>
                                        <option value="Rejected">Rejected</option>
                                    </select>
                                </td>
                            </tr>
                        )}
                    </tbody>
                    </table>
                </div>
                </div>
            </div>
        </div>
    );
}