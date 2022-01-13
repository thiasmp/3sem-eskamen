
import React from "react"
import { Table } from "react-bootstrap"
export default function AllAuctions(props) {
    return (
        <div key={props.auction}>
            <table  table-striped="true">
                <thead>
                    <tr>
                        <th width="150">Name</th>
                        <th width="150">Date</th>
                        <th width="150">Time</th>
                        <th width="150">Location</th>
                    </tr>
                </thead>
                <tbody>
                     {props.auction.map((auction) => (
                         <tr key={auction.name}>
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