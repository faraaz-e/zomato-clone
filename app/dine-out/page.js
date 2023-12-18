"use client";

import CategoryList from "@/components/CategoryList";
import RestaurantCard from "@/components/RestaurantCard";
import RestaurantType from "@/components/RestaurantType";
import { restTypeList } from "@/utils/categoryData";
import { diningRestaurantList } from "@/utils/restaurantData";
import { useState } from "react";

export default function Page() {
  const [restData, setRestData] = useState(diningRestaurantList);
  const [isDataFiltered, setIsDataFiltered] = useState(false);

  const handleRatingFilter = () => {
    const ratingFilterData = restData.filter(
      (res) => res.info.rating.aggregate_rating >= 4.0
    );
    isDataFiltered
      ? setRestData(diningRestaurantList)
      : setRestData(ratingFilterData);
    setIsDataFiltered(!isDataFiltered);
  };

  return (
    <>
      {/** Collections Section */}
      {!isDataFiltered && (
        <div className="py-5 bg-gray-100">
          <div className="mx-auto max-w-7xl">
            <div className="px-28 py-1">
              <h3 className="text-3xl font-medium">Collections</h3>
              <p className="pt-5 font-light text-lg">
                Explore curated lists of top restaurants and cafes in Mumbai,
                based on trends
              </p>
            </div>
            <div className="py-1 flex justify-center space-x-6">
              {restTypeList.map((res) => (
                <RestaurantType items={res} />
              ))}
            </div>
          </div>
        </div>
      )}

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
            Outdoor Seating
          </button>
          <button className="border border-slate-300 py-1 px-2 rounded-lg text-slate-400 font-light flex">
            Open Now
          </button>
        </div>
      </div>

      <div className="flex justify-center px-2 py-6">
        <img
          src="https://b.zmtcdn.com/data/o2_assets/da94405b04f6ae6bf64a4e2a01b1b5c11686563732.png"
          alt="banner"
          className="w-3/4 h-64"
        />
      </div>

      {/** Delivery Restaurants Section */}
      <div className="mx-auto max-w-7xl">
        <div className="py-2 px-28">
          <h3 className="text-3xl font-medium">
            Trending dining restaurants in Mumbai
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
