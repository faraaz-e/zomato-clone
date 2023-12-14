export default function Loading() {
  return (
    <>
      {/** Food Type Section */}
      <div className="py-5 bg-gray-100">
        <div className="mx-auto max-w-7xl">
          <div className="px-28 py-5">
            <div className="bg-slate-200 w-1/2 h-5 w-80 rounded-lg"></div>
          </div>
          <div className="py-5 flex space-x-6 pl-20">
            <div className="bg-slate-200 rounded-full h-44 w-44"></div>
            <div className="bg-slate-200 rounded-full h-44 w-44"></div>
            <div className="bg-slate-200 rounded-full h-44 w-44"></div>
            <div className="bg-slate-200 rounded-full h-44 w-44"></div>
            <div className="bg-slate-200 rounded-full h-44 w-44"></div>
          </div>
        </div>
      </div>

      {/** Top Food brands Section */}
      <div className="mx-auto max-w-7xl">
        <div className="px-28 py-5">
          <div className="bg-slate-200 w-1/2 h-5 w-80 rounded-lg"></div>
        </div>
        <div className="py-5 flex space-x-6 pl-20">
          <div className="bg-slate-200 rounded-full h-44 w-44"></div>
          <div className="bg-slate-200 rounded-full h-44 w-44"></div>
          <div className="bg-slate-200 rounded-full h-44 w-44"></div>
          <div className="bg-slate-200 rounded-full h-44 w-44"></div>
          <div className="bg-slate-200 rounded-full h-44 w-44"></div>
        </div>
      </div>
    </>
  );
}
