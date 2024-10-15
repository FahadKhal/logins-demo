import { useReducer } from "react";
import { useAuth } from "../../../context/AuthContext";
import { failToast, successToast } from "../global/Toast";
import { useNavigate } from "react-router-dom";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import ClipLoader from "react-spinners/ClipLoader";
import { actions, initialState, reducer } from "./reducer";
const Login = () => {
  const { login, isAuthenticated } = useAuth();

  const [state, dispatchLocal] = useReducer(reducer, initialState);
  const { username, password, error, loading, showPassword } = state;

  const navigate = useNavigate();
  if (isAuthenticated) {
    navigate("/home");
    return null;
  }
  const validateForm = () => {
    if (!username || !password) {
      dispatchLocal(actions.update("error", "Please fill in all fields."));

      return false;
    }
    if (password.length < 6) {
      dispatchLocal(
        actions.update("error", "Password must be at least 6 characters long.")
      );

      return false;
    }
    return true;
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    dispatchLocal(actions.update("error", ""));

    if (!validateForm()) return;

    dispatchLocal(actions.update("loading", true));

    try {
      const res = await login(username, password);
      successToast(res.message || "Login Success");
      navigate("/home");
    } catch (err: any) {
      failToast(err.message || "Invalid username or password.");
    } finally {
      dispatchLocal(actions.update("loading", false));
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="w-full md:w-[45%] flex flex-col justify-center items-center px-4 md:px-10">
        <div className="mb-6 flex md:justify-start md:items-start  justify-center items-center w-full max-w-[420px]">
          <img src="/loginIcon.png" alt="Logo" className="h-10" />
        </div>

        <div className="font-bold text-[32px] md:text-[64px] leading-[40px] md:leading-[60px] mb-2 w-full md:w-[420px] md:text-start text-center">
          Welcome back
        </div>
        <div className="text-[#3B4752] mb-8 font-light text-[14px] md:text-[18px] leading-[20px] md:leading-[28px] font-public-sans w-full md:w-[420px] md:text-start text-center">
          You need to be signed in to access the project dashboard.
        </div>

        <form onSubmit={handleLogin} className="w-full max-w-[420px]">
          <div className="mb-2">
            <label
              className="block leading-[32px] text-[16px] font-semibold mb-2 text-[#222B33] font-public-sans"
              htmlFor="email"
            >
              Email or username
            </label>
            <input
              type="text"
              id="email"
              placeholder="wesley.mendoza@example.com"
              className="w-full h-[40px] border p-3 rounded"
              value={username}
              onChange={(e) =>
                dispatchLocal(actions.update("username", e.target.value))
              }
            />
          </div>

          <div className="mb-4 relative">
            <label
              className="block leading-[32px] text-[16px] font-semibold mb-2 text-[#222B33] font-public-sans"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="••••••••"
              className="w-full h-[40px] border p-3 rounded"
              value={password}
              onChange={(e) =>
                dispatchLocal(actions.update("password", e.target.value))
              }
            />
            <span
              onClick={() =>
                dispatchLocal(actions.update("showPassword", !showPassword))
              }
              className="absolute right-3 top-12 cursor-pointer"
            >
              {showPassword ? (
                <FaEye className="w-[20px] h-[20px] " />
              ) : (
                <FaEyeSlash className="w-[20px] h-[20px] " />
              )}
            </span>
          </div>

          {error && <p className="text-red-500 mb-4">{error}</p>}

          <div className="flex justify-between items-center mb-6 w-full">
            <label className="flex justify-between items-center ">
              <input type="checkbox" className="mr-2 w-[15px] h-[15px]" />
              <span>Keep me signed in</span>
            </label>
            <a href="#" className="text-blue-500 text-sm">
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            className={`w-full ${
              loading ? "bg-gray-500" : "bg-green-500"
            } text-white p-3 rounded mb-4`}
            disabled={!!loading}
          >
            {loading ? (
              <ClipLoader color="#ffffff" loading={!!loading} size={20} />
            ) : (
              "Sign in"
            )}
          </button>
          <button
            type="button"
            className="w-full border border-gray-300 p-3 rounded flex justify-center items-center"
          >
            <img src="/googleIcon.png" alt="Google" className="h-5 mr-2" />
            Sign in with Google
          </button>
        </form>

        <p className="flex justify-center items-center w-full my-4">
          Haven’t joined yet?{" "}
          <a href="#" className="text-blue-500">
            Sign up
          </a>
        </p>
      </div>

      <div className="w-full md:w-[55%]">
        <img
          src="/mainImage.png"
          alt="Main visual"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default Login;
