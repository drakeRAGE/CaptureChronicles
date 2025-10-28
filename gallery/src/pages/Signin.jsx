import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signInStart, signInSuccess, signInFailure, clearError } from '../redux/user/userSlice.jsx';
import OAuth from '../components/OAuth.jsx';
import { TERipple } from "tw-elements-react";

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearError());
  }, [dispatch]);

  const handleChnage = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(signInStart());
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data.message));
        return;
      }
      dispatch(signInSuccess(data));
      navigate('/');
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };

  return (
    <section className="h-full bg-gray-800 dark:bg-neutral-700">
      <div className="container h-full p-10">
        <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full">
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
              <div className="g-0 lg:flex lg:flex-wrap">
                {/* <!-- Left column container--> */}
                <div className="px-4 md:px-0 lg:w-6/12">
                  <div className="md:mx-6 md:p-12">
                    {/* <!--Logo--> */}
                    <div className="text-center">
                      <img
                        className="mx-auto w-48"
                        src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                        alt="logo"
                      />
                      <h4 className="mb-10 mt-1 pb-1 text-xl font-semibold">
                        We are The Drag Corp.
                      </h4>
                    </div>

                    {error && <p className="text-red-500 mt-5">{error}</p>}

                    <form onSubmit={handleSubmit} className="flex flex-col gap-4 pb-2">
                      <input
                        type="email"
                        placeholder="email"
                        className="border p-3 rounded-lg"
                        id="email"
                        onChange={handleChnage}
                      />
                      <input
                        type="password"
                        placeholder="password"
                        className="border p-3 rounded-lg"
                        id="password"
                        onChange={handleChnage}
                      />
                      <button
                        disabled={loading}
                        className="bg-red-500 text-white p-3 rounded-lg uppercase hover:opacity-90"
                      >
                        {loading ? 'Loading...' : 'Sign In'}
                      </button>
                    </form>

                    <div className="flex items-center justify-between pb-1">
                      <p className="mb-0 mr-2">Don&apos;t have an account?</p>
                      <Link to={'/sign-up'}>
                        <TERipple rippleColor="light">
                          <button
                            type="button"
                            className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                          >
                            Register
                          </button>
                        </TERipple>
                      </Link>
                    </div>

                    <div className="flex flex-col gap-4 pb-3">
                      <p className="mb-1 pt-1 text-center">Or</p>
                      <OAuth />
                    </div>
                  </div>
                </div>

                {/* <!-- Right column container with background and description--> */}
                <div
                  className="hidden lg:flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                  style={{
                    background:
                      'linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)',
                  }}
                >
                  <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                    <h4 className="mb-6 text-xl font-semibold">
                      We are more than just a company
                    </h4>
                    <p className="text-sm">
                      Experience exceptional photo and gallery event management services tailored to bring your vision to life. Let us help you create unforgettable visual stories that will be cherished for years to come.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
