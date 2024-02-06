import Link from "next/link";

const Home = () => {
  const previews: { title: string; imgUrl: string; urlNavigation: string }[] = [
    {
      title: "Dry Cleaning",
      imgUrl:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fmcfenvironmental.com%2Fdry-cleaning-waste-disposal%2F&psig=AOvVaw0ugbfy3eqzZwRBPsVf-coX&ust=1707032810858000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCMj95OjWjoQDFQAAAAAdAAAAABAE",
      urlNavigation: "",
    },
    {
      title: "Wet Cleaning",
      imgUrl:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fmcfenvironmental.com%2Fdry-cleaning-waste-disposal%2F&psig=AOvVaw0ugbfy3eqzZwRBPsVf-coX&ust=1707032810858000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCMj95OjWjoQDFQAAAAAdAAAAABAE",
      urlNavigation: "",
    },
    {
      title: "Laundry",
      imgUrl:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fmcfenvironmental.com%2Fdry-cleaning-waste-disposal%2F&psig=AOvVaw0ugbfy3eqzZwRBPsVf-coX&ust=1707032810858000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCMj95OjWjoQDFQAAAAAdAAAAABAE",
      urlNavigation: "",
    },
    {
      title: "Iron Clothes",
      imgUrl:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fmcfenvironmental.com%2Fdry-cleaning-waste-disposal%2F&psig=AOvVaw0ugbfy3eqzZwRBPsVf-coX&ust=1707032810858000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCMj95OjWjoQDFQAAAAAdAAAAABAE",
      urlNavigation: "",
    },
    {
      title: "Shoe Cleaning",
      imgUrl:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fmcfenvironmental.com%2Fdry-cleaning-waste-disposal%2F&psig=AOvVaw0ugbfy3eqzZwRBPsVf-coX&ust=1707032810858000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCMj95OjWjoQDFQAAAAAdAAAAABAE",
      urlNavigation: "",
    },
  ];
  return (
    <div>
      <h1 className="font-semibold p-4 text-center">
        What would you like to do?
      </h1>
      <div className="flex flex-col gap-4">
        <div className="bg-[#00c4bb] text-white text-3xl rounded-md">
          <h2 className=" p-2 ">Pickup / Dropoff Laundry</h2>
          <Link href={"/main/create-order"}>
            <button className="bg-[#f5c842] text-white w-full text-xl rounded-b-md">
              Proceed
            </button>
          </Link>
        </div>
        <div className="bg-[#00c4bb] text-white text-3xl rounded-md">
          <h2 className=" p-2 ">Check Orders</h2>
          <Link href={"/main/my-orders"}>
            <button className="bg-[#f5c842] text-white w-full text-xl rounded-b-md">
              Proceed
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
