import Archivs from "../../components/Archives/Archivs";
import Banner from "../../components/banner/Banner";
import Brands from "../../components/brands/Brands";
import Categories from "../../components/categories/Categories";

const Home = () => {
  return (
    <div>
      <Banner />
      <Categories />
      <Brands />
      <Archivs />
    </div>
  );
};

export default Home;
