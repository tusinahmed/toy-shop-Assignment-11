import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { updateProfile } from 'firebase/auth';

const SignUp = () => {


    let { user, setuser, SignUpUser, auth } = useContext(AuthContext)

    let handelSingup = (e) => {
        e.preventDefault()

        let form = e.target;

        let name = form.name.value;
        let email = form.email.value;
        let password = form.password.value;
        console.log(name, email, password)

        SignUpUser(email, password)
            .then(result => {
                let adduser = result.user;
                console.log(adduser.email)
                updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL: name,
                })

                setuser(adduser)


            })
            .catch(error => console.log(error.message))




    }
    return (
        <div>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-cols">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold"> Sign up Now!</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 p-10">
                        <form onSubmit={handelSingup}>
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text"> Name</span>
                                    </label>
                                    <input type="text" placeholder="name" name='name' className="input input-bordered" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" name='email' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="text" placeholder="password" name='password' className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">

                                    <input className='btn btn-primary' type="submit" value={'Sign Up'} />

                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SignUp;