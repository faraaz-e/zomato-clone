"use client";

import CategoryList from "@/components/CategoryList";
import RestaurantCard from "@/components/RestaurantCard";
import { foodType, brandList } from "@/utils/categoryData";
import { restaurantList } from "@/utils/restaurantData";
import { useState } from "react";

export default function Page() {
  const [restData, setRestData] = useState(restaurantList);
  const [isDataFiltered, setIsDataFiltered] = useState(false);

  const handleRatingFilter = () => {
    const ratingFilterData = restData.filter(
      (res) => res.info.rating.aggregate_rating >= 4.0
    );
    isDataFiltered
      ? setRestData(restaurantList)
      : setRestData(ratingFilterData);
    setIsDataFiltered(!isDataFiltered);
  };

  return (
    <>
      {/** Filters */}
      <div className="mx-auto max-w-7xl">
        <div className="py-5 px-28 flex space-x-3">
          <button className="border border-slate-300 py-1 px-2 rounded-lg text-slate-400 font-light flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 self-center"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
              />
            </svg>
            <span className="px-2">Filters</span>
          </button>
          <button
            className={`border border-slate-300 py-1 px-2 rounded-lg font-light flex ${
              isDataFiltered ? "text-white bg-red-400" : "text-slate-400"
            }`}
            onClick={handleRatingFilter}
          >
            Rating: 4.0+
          </button>
          <button className="border border-slate-300 py-1 px-2 rounded-lg text-slate-400 font-light flex">
            Pure Veg
          </button>
          <button className="border border-slate-300 py-1 px-2 rounded-lg text-slate-400 font-light flex">
            <span className="px-2">Cuisines</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 self-center"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
        </div>
      </div>

      {/** Food Type Section */}
      {!isDataFiltered && (
        <div className="py-5 bg-gray-100">
          <div className="mx-auto max-w-7xl">
            <div className="px-28 py-5">
              <h3 className="text-3xl font-medium">
                Inspiration for your first order
              </h3>
            </div>
            <div className="py-5 flex text-center space-x-6 pl-20">
              <CategoryList items={foodType} />
            </div>
          </div>
        </div>
      )}

      {/** Top Food brands Section */}
      {!isDataFiltered && (
        <div className="mx-auto max-w-7xl">
          <div className="py-5 px-28">
            <h3 className="text-3xl font-medium">Top brands for you</h3>
          </div>
          <div className="py-4 flex text-center space-x-6 pl-20">
            <CategoryList items={brandList} />
          </div>
        </div>
      )}

      {/** Delivery Restaurants Section */}
      <div className="mx-auto max-w-7xl">
        <div className="py-5 px-28">
          <h3 className="text-3xl font-medium">
            Delivery Restaurants in Mumbai
          </h3>
        </div>
        <div className="py-4 grid grid-cols-3 gap-3 pl-20">
          {restData.map((rest) => (
            <RestaurantCard key={rest.info.resId} restList={rest} />
          ))}
        </div>
      </div>
    </>
  );
}
