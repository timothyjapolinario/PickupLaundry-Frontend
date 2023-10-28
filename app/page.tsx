import Header from "./components/Header";

export default function Home() {
  return (
    <div className="h-screen">
      <div className="h-[15%]">
        <Header />
      </div>
      <div className="flex h-[85%] bg-[#ffffff] p-5 gap-5">
        <div className="h-full border-solid ">
          <img
            src="./images/splash-art-laundry.jpg"
            className="h-full border-black border-2 w-fit"
          />
        </div>
        <div>
          <h1 className="text-[2rem]">
            Laundry & Dry Cleaning Delivery Service
          </h1>
          <button className="bg-[#ddf8ff] rounded p-2">Order Now</button>
        </div>
      </div>
    </div>
  );
}
