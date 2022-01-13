
import React from "react"
import { Table } from "react-bootstrap"
export default function AllAuctions(props) {
    return (
        <div key={props.auction}>
            <table  table-striped hover variant="dark">
                <thead>
                    <tr>
                        <th width="100">Name</th>
                        <th width="100">Date</th>
                        <th width="100">Time</th>
                        <th width="100">Location</th>
                    </tr>
                </thead>
                <tbody>
                     {props.auction.map((auction) => (
                         <tr>
                             <td > {auction.name}</td>
                             <td> {auction.date} </td>
                             <td> {auction.time}</td>
                             <td> {auction.location} </td>
                         </tr>
                        
                    ))}
                </tbody>
            </table>
            
        </div>
        
    )
}