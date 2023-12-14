const CategoryList = ({ items }) => {
  return (
    <>
      {items.map((item) => (
        <div className="p-3" key={item.title}>
          <img
            src={item.imgUrl}
            alt={item.title}
            className="h-36 w-36 rounded-full"
            loading="lazy"
          />
          <p className="py-2">{item.title}</p>
        </div>
      ))}
    </>
  );
};

export default CategoryList;
