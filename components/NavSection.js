const NavSection = () => {
  return (
    <>
      <div className="mx-auto max-w-7xl py-10">
        <div className="flex px-28">
          <div className="flex px-4">
            <div className="bg-yellow-100 p-4 rounded-full">
              <img
                src="https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png"
                className="h-8 w-8"
              />
            </div>
            <div className="text-xl text-zinc-500 font-medium self-center px-2">Delivery</div>
          </div>
          <div className="flex px-4">
            <div className="bg-blue-100 p-4 rounded-full">
              <img
                src="https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png"
                className="h-8 w-8"
              />
            </div>
            <div className="text-xl text-zinc-500 font-medium self-center px-2">Dining Out</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavSection;