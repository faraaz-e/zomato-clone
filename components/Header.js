const Header = () => {
  return (
    <>
      <div className="container w-full xl:w-5/6 xl:mx-auto xl:flex xl:justify-center py-3 xl:space-x-5">
        <div className="self-center">
          <img
            src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
            className="w-32 h-auto"
            alt="logo"
          />
        </div>
        <div className="px-3 border rounded-lg flex drop-shadow-md bg-white">
          <div className="self-center px-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-red-400"
            >
              <path
                fillRule="evenodd"
                d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          <div className="">
            <input
              type="text"
              className="w-56 py-3 px-2 border-none focus:outline-0"
              placeholder="Enter Location"
            />
          </div>

          <div className="text-zinc-400 self-center">|</div>

          <div className="self-center px-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 text-zinc-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>

          <div className="">
            <input
              type="text"
              className="w-96 py-3 px-2 border-none focus:outline-none"
              placeholder="Search for restaurant, cuisine or a dish"
            />
          </div>
        </div>
        <div className="flex px-3 text-zinc-500 text-lg self-center">
          <button className="px-3">Login in</button>
          <button className="px-3">Sign up</button>
        </div>
      </div>
    </>
  );
};

export default Header;
