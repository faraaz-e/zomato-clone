export default function Page({ params }) {
  return (
    <>
      <div className="mx-auto max-w-7xl px-24">
        <div className="flex flex-row gap-2 py-5">
          <div className="w-8/12">
            <img
              src="https://b.zmtcdn.com/data/reviews_photos/0bf/8ee8e73f46eb669896697e917d9340bf_1558299173.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"
              alt="restaurant banner"
            />
          </div>
          <div className="flex flex-col w-[19.3%] gap-2">
            <img
              src="https://b.zmtcdn.com/data/pictures/8/40558/0797da03377329c75ebe59c1208b2a60.jpg?fit=around|300:273&crop=300:273;*,*"
              alt="resturant side image one"
            />
            <img
              src="https://b.zmtcdn.com/data/pictures/8/40558/3d7a1bb6e66b993091c608e18f31aaa7.jpg?fit=around|300:273&crop=300:273;*,*"
              alt="restaurant side image two"
            />
          </div>
          <div className="w-[19.3%]">
            <img
              src="https://b.zmtcdn.com/data/pictures/8/40558/37ecd7dd392e3f14c73e63e2f253d648.jpg?fit=around|300:273&crop=300:273;*,*"
              alt="vertical image"
              className="h-full object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col space-y-1">
          <div className="flex justify-between">
            <h1 className="text-4xl">Sarvi</h1>
            <div className="flex flex-row gap-2">
              <div className="flex flex-row">
                <div className="p-1 text-white bg-green-700 flex flex-row rounded-lg">
                  <p className="text-sm font-bold self-center">4.3</p>
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
                <div className="px-2">
                  <p className="text-sm font-bold">878</p>
                  <p className="text-xs font-light border-b border-dashed border-zinc-400">
                    Dining Reviews
                  </p>
                </div>
              </div>
              <div className="flex flex-row">
                <div className="p-1 text-white bg-green-700 flex flex-row rounded-lg">
                  <p className="text-sm font-bold self-center">4.3</p>
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
                <div className="px-2">
                  <p className="text-sm font-bold">3061</p>
                  <p className="text-xs font-light border-b border-dashed border-zinc-400">
                    Delivery Reviews
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p className="font-light text-zinc-500">Mughlai, North Indian</p>
          <p className="font-light text-zinc-400">Mumbai Central, Mumbai</p>
          <p className="font-light text-red-400">
            Open now
            <span className="pl-1 font-light text-zinc-500">
              - 11am - 11pm (Today)
            </span>
          </p>
          <div className="py-2 flex space-x-2">
            <button className="p-2 gap-1 flex border border-zinc-400 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 text-red-400 self-center"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
              <span className="font-light text-sm self-center">Direction</span>
            </button>

            <button className="p-2 gap-1 flex border border-zinc-400 rounded-lg font-light">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 text-red-400 self-center"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                />
              </svg>

              <span className="font-light text-sm self-center">Bookmark</span>
            </button>

            <button className="p-2 gap-1 flex border border-zinc-400 rounded-lg font-light">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 text-red-400 self-center"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15"
                />
              </svg>

              <span className="font-light text-sm self-center">Share</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
