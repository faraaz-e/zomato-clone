import Link from "next/link";

export default function NavCard({ items }) {
  return (
    <>
      <Link href={items.link} key={items.title}>
        <div className="flex flex-col border border-slate-200 rounded-lg w-[350px] transition delay-150 ease-in-out hover:scale-110">
          <img
            src={items.imgUrl}
            alt="card"
            className="rounded-t-lg h-36 object-cover"
          />
          <div className="py-2 px-4">
            <p className="pt-3 text-lg">{items.title}</p>
            <p className="py-1 font-light">{items.shortDescription}</p>
          </div>
        </div>
      </Link>
    </>
  );
}
