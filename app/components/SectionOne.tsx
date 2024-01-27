import Link from "next/link";
import SectionOneModel from "./SectionOneModel";

const SectionOne = () => {
  return (
    <section className="flex flex-col lg:flex-row w-full gap-[5vw] p-4 justify-center">
      <div className="lg:w-[50%]">
        <div>
          <div className="flex justify-center lg:items-center lg:justify-start w-full ">
            <div className="relative w-fit ">
              <p className="text-[3rem] font-bold ">Manila's </p>
              <img
                src={"/icons/bubble-icon.png"}
                className="absolute top-[-10px] right-[-30%]"
                width={60}
              />
            </div>
          </div>

          <p className="text-[3rem] font-bold text-center lg:text-left">
            First Choice in{" "}
          </p>
          <p className="text-[3rem] font-bold text-center lg:text-left">
            Dry Cleaning
          </p>
        </div>

        <p className=" text-gray-500 text-lg text-center lg:text-left">
          Experience the transformation of laundry into a hassle-free delight.
          Our modern facilities and expert care ensure your clothes receive
          top-notch treatment, leaving you with impeccably clean and refreshed
          garments. Discover the difference – where convenience meets
          cleanliness.
        </p>

        <div>
          <Link href={"/login"}>
            <button className="bg-orange-300 text-white px-4  w-full rounded-md mt-4 py-2">
              Signup for Free pickup and Delivery
            </button>
          </Link>
        </div>
      </div>
      <div className="md:w-[50%] f  items-center justify-center hidden lg:flex">
        <SectionOneModel />
      </div>
    </section>
  );
};

export default SectionOne;
