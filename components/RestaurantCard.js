const RestaurantCard = ({ restList }) => {
  const { name, image, rating, cuisine, cfo } = restList?.info;
  const { deliveryTime } = restList?.order;
  const { bottomContainers } = restList;

  return (
    <>
      <div className="p-3 hover:shadow-xl hover:border rounded-xl w-96">
        <div>
          <img
            src={image?.url}
            alt="Card"
            className="rounded-xl h-[250px] w-96"
            loading="lazy"
          />
        </div>
        <div className="py-2 flex justify-between">
          <h4 className="font-medium">{name}</h4>
          <div className="p-1 text-white bg-green-700 flex rounded-lg">
            <p className="text-xs px-1 font-bold">{rating?.aggregate_rating}</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-3 h-3 self-center"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <div className="flex justify-between">
          <p className="font-light text-slate-500 text-ellipsis overflow-hidden whitespace-nowrap w-52">
            {cuisine.map((val) => val.name).join(", ")}
          </p>
          <div className="font-light text-slate-500">{cfo?.text}</div>
        </div>
        <div className="pt-1 pb-2 text-xs text-right">{deliveryTime}</div>
        {bottomContainers[0] && (
          <div className="py-2 flex items-center border-t border-slate-200">
            <div>
              <img
                src={bottomContainers[0]?.image.url}
                alt="tag"
                className="h-5 w-14"
              />
            </div>
            <div className="mx-2">
              <p className="text-xs text-slate-500">
                {bottomContainers[0]?.text}
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default RestaurantCard;
