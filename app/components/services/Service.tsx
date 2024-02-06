import { useState } from "react";

type Props = {
  serviceName: string;
  serviceIconDefault: string;
  serviceIconOnHover?: string;
  onHover?: (serviceName: string) => void;
};

const Service = ({
  serviceName,
  serviceIconDefault,
  serviceIconOnHover,
  onHover,
}: Props) => {
  const [activeIcon, setActiveIcon] = useState(serviceIconDefault);
  return (
    <div className="flex flex-col w-[70px]">
      <div
        className="rounded-full flex flex-col items-center bg-[#d9fff9] hover:bg-[#00c4bb] w-fit p-2"
        onMouseEnter={() => {
          if (serviceIconOnHover) {
            setActiveIcon(serviceIconOnHover);
          }
          if (onHover) {
            onHover(serviceName);
          }
        }}
        onClick={() => {
          if (serviceIconOnHover) {
            setActiveIcon(serviceIconOnHover);
          }
          if (onHover) {
            onHover(serviceName);
          }
        }}
        onMouseLeave={() => {
          if (serviceIconOnHover) {
            setActiveIcon(serviceIconDefault);
          }
        }}
      >
        <img className="w-[50px]" src={activeIcon} />
      </div>

      <h3 className="text-center">{serviceName}</h3>
    </div>
  );
};

export default Service;
