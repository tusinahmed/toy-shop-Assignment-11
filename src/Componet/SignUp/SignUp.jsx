import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { updateProfile } from 'firebase/auth';

const SignUp = () => {


    let { user, setuser, SignUpUser, auth, googlesing, errorMessage, seterrorMessage } = useContext(AuthContext)


    let handelSingup = (e) => {
        e.preventDefault()

        let form = e.target;

        let name = form.name.value;
        let email = form.email.value;
        let password = form.password.value;
        let url = form.url.value;
        console.log(name, email, password)



        SignUpUser(email, password)
            .then(result => {
                let adduser = result.user;
                console.log(adduser.email)
                updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL: url,
                })

                setuser(adduser)


            })
            .catch(error => seterrorMessage(error.message))




    }

    let handelgoogle = () => {
        googlesing()
            .then(result => {
                let newuseris = result.user;
                setuser(newuseris)
            })
            .catch(error => seterrorMessage(error.message))
    }
    return (
        <div>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-cols">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold"> Sign up Now!</h1>

                    </div>
                    <div className="card bg-gray-200 p-10 ">
                        <form onSubmit={handelSingup} className="grid grid-cols-2 gap-4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" name="name" className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="Email" name="email" className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotoUrl</span>
                                </label>
                                <input type="text" placeholder="URL" name="url" className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="Password" name="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>


                            <div>

                                <h1 className='text-red-700'>{errorMessage}</h1>
                            </div>


                            <div className="form-control mt-6 col-span-2">
                                <input className="btn btn-primary" type="submit" value="Sign Up" />
                            </div>


                            <div className="form-control mt-6 col-span-2  ">
                                <button onClick={handelgoogle} className='btn btn-primary'> Goolge </button>
                            </div>
                        </form>


                    </div>
                </div>
            </div >

        </div >
    );
};

export default SignUp;