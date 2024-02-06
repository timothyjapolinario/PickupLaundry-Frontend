"use client";
import OrderPicker from "@/app/components/newOrder/OrderPicker";
import { NewLaundryOrder } from "@/types/Laundry";
import { useEffect, useState } from "react";

const Home = () => {
  const [order, setOrder] = useState<NewLaundryOrder>();

  useEffect(() => {
    console.log("Your Order: ", order);
  }, [order]);
  return (
    <div className="lg:grid grid-cols-2 h-full overflow-y-scroll bg-white flex flex-col gap-6">
      <div className="h-fit text-center bg-white">
        <h1 className="font-semibold underline mb-2">Choose Cleaning Type</h1>
        <OrderPicker
          onSelectService={(serviceType) => {
            setOrder({ ...order, serviceType: serviceType });
          }}
        />
      </div>

      <div className="bg-white">
        <h1 className="w-full text-center  text-2xl md:text-3xl font-semibold text-white bg-primary rounded-t-lg px-4">
          Input Contact Information
        </h1>
        <div className="flex flex-col py-2 px-4">
          <label>Full Name: </label>
          <input className="border border-solid border-primary rounded-md" />
        </div>
        <div className="flex flex-col py-2 px-4">
          <label>Address: </label>
          <input className="border border-solid border-primary rounded-md" />
        </div>
        <div className="flex flex-col py-2 px-4">
          <label>Contact Number: </label>
          <input className="border border-solid border-primary rounded-md" />
        </div>
      </div>
      <button className="bg-secondary text-white w-full text-xl rounded-b-md mt-4">
        Submit
      </button>
    </div>
  );
};
export default Home;
