import axios from "axios";
import InputField from "../Components/Input";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import Google from "../../public/images/Google_Icons-logo.png";

const Signup = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/login");
  };

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  const sendatatoApi = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/user/signup",
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      toast.success(response.data.message);
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error creating user");
    }
  };

  return (
    <>
      <div className="max-w-md w-full mx-auto my-10 border rounded-2xl shadow-2xl p-6 sm:p-8">
        <ToastContainer />
        <form onSubmit={handleSubmit(sendatatoApi)} className="space-y-6">
          <h1 className="text-3xl font-bold text-center">Signup</h1>
          <p className="text-center text-gray-600">It's quick and easy</p>

          <div className="space-y-4">
            <InputField
              type="text"
              id="firstName"
              {...register("firstName", {
                required: "First Name is required",
              })}
              placeholder={"First Name"}
            />
            {errors.firstName && (
              <span className="text-red-500 text-sm">{errors.firstName.message}</span>
            )}

            <InputField
              type="text"
              id="lastName"
              {...register("lastName", {
                required: "Last Name is required",
              })}
              placeholder={"Last Name"}
            />
            {errors.lastName && (
              <span className="text-red-500 text-sm">{errors.lastName.message}</span>
            )}

            <InputField
              type="email"
              id="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email address",
                },
              })}
              placeholder={"Email"}
            />
            {errors.email && (
              <span className="text-red-500 text-sm">{errors.email.message}</span>
            )}

            <InputField
              type="password"
              id="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              placeholder={"Password"}
            />
            {errors.password && (
              <span className="text-red-500 text-sm">{errors.password.message}</span>
            )}

            <InputField
              type="password"
              id="confirmPassword"
              {...register("confirmPassword", {
                required: "Confirm Password is required",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
              placeholder={"Confirm Password"}
            />
            {errors.confirmPassword && (
              <span className="text-red-500 text-sm">{errors.confirmPassword.message}</span>
            )}
          </div>

          <button
            className="bg-red-600 text-white w-full py-3 rounded-2xl font-semibold hover:bg-red-700 transition"
            type="submit"
          >
            Sign Up
          </button>

          <p className="text-center mt-4 text-gray-700">
            Already have an account?{" "}
            <button onClick={handleClick} className="text-red-600 hover:underline">
              Log In
            </button>
          </p>

          <div className="flex items-center my-6 text-gray-400">
            <hr className="flex-grow border-t border-gray-300" />
            <span className="mx-4 text-sm">or</span>
            <hr className="flex-grow border-t border-gray-300" />
          </div>

          <button
            type="button"
            className="border border-black rounded-2xl w-full flex items-center justify-center py-3 hover:bg-gray-100 transition"
          >
            <img className="h-6 sm:h-8 mr-4" src={Google} alt="Google Icon" />
            <span className="font-medium text-black">Sign Up with Google</span>
          </button>
        </form>
      </div>
    </>
  );
};

export default Signup;
