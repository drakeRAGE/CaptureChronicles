import {useState}  from 'react'
import {Link, useNavigate} from 'react-router-dom'
import OAuth from '../components/OAuth';
import { TERipple } from "tw-elements-react";

export default function SignUp() {
  const [formData, setFormData]= useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChnage = (e) => {
    setFormData({
      ...formData,
      [e.target.id] : e.target.value,
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // console.log('Form Submitted!');
      setLoading(true);
      const res = await fetch('/api/auth/signup',  {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if(data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      console.log(data);
      navigate('/sign-in');
    } catch(error) {
      setLoading(false);
      setError(error.message);
    }

  };

  // console.log(formData)
  return (
    <div className=''>
      {/* <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input type="text" placeholder='username' className='border p-3 rounded-lg' id='username' onChange={handleChnage}/>
        <input type="email" placeholder='email' className='border p-3 rounded-lg' id='email' onChange={handleChnage}/>
        <input type="password" placeholder='password' className='border p-3 rounded-lg' id='password' onChange={handleChnage}/>

        <button disabled={loading} className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-70'>{loading ? 'Loading...' : 'Sign Up'}</button>
        <OAuth />
      </form>

      <div className='flex gap-2 mt-5'>
        <p>Already have an account?</p>
        <Link to={'/sign-in'}>
          <span className='text-blue-700'>Sign In</span>
        </Link>
      </div> */}

      <section style={{height: '92vh'}} className="h-full bg-gray-800 dark:bg-neutral-700">
        <div className="container h-full p-5">
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
                        <h4 className=" mt-1 pb-1 text-xl font-semibold">
                          We are The Drag Corp.
                        </h4>
                      </div>

                        {/* <p className="mb-4">Please login to your account</p> */}
                      <form onSubmit={handleSubmit} className='flex flex-col gap-4 pb-2'>
                        <input type="text" placeholder='username' className='border p-3 rounded-lg' id='username' onChange={handleChnage}/>
                        <input type="email" placeholder='email' className='border p-3 rounded-lg' id='email' onChange={handleChnage}/>
                        <input type="password" placeholder='password' className='border p-3 rounded-lg' id='password' onChange={handleChnage}/>
                        <button disabled={loading} className='bg-red-500 text-white p-3 rounded-lg uppercase hover:opacity-95'>{loading ? 'Loading...' : 'Sign Up'}</button>
                      </form>
                      <div className="flex items-center justify-between pb-1">
                        <p className="mb-0 mr-2">Already have an account?</p>
                        <Link to={'/sign-in'}>
                          <TERipple rippleColor="light">
                            <button
                              type="button"
                              className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                            >
                              Login
                            </button>
                          </TERipple>
                        </Link>
                      </div>

                      <div className='flex flex-col gap-4'>
                        <p className='mb-1 pt-1 text-center'>Or</p>
                        <OAuth />
                  {/* {error && <p className='text-red-500 mt-5'>{error}</p>} */}
                      </div>
                    </div>
                  </div>

                  {/* <!-- Right column container with background and description--> */}
                  <div
                    className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                    style={{
                      background:
                        "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                    }}
                  >
                    <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                      <h4 className="mb-6 text-xl font-semibold">
                        We are more than just a company
                      </h4>
                      <p className="text-sm">
                        Experience exceptional photo and gallery event management services tailored to bring your vision to life. Let us help you create unforgettable visual stories that will be cherished for years to come
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      

      {error && <p className='text-red-500 mt-5'>{error}</p>}
    </div>

    
  )
}
