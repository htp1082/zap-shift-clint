import React, { use } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";

const Registration = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const {signUpUser} = useAuth();

  const handleRegistration = (data) => {
    console.log(data);
    signUpUser(data.email,data.password)
    .then(data =>{
      console.log(data)
      reset()
    })
    .catch((eror)=>{
      console.log(eror)
    })
    
  };
  return (
    <div>
      <div className="card-body bg-white">
        <form onSubmit={handleSubmit(handleRegistration)} className="fieldset">
          <label className="label">Email</label>
          <input
            type="email"
            className="input w-full"
            {...register("email", { required: true })}
            aria-invalid={errors.email ? "true" : "false"}
            placeholder="Email"
          />

          {errors.email?.type === "required" && (
            <p className="text-red-500 font-bold">Email is required</p>
          )}

          <label className="label">Password</label>
          <input
            type="password"
            className="input w-full"
            {...register("password", {
              required: true,
              minLength: 6,
            })}
            aria-invalid={errors.password ? "true" : "false"}
            placeholder="Password"
          />
          {errors.password?.type === "required" && (
            <p className="text-red-500 font-bold">Passwordd is required</p>
          )}

          {errors.password?.type === "minLength" && (
            <p className="text-red-500 font-bold">Passwordd must have 6 charecter or longer</p>
          )}
          <button className="btn btn-neutral mt-4">Login</button>
        </form>
      </div>
      <div></div>
    </div>
  );
};

export default Registration;
