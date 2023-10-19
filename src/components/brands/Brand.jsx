import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
const Brand = ({ brand }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/brands/${brand.brandName}`)}
      className="relative rounded border border-gray-300 flex flex-col justify-center items-center p-4 hover:shadow-md transition-shadow duration-300 cursor-pointer"
    >
      <div className="flex justify-center items-center flex-grow">
        <img src={brand.image} alt="" className=" object-cover " />
      </div>
      <h1 className="text-2xl font-bold">{brand.brandName}</h1>
    </div>
  );
};
Brand.propTypes = {
  brand: PropTypes.object,
};
export default Brand;
