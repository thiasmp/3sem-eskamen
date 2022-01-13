import { useState } from "react";



    function newAuction(props) {
      
        const initialState = {
            name: "",
            date: "",
            time: "",
            location: "",
        };
        const [auctionName, setAuctionName] = useState(initialState.name);
        const [auctionDate, setAuctionDate] = useState(initialState.date);
        const [auctionTime, setAuctionTime] = useState(initialState.time);
        const [auctionLocation, setAuctionLocation] = useState(initialState.location);

        const handleSubmit = (event) => {
            event.preventDefault();

            const options = {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: auctionName,
                    date: auctionDate,
                    time: auctionTime,
                    location: auctionLocation
                });
                fetch('http://thiasmeyer.dk/tomcat/Exam-sp6/api/auctions/newAuction', options)
            };
        }

}