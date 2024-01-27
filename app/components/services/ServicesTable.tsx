"use client";

import Service from "./Service";

const ServicesTable = () => {
  return (
    <div className="bg-white rounded-lg ">
      <h1 className="w-full text-center text-3xl font-semibold text-white bg-[#00c4bb] rounded-t-lg ">
        Services
      </h1>
      <div className="flex gap-4 justify-evenly px-2 py-6  w-full flex-wrap">
        <Service
          serviceName="Dry Cleaning"
          serviceIconDefault="./icons/dry-clothe-icon.png"
          serviceIconOnHover="./icons/dry-clothe-icon-white.png"
        />
        <Service
          serviceName="Wet Cleaning"
          serviceIconDefault="./icons/wet-clothe-icon.png"
          serviceIconOnHover="./icons/wet-clothe-icon-white.png"
        />
        <Service
          serviceName="Laundry"
          serviceIconDefault="./icons/laundry-service-icon.png"
          serviceIconOnHover="./icons/laundry-service-icon-white.png"
        />
        <Service
          serviceName="Iron Clothes"
          serviceIconDefault="./icons/iron-icon.png"
          serviceIconOnHover="./icons/iron-icon-white.png"
        />
      </div>
    </div>
  );
};

export default ServicesTable;
