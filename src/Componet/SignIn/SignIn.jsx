import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const SignIn = () => {

    let { user, setuser, SignUpUser, auth, signIn, googlesing, errorMessage, seterrorMessage } = useContext(AuthContext)
    let location = useLocation();
    let from = location.state?.from?.pathname || '/';
    let nagivate = useNavigate()

    let handelsigninbtn = (e) => {
        e.preventDefault()
        let form = e.target;
        let email = form.email.value;
        let password = form.password.value;
        console.log(email, password)

        signIn(email, password)
            .then(result => {
                let usersing = result.user;
                console.log(usersing, result)
                setuser(usersing)
                nagivate(from, { replace: true })
            })
            .catch(error => seterrorMessage(error.message))




    }




    let handelgoogle = () => {
        googlesing()
            .then(result => {
                let newuseris = result.user;
                setuser(newuseris)
                nagivate(from, { replace: true })
            })
            .catch(error => seterrorMessage(error.message))
    }

    return (
        <div>

            <div className="hero min-h-screen bg-base-200 ">
                <div className="hero-content flex-col lg:flex-row-">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                        <form onSubmit={handelsigninbtn} className="grid grid-cols-2 gap-4 p-4">
                            <div className="form-control p-1">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="Email" name="email" className="input input-bordered" />
                            </div>

                            <div className="form-control p-1">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="Password" name="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>

                            <div className="form-control col-span-2 p-1 mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>

                            <div>

                                <h1 className='text-red-700'>{errorMessage}</h1>
                            </div>

                            <div className="form-control col-span-2 p-1 mt-6">
                                <button onClick={handelgoogle} className="btn btn-primary">Google</button>
                            </div>
                        </form>



                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;