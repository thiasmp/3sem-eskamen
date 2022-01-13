import { useState } from "react";



        export default  function NewAuction(props) {
      
        const initialState = {
            name: "",
            date: "",
            time: "",
            location: ""
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
                })
            };
                fetch('https://thiasmeyer.dk/tomcat/exam-sp6/api/auctions/newAuction', options)
        };
        
        const newName = (event) => {
            setAuctionName(event.target.value);
        };

        const newDate = (event) => {
            setAuctionDate(event.target.value);
        };

        const newTime = (event) => {
            setAuctionTime(event.target.value);
        };

        const newLocation = (event) => {
            setAuctionLocation(event.target.value);
        };

        return (
            <div className="col-xs-1" align="center">
            <h2>New Auction</h2>
            
              <form onSubmit={handleSubmit}>
                <label>
                  Auction Name:
                  <br />
                  <input
                    type="text"
                    name="name"
                    value={auctionName}
                    onChange={newName}
                  />
                  <br />
                  Date:
                  <br />
                  <input
                    type="text"
                    name="date"
                    value={auctionDate}
                    onChange={newDate}
                  />
                  <br />
                  Time:
                  <br />
                  <input
                    type="text"
                    name="Time"
                    value={auctionTime}
                    onChange={newTime}
                  />
                  <br />
                  Location:
                  <br />
                  <input
                    type="text"
                    name="date"
                    value={auctionLocation}
                    onChange={newLocation}
                  />
                </label>
                <br />
                <br />
                <button type="submit">Create new Auction</button>
              </form>
          </div>
        )

}
        

