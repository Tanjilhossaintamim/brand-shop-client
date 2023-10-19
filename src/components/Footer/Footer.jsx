import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="block bg-slate-100">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
        <div className="flex flex-col items-center">
          <Link to={"/"} className="mb-8 inline-block max-w-full text-black">
            <img src={Logo} alt="" className="inline-block max-h-10" />
          </Link>
          <div className="max-[991px]: text-center font-semibold max-[991px]:py-1">
            <Link
              to={"/"}
              className="inline-block px-6 py-2 font-normal text-black transition hover:text-[#d6a701]"
            >
              About
            </Link>
            <Link
              to={"/"}
              className="inline-block px-6 py-2 font-normal text-black transition hover:text-[#d6a701]"
            >
              Features
            </Link>
            <Link
              to={"/"}
              className="inline-block px-6 py-2 font-normal text-black transition hover:text-[#d6a701]"
            >
              Works
            </Link>
            <Link
              to={"/"}
              className="inline-block px-6 py-2 font-normal text-black transition hover:text-[#d6a701]"
            >
              Support
            </Link>
            <Link
              to={"/"}
              className="inline-block px-6 py-2 font-normal text-black transition hover:text-[#d6a701]"
            >
              Help
            </Link>
          </div>
          <div className="mb-8 mt-8 w-48 [border-bottom:1px_solid_rgb(0,_0,_0)]"></div>
          <div className="mb-12 grid w-full max-w-[208px] grid-flow-col grid-cols-4 gap-3">
            <Link
              to={"/"}
              className="mx-auto flex max-w-[24px] flex-col items-center justify-center"
            >
              <img
                src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358f65ff1579cbd64244573_FacebookLogo.svg"
                alt=""
                className="inline-block"
              />
            </Link>
            <Link
              to={"/"}
              className="mx-auto flex max-w-[24px] flex-col items-center justify-center"
            >
              <img
                src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358f65864ee6f4870bbe5cb_InstagramLogo.svg"
                alt=""
                className="inline-block"
              />
            </Link>
            <Link
              to={"/"}
              className="mx-auto flex max-w-[24px] flex-col items-center justify-center"
            >
              <img
                src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358f65ab9fdec6c06b596f6_SlackLogo.svg"
                alt=""
                className="inline-block"
              />
            </Link>
            <Link
              to={"/"}
              className="mx-auto flex max-w-[24px] flex-col items-center justify-center"
            >
              <img
                src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358f65b64ee6f2f15bbe5e0_TwitterLogo.svg"
                alt=""
                className="inline-block"
              />
            </Link>
          </div>
          <p className="max-[479px]:text-sm">
            © Copyright 2023 Developed by <span className="text-blue-700">Tanjil Hossain</span> . All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
