'use client'
import Link from "next/link";
import { useForm } from "react-hook-form";


const LoginPage = () => {
   const{ register, handleSubmit, watch, formState: { errors }} = useForm()
    const handleLoginFunc = (data) => {
        // e.preventDefault()
        // const email = e.target.email.value
        // const password = e.target.password.value
        // console.log(email,password)
        console.log(data, "data")
    }
    // console.log(errors, "errors")
    // console.log(watch("email"))
    // console.log(watch("password"))

    return (
        <div className="container mx-auto min-h-screen flex items-center justify-center bg-gray-50">
            <div className="p-10 rounded-2xl bg-white shadow-2xl w-full max-w-sm border border-gray-100">
                <h2 className="font-extrabold text-3xl text-center mb-6 text-gray-800">
                    Login your account
                </h2>
                <form className="space-y-4" onSubmit={handleSubmit(handleLoginFunc)}>
                    
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
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend font-semibold text-gray-500">Password</legend>
                        <input 
                            type="password" 
                            className={`input input-bordered w-full focus:input-primary ${errors.password ? 'input-error' : ''}`}
                            placeholder="Type here password" 
                            {...register("password", { required: "Password field is required" })}
                        />
                        {errors.password && <span className="label-text-alt text-red-500 mt-1">{errors.password.message}</span>}
                    </fieldset>

                    <button className="btn w-full bg-slate-800 hover:bg-slate-900 text-white border-none mt-2">
                        Login
                    </button>
                </form>

                <p className="mt-4 text-sm text-center">
                    Don't have an account? <Link href="/register" className="text-blue-500 hover:underline">Register</Link>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;
//   <div className="container mx-auto min-h-screen flex items-center justify-center bg-gray-50">
//             <div className="p-10 rounded-2xl bg-white shadow-2xl w-full max-w-sm border border-gray-100">
//                 <h2 className="font-extrabold text-3xl text-center mb-6 text-gray-800">
//                     Login your account
//                 </h2>
//                 <form className="space-y-4"onSubmit={handleSubmit(handleLoginFunc)}>
//                     <fieldset className="fieldset">
//                         <legend className="fieldset-legend font-semibold text-gray-500">Email</legend>
//                         <input type="email" className="input input-bordered w-full focus:input-primary"
//                        placeholder="Type here email"
//                          {...register("email", {required: "email field is required"})} />
//                         {errors.email && <p className="text-red-500">{errors.email.message}</p>}
//                     </fieldset>
//   {/* name="email"
//   name="password" */}

//                     <fieldset className="fieldset">
//                         <legend className="fieldset-legend font-semibold text-gray-500">Password</legend>
//                         <input type="password" className="input input-bordered w-full focus:input-primary"
//                         placeholder="Type here password" 
//                         {...register("password", {required: "password field is required" })}/>
//                         {errors.password && <p className="text-red-500">{errors.password.message}</p>}
//                     </fieldset>
//                     <button className="btn w-full bg-slate-800 text-white">Login</button>
//                 </form>
//                 <p className="mt-4">Don't have an account ? <Link href={"/register"} className="text-blue-500">Register</Link></p>
//             </div>
//         </div>