import React, { use, useEffect, useRef, useState } from "react";
import "leaflet/dist/leaflet.css";

import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { useLoaderData } from "react-router";
const position = [23.8103, 90.4125];

const Coverage = () => {
  const [services, setServices] = useState([]);
  const mapRef = useRef(null)

  useEffect(() => {
    fetch("/warehouses.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit =(e)=>{
       e.preventDefault();
       const location = e.target.location.value;
       const districtSearch = services.find(c => c.district.toLowerCase().includes(location.toLowerCase()));
       if(districtSearch){
        const coord = [districtSearch.latitude, districtSearch.longitude]
        console.log(coord,districtSearch)
        mapRef.current.flyTo(coord,14)
       }
  }

  return (
    <div className="p-10 space-y-5">
      <div>
        <h2 className="text-secondary text-[56px] font-extrabold">
          We are available in 64 districts
        </h2>

        <form onSubmit={handleSubmit}>
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              type="search"
              className="grow"
              name="location"
              placeholder="Search"
            />
          </label>
        </form>
      </div>

      <div className="border w-full h-[600px]">
        <MapContainer
          center={position}
          zoom={6.5}
          scrollWheelZoom={false}
          className="h-[600px]"
          ref={mapRef}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {services.map((center, indexs) => (
            <Marker key={indexs} position={[center.latitude, center.longitude]}>
              <Popup>
                <strong>{center.district}</strong>
                <br /> <strong>Service Area:</strong>{" "}
                {center.covered_area.join(", ")}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Coverage;
