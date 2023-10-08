import { useEffect, useState } from "react";
import Gallery from "./Gallery";


const OurGallery = () => {
    
    const [gallery, setGallery] = useState([])

    useEffect( () => {
        fetch('/gallery.json')
        .then(res => res.json())
        .then(data => setGallery(data))
    },[])

    return (
        <div className="max-w-7xl mx-auto my-10">
        <h1 className='text-5xl font-bold text-center mb-10'>Our <span className="text-red-600">Gallery</span></h1>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {
                gallery.map(item => <Gallery key={item.id} item ={item}></Gallery> )
            }
        </div>
        <div>

        </div>
    </div>
    );
};

export default OurGallery;