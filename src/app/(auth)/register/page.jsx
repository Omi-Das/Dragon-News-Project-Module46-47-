'use client'
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";


const RegisterPage = () => {
   const{ register, handleSubmit, watch, formState: { errors }} = useForm()

    const [isShowPassword, setIsShowPassword] = useState(false)
    const handleRegisterFunc = async(data) => {
        // e.preventDefault()
        // const email = e.target.email.value
        // const password = e.target.password.value
        // console.log(email,password)
        console.log(data, "data")
        const {email, name, photo, password} = data
        console.log(name,photo)

         const { data:res, error } = await authClient.signUp.email({
           name: name, // required
    email: email, // required
    password: password, // required
    image: photo,
    callbackURL: "/",
    })

    console.log(res, error)
    if(error){
        alert(error.message)
    }
    if(res){
        alert("signup successful")
    }
    }
    // console.log(errors, "errors")
    // console.log(watch("email"))
    // console.log(watch("password"))


    return (
        <div className="container mx-auto min-h-screen flex items-center justify-center bg-gray-50">
            <div className="p-10 rounded-2xl bg-white shadow-2xl w-full max-w-sm border border-gray-100">
                <h2 className="font-extrabold text-3xl text-center mb-6 text-gray-800">
                    Register your account
                </h2>
                <form className="space-y-4" onSubmit={handleSubmit(handleRegisterFunc)}>
                    
{/* name field */}
                      <fieldset className="fieldset">
                        <legend className="fieldset-legend font-semibold text-gray-500">Name</legend>
                        <input 
                            type="name" 
                            className={`input input-bordered w-full focus:input-primary ${errors.email ? 'input-error' : ''}`}
                            placeholder="Type here name" 
                            {...register("name", { required: "name field is required" })} // এটি ইনপুট ট্যাগের ভেতরে হবে
                        />
                        {errors.name && <span className="label-text-alt text-red-500 mt-1">{errors.name.message}</span>}
                    </fieldset>

                    {/* Photo url Field */}
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend font-semibold text-gray-500">Photo</legend>
                        <input 
                            type="text" 
                            className={`input input-bordered w-full focus:input-primary ${errors.password ? 'input-error' : ''}`}
                            placeholder="Type here photo url" 
                            {...register("photo", { required: "photo field is required" })}
                        />
                        {errors.photo && <span className="label-text-alt text-red-500 mt-1">{errors.photo.message}</span>}
                    </fieldset>
                    {/* Email Field */}
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend font-semibold text-gray-500">Email</legend>
                        <input 
                            type="email" 
                            className={`input input-bordered w-full focus:input-primary ${errors.email ? 'input-error' : ''}`}
                            placeholder="Type here email" 
                            {...register("email", { required: "Email field is required" })} // এটি ইনপুট ট্যাগের ভেতরে হবে
                        />
                        {errors.email && <span className="label-text-alt text-red-500 mt-1">{errors.email.message}</span>}
                    </fieldset>

                    {/* Password Field */}
                    <fieldset className="fieldset relative">
                        <legend className="fieldset-legend font-semibold text-gray-500">Password</legend>
                        <input 
                            type={isShowPassword ? "text" : "password"}
                            className={`input input-bordered w-full focus:input-primary ${errors.password ? 'input-error' : ''}`}
                            placeholder="Type here password" 
                            {...register("password", { 
                                required: "Password field is required",
                                minLength: { value: 6, message: "Password must be at least 6 characters" }
                            })}
                        />
                         <span className="absolute right-1 top-3 cursor-pointer" onClick={() => setIsShowPassword(!isShowPassword)}>{isShowPassword ? <FaEye/> : <FaEyeSlash/>}</span>
                        {errors.password && <span className="label-text-alt text-red-500 mt-1">{errors.password.message}</span>}
                    </fieldset>


                    <button className="btn w-full bg-slate-800 hover:bg-slate-900 text-white border-none mt-2">
                     Register
                    </button>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;