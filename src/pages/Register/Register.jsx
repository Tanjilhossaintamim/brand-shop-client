import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { userSchema } from "../../schema/schema";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import auth from "../../utils/firebase";
import { useDispatch } from "react-redux";
import { setLoading } from "../../redux/features/authenication/authSlice";
import toast from "react-hot-toast";

const Register = () => {
  const dispath = useDispatch();
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((res) => {
        console.log(res);
        toast.success("Login successfully !");
      })
      .catch(() => {
        toast.error("Login Failed !");
      });
  };
  const handelRegister = ({ email, password }) => {
    dispath(setLoading(true));
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        dispath(setLoading(false));
        toast.success("Login successfully !");
      })
      .catch((err) => {
        dispath(setLoading(false));
        toast.error(`${err.message}`);
      });
  };
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  const { values, errors, handleBlur, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues,
      validationSchema: userSchema,
      onSubmit: (values) => {
        handelRegister(values);
      },
    });
  document.title = "Register";

  return (
    <section className="flex flex-col md:flex-row h-screen items-center">
      <div
        className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto  md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
      flex items-center justify-center"
      >
        <div className="w-full h-100">
          <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">
            Create an account
          </h1>

          <form onSubmit={handleSubmit} className="mt-6" method="POST">
            <div>
              <label className="block text-gray-700">Your Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter Email Address"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.name && errors?.name && (
                <small className="text-red-500">{errors.name}</small>
              )}
            </div>
            <div className="mt-4">
              <label className="block text-gray-700">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter Email Address"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.email && errors?.email && (
                <small className="text-red-500">{errors.email}</small>
              )}
            </div>

            <div className="mt-4">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                minLength="6"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
              focus:bg-white focus:outline-none"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.password && errors?.password && (
                <small className="text-red-500">{errors.password}</small>
              )}
            </div>

            <div className="text-right mt-2">
              <Link
                to={"/"}
                className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700"
              >
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
            px-4 py-3 mt-6"
            >
              Register
            </button>
          </form>

          <hr className="my-6 border-gray-300 w-full" />

          <button
            type="button"
            onClick={googleSignIn}
            className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300"
          >
            <div className="flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                viewBox="0 0 48 48"
              >
                <defs>
                  <path
                    id="a"
                    d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
                  />
                </defs>
                <clipPath id="b">
                  <use xlinkHref="#a" overflow="visible" />
                </clipPath>
                <path clipPath="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z" />
                <path
                  clipPath="url(#b)"
                  fill="#EA4335"
                  d="M0 11l17 13 7-6.1L48 14V0H0z"
                />
                <path
                  clipPath="url(#b)"
                  fill="#34A853"
                  d="M0 37l30-23 7.9 1L48 0v48H0z"
                />
                <path
                  clipPath="url(#b)"
                  fill="#4285F4"
                  d="M48 48L17 24l-4-3 35-10z"
                />
              </svg>
              <span className="ml-4">Log in with Google</span>
            </div>
          </button>

          <p className="mt-8">
            Already Have an account?{" "}
            <Link
              to={"/login"}
              className="text-blue-500 hover:text-blue-700 font-semibold"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Register;
