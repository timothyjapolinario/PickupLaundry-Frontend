"use client";

import { useState } from "react";
import Service from "./Service";
import { ServiceType } from "@/types/Laundry";

type Prop = {
  onHoverService?: (
    serviceName: string,
    serviceIcon: string,
    serviceDescription: string,
    serviceType: ServiceType
  ) => void;
};
const ServicesTable = ({ onHoverService }: Prop) => {
  return (
    <div className="bg-white rounded-lg h-full">
      <h1 className="w-full text-center text-3xl font-semibold text-white bg-[#00c4bb] rounded-t-lg ">
        Services
      </h1>
      <div className="flex gap-4 justify-evenly px-2 py-6  w-full flex-wrap">
        <Service
          serviceName="Dry Cleaning"
          serviceIconDefault="/icons/dry-clothe-icon.png"
          serviceIconOnHover="/icons/dry-clothe-icon-white.png"
          onHover={() => {
            if (onHoverService) {
              onHoverService(
                "Dry Cleaning",
                "/icons/dry-clothe-icon.png",
                "Dry cleaning is a cleaning process for clothing and textiles that uses a solvent, typically a liquid chemical, instead of water. Despite its name, dry cleaning is not completely dry because it uses liquids other than water. The process is called dry because it doesn't involve the extensive use of water, which can be damaging to certain fabrics.",
                ServiceType.DryCleaning
              );
            }
          }}
        />
        <Service
          serviceName="Wet Cleaning"
          serviceIconDefault="/icons/wet-clothe-icon.png"
          serviceIconOnHover="/icons/wet-clothe-icon-white.png"
          onHover={() => {
            if (onHoverService) {
              onHoverService(
                "Wet Cleaning",
                "/icons/wet-clothe-icon.png",
                "Wet cleaning is a garment cleaning process that uses water as the primary solvent, in contrast to dry cleaning, which uses chemical solvents. Wet cleaning is considered an environmentally friendly and more sustainable alternative to traditional dry cleaning, as it eliminates the use of potentially harmful chemicals.  ",
                ServiceType.WetCleaning
              );
            }
          }}
        />
        <Service
          serviceName="Laundry"
          serviceIconDefault="/icons/laundry-service-icon.png"
          serviceIconOnHover="/icons/laundry-service-icon-white.png"
          onHover={() => {
            if (onHoverService) {
              onHoverService(
                "Laundry",
                "/icons/laundry-service-icon.png",
                "Laundry refers to the process of cleaning and washing clothing, linens, and other textiles. It typically involves the removal of dirt, stains, and odors from fabrics to maintain cleanliness and hygiene. Laundry can be done using different methods, such as machine washing, hand washing, or professional laundry services.",
                ServiceType.Laundry
              );
            }
          }}
        />
        <Service
          serviceName="Iron Clothes"
          serviceIconDefault="/icons/iron-icon.png"
          serviceIconOnHover="/icons/iron-icon-white.png"
          onHover={() => {
            if (onHoverService) {
              onHoverService(
                "Iron Clothes",
                "/icons/iron-icon.png",
                "Ironing is a process of smoothing out wrinkles and creases in clothing and fabrics using a heated flat iron, commonly known as an iron. The purpose of ironing is not only to eliminate wrinkles but also to give clothes a neater and more polished appearance. Ironing can be done using a dry iron or a steam iron, the latter being more effective in removing wrinkles.",
                ServiceType.IronClothes
              );
            }
          }}
        />
      </div>
    </div>
  );
};

export default ServicesTable;
