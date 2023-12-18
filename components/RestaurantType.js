export default function RestaurantType({ items }) {
  return (
    <>
      <div className="relative p-1">
        <div>
          <img
            src={items.imgUrl}
            alt="Card"
            className="rounded-lg w-[270px] h-[310px]"
          />
        </div>
        <div className="absolute bottom-4 left-7 bg-gradient-to-r from-black to-gray-700 rounded-lg">
          <p className="px-2 font-light text-lg text-white text-ellipsis overflow-hidden whitespace-nowrap w-56">
            {items.title}
          </p>
          <div className="flex items-center font-light text-white px-2">
            <p>{items.placesCount + " Places"}</p>
            <div className="px-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
