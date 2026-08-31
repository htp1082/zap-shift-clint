import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const {signInUser} = useAuth()

  const loginHandler = (data) => {
    console.log(data);
    signInUser(data.email,data.password)
    .then(result => console.log(result))
    .catch(error => console.log(error))
  };

  return (
    <div>
      <div className="card-body bg-white">
        <form onSubmit={handleSubmit(loginHandler)} className="fieldset">
          <label className="label">Email</label>
          <input
            type="email"
            className="input w-full"
            {...register("email", { required: true })}
            placeholder="Email"
          />

          {errors.email?.type === "required" && (
            <p className="text-red-500 font-bold">Email is required</p>
          )}
          <label className="label">Password</label>
          <input
            type="password"
            {...register("password", { required: true, minLength: 6 })}
            className="input w-full"
            placeholder="Password"
          />
          {errors.password?.type === "required" && (
            <p className="text-red-500 font-bold">Password is required</p>
          )}
           {errors.password?.type === "minLength" && (
            <p className="text-red-500 font-bold">Password is required</p>
          )}
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
