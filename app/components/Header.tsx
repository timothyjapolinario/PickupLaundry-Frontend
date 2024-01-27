import Image from "next/image";

const Header = () => {
  return (
    <div className="flex items-center justify-between md:px-8  py-2">
      <div className="flex items-center  w-full ">
        <Image
          src={"/icons/laundry-icon.png"}
          width={50}
          height={50}
          alt="app-icon"
        />
        <h1>
          <span className="font-bold">Easy</span>
          <span className="text-[#00c4bb] font-bold bg-white rounded px-1">
            Dry
          </span>
        </h1>
      </div>
      <div className="lg:flex gap-6 hidden font-semibold">
        <button>Home</button>
        <button>About</button>
        <button>Service</button>
        <button>Career</button>
        <button>Find Location</button>
        <button>My Account</button>
      </div>
      <div>
        {/* <button className="flex px-4 py-2 rounded-md bg-[#6c9a98] text-white items-center gap-2">
          <Image
            src={"/icons/telephone-icon.png"}
            width={20}
            height={20}
            alt="app-icon"
          />
          (+63)9669808076
        </button> */}
      </div>
    </div>
  );
};

export default Header;
