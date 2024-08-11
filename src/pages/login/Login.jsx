import React, { useContext } from 'react';
import Navbar from '../../components/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../components/firebaseProvider/FirebaseProvider';
import { useForm } from 'react-hook-form';

const Login = () => {

    const { signInUser } = useContext(AuthContext)

    const {
        register,
        handleSubmit,
        
        formState: { errors },
    } = useForm()
    const onSubmit = (data) =>{

        // const {Email, Password} = data
        
        signInUser(data.Email, data.Password)
        // console.log(data.Email)
        .then((result)=>{
            console.log(result)
        })
        .catch((error)=>{
            console.error(error)
        })
    }

   


    return (
        <div>
            <Navbar></Navbar>
            {/* form */}
            <div className=" bg-base-200 min-h-screen">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>

                    </div>
                    <div className="card mt-6 w-1/3 bg-base-100  shrink-0 shadow-2xl">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required
                                    {...register("Email", { required: true })}
                                />
                                {errors.Email && <span className='text-red-500'>This field is required</span>}

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required
                                    {...register("Password", { required: true })}
                                />
                                {errors.Password && <span className='text-red-500'>This field is required</span>}

                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Don't have an account? Please <Link className='font-bold text-blue-600' to='/register'>Register</Link></a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;