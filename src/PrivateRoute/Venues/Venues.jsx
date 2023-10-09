import { useEffect, useState } from "react";
import SingleVenue from "./SingleVenue";


const Venues = () => {
    const [allVenue, setAllVenue] = useState([])

    useEffect(() => {
        fetch('/venue.json')
        .then(res => res.json())
        .then(data => setAllVenue(data))
    },[])
    return (
        <div className="px-2 space-y-5 max-w-7xl mx-auto">
            <h1 className='text-5xl font-bold text-center my-10' data-aos="fade-down">Our <span className='text-red-600'>Venues</span> </h1>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {
                allVenue.map(venue => <SingleVenue key={venue.id} venue={venue}></SingleVenue>)
            }
            </div>
        </div>
    );
};

export default Venues;