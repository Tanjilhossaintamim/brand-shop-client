import { useGetBrandsQuery } from "../../redux/features/brand/brandApi";
import Sekeleton from "../sekeleton/Sekeleton";
import Brand from "./Brand";

const Brands = () => {
  const { data, isLoading } = useGetBrandsQuery();
  let content = null;
  if (isLoading) {
    content = (
      <>
        <Sekeleton />
        <Sekeleton />
        <Sekeleton />
        <Sekeleton />
        <Sekeleton />
        <Sekeleton />
      </>
    );
  }
  if (data?.length > 0) {
    content = data.map((brand) => <Brand key={brand._id} brand={brand} />);
  }

  return (
    <div className="bg-white py-40 px-4 lg:px-0">
      <div className="max-w-[1440px] mx-auto  ">
        <h1 className="text-3xl font-bold text-color-black">Popular Brands</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center gap-7 mt-5">
          {content}
        </div>
      </div>
    </div>
  );
};

export default Brands;
