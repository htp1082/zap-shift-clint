import React from "react";
import { useForm } from "react-hook-form";

const Registration = () => {
  const { register, handleSubmit } = useForm();

  const handleRegistration = (data) => {
    console.log(data);
  };
  return (
    <div>
      <div className="card-body">
        <form onSubmit={handleSubmit(handleRegistration)} className="fieldset">
          <label className="label">Email</label>
          <input
            type="email"
            className="input"
            {...register("email",{required:true})}
            placeholder="Email"
          />
          <label className="label">Password</label>
          <input
            type="password"
            className="input"
            {...register("password",{required:true})}
            placeholder="Password"
          />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Login</button>
        </form>
      </div>
      <div></div>
    </div>
  );
};

export default Registration;
