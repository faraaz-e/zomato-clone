import NavCard from "@/components/NavCard";
import { navCardList } from "@/utils/categoryData";
import RestaurantType from "@/components/RestaurantType";
import { restTypeList } from "@/utils/categoryData";
import { HOMEPAGE_BANNER, HOMEPAGE_LOGO } from "@/utils/constants";

export default function Home() {
  return (
    <>
      {/** Homepage banner */}
      <div className="relative">
        <img
          src={HOMEPAGE_BANNER}
          alt="Homepage banner"
          className="w-full h-[430px] object-cover"
        />
        <div className="absolute flex flex-col justify-center items-center w-full bottom-1/2">
          <img
            src={HOMEPAGE_LOGO}
            alt="logo"
            className="w-1/2 lg:w-1/5 h-auto"
          />
          <p className="text-white font-light lg:text-3xl pt-8">
            Discover the best food & drinks in Mumbai
          </p>
        </div>
      </div>

      {/** Nav Cards */}
      <div className="mx-auto max-w-7xl grid grid:cols-1 lg:grid-cols-3 gap-y-3 lg:gap-0 justify-center py-8 px-20">
        {navCardList.map((data) => (
          <NavCard items={data} />
        ))}
      </div>

      {/** Collections */}
      <div className="py-10">
        <div className="mx-auto max-w-7xl">
          <div className="px-28 py-1">
            <h3 className="text-3xl font-medium">Collections</h3>
            <p className="pt-5 font-light text-lg">
              Explore curated lists of top restaurants and cafes in Mumbai,
              based on trends
            </p>
          </div>
          <div className="py-5 grid grid-cols-2 lg:flex justify-center space-x-5">
            {restTypeList.map((res) => (
              <RestaurantType items={res} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
