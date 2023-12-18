export default function Loading() {
  return (
    <>
      {/** Food Type Section */}
      <div className="py-5 bg-gray-100">
        <div className="mx-auto max-w-7xl">
          <div className="px-28 py-3 pl-20">
            <div className="bg-slate-200 w-1/2 h-5 w-80 rounded-lg"></div>
          </div>
          <div className="px-28 py-3 pl-20">
            <div className="bg-slate-200 w-3/4 h-5 w-80 rounded-lg"></div>
          </div>
          <div className="py-3 flex space-x-6 pl-20">
            <div className="bg-slate-200 rounded-lg w-[270px] h-[310px]"></div>
            <div className="bg-slate-200 rounded-lg w-[270px] h-[310px]"></div>
            <div className="bg-slate-200 rounded-lg w-[270px] h-[310px]"></div>
            <div className="bg-slate-200 rounded-lg w-[270px] h-[310px]"></div>
          </div>
        </div>
      </div>

      {/** Top Food brands Section */}
      <div className="flex justify-center px-2 py-6">
        <div className="bg-slate-200 rounded-lg w-3/4 h-64"></div>
      </div>
    </>
  );
}
