"use client";
import { useEffect, useState } from "react";
import ServicesTable from "../services/ServicesTable";
import Service from "../services/Service";
import { ServiceType } from "@/types/Laundry";

type Prop = {
  onSelectService?: (serviceType: ServiceType) => void;
};

const OrderPicker = ({ onSelectService }: Prop) => {
  const [selectedService, setSelectedService] = useState<{
    serviceName: string;
    serviceIcon: string;
    serviceDescription: string;
    serviceType: ServiceType;
  }>();

  useEffect(() => {
    if (onSelectService && selectedService) {
      onSelectService(selectedService.serviceType);
    }
  }, [selectedService?.serviceType]);
  return (
    <div>
      <ServicesTable
        onHoverService={(
          serviceName,
          serviceIcon,
          serviceDescription,
          serviceType
        ) => {
          setSelectedService({
            serviceName: serviceName,
            serviceIcon: serviceIcon,
            serviceDescription,
            serviceType: serviceType,
          });
        }}
      />
      {selectedService && (
        <div className="flex flex-col justify-center items-center bg-white p-2 gap-4">
          <img src={selectedService.serviceIcon} className="w-24" />
          <h1 className="text-2xl font-semibold">
            {selectedService?.serviceName}
          </h1>
          <p>{selectedService?.serviceDescription}</p>
        </div>
      )}
    </div>
  );
};

export default OrderPicker;
