import InputField from '../Components/Input'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { ToastContainer, toast } from 'react-toastify'
import { http } from '../config/Axios'

const Login = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/signup')
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    try {
      const response = await http.post('/user/login', data)
      toast.success(response.data.message)
      const accessToken = response.data.accessToken
      localStorage.setItem('accessToken', accessToken)
      localStorage.setItem('user', JSON.stringify(response.data.user))
      navigate('/')
    } catch (error) {
      console.error('Error:', error)
      if (error.response.status === 404) {
        toast.error(error.response.data.message)
      }
    }
  }

  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 bg-gray-50">
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-gray-800">
          Welcome to Login Page
        </h1>

        <div className="w-full max-w-md bg-white border rounded-2xl shadow-lg p-6 sm:p-8">
          <ToastContainer />
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
            <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6">Login</h1>

            <div className="mb-4">
              <InputField
                title={'Email'}
                type="text"
                id="email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: 'Invalid email address',
                  },
                })}
                placeholder={'Email'}
              />
              {errors.email && (
                <span className="text-red-500 text-sm mt-1 block">{errors.email.message}</span>
              )}
            </div>

            <div className="mb-4">
              <InputField
                title={'Password'}
                type="password"
                id="password"
                {...register('password', {
                  required: 'Password is required',
                  minLength: {
                    value: 6,
                    message: 'Password must be at least 6 characters',
                  },
                })}
                placeholder={'Password'}
              />
              {errors.password && (
                <span className="text-red-500 text-sm mt-1 block">{errors.password.message}</span>
              )}
            </div>

            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 transition-colors text-white p-3 rounded-2xl w-full font-semibold"
            >
              Login
            </button>

            <p className="text-center mt-5 text-gray-700">
              Don't have an account?{' '}
              <button onClick={handleClick} className="text-red-600 hover:underline font-semibold">
                Sign Up
              </button>
            </p>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login
