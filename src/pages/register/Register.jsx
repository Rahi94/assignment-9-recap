import React, { useContext } from 'react';
import Navbar from '../../components/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../components/firebaseProvider/FirebaseProvider';
import { useForm } from 'react-hook-form';

const Register = () => {

        const {createUser} = useContext(AuthContext)
        console.log(createUser)

        const {
            register,
            handleSubmit,
            watch,
            formState: { errors },
          } = useForm()
          const onSubmit = (data) => console.log(data)

    return (
        <div>
            <Navbar></Navbar>
            {/* register */}
            <div className=" bg-base-200 min-h-screen">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>

                    </div>
                    <div className="card mt-6 w-1/3 bg-base-100  shrink-0 shadow-2xl">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Full name" className="input input-bordered" required 
                                 {...register("FullName", { required: true })}
                                />
                                {errors.FullName && <span className='text-red-500'>This field is required</span>}
                                
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Email" className="input input-bordered" required 
                                {...register("Email", { required: true })}
                                />
                                {errors.Email && <span className='text-red-500'>This field is required</span>}
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required 
                                {...register("Password", { required: true })}
                                />
                                {errors.Password && <span className='text-red-500'>This field is required</span>}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Already have an account? please <Link className='text-blue-600 font-bold' to='/login'>Login</Link></a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;