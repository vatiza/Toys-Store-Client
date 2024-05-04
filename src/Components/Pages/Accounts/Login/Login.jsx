import { FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const handleLogin = (event) => {};
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-grow-0">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <div className="px-7">
            <p>
              Don't have account please{" "}
              <Link className="text-warning" to="/signup">
                Sign Up
              </Link>
              <br />
              <span className="flex justify-center items-center">Or</span>
            </p>
            <div className="m-3 flex gap-2 justify-center">
              <button className="btn btn-circle bg-red-600">
                <FaGoogle />
              </button>
              <button className="btn btn-circle bg-blue-700">
                <FaGithub />
              </button>
              <button className="btn btn-circle bg-violet-700">
                <FaTwitter />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
