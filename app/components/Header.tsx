const Header = () => {
  return (
    <div className="flex justify-between px-5 py-3 shadow-2xl h-full bg-[#ddf8ff]">
      <div className="flex items-center ">
        <img src={"./icons/laundry-icon.png"} />
        <span>Pickup Laundry</span>
      </div>
      <div className="flex gap-3 items-center">
        <button className="bg-[#e9c10d] rounded text-white h-fit p-2">
          Login
        </button>
        <button className="bg-[#d3cfbe] rounded text-white h-fit p-2">
          Signup
        </button>
      </div>
    </div>
  );
};

export default Header;
