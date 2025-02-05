// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axiosInstance from '../axiosInstance';
import './Login.css';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault(); // Prevent form submission refresh
//     try {
//       // API call to check email and password
//       const response = await axiosInstance.post('/customers/login/', {
//         email,
//         password,
//       });

//       if (response.data && response.data.success) {
//         // Navigate to home if login is successful
//         navigate('/home');
//       } else {
//         setError('Invalid email or password.');
//       }
//     } catch (err) {
//       console.error('Error during login:', err);
//       setError('Invalid email or password.');
//     }
//   };

//   return (
//     <div className="login-container">
//       <h1>Login</h1>
//       <form onSubmit={handleLogin}>
//         <div className="form-group">
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         {error && <p className="error-message">{error}</p>}
//         <button type="submit" className="login-button">
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Login;



//new
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const LoginLogout = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate authentication (replace with actual logic)
    if (username === 'admin' && password === '1234') {
      setIsAuthenticated(true);
      setError('');
      navigate('/home');
    } else {
      setError('Invalid username or password');
    }
  };

  // const handleLogout = () => {
  //   setIsAuthenticated(false);
  //   setUsername('');
  //   setPassword('');
  // };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {isAuthenticated ? (
        <div className="login-container">
          <h1 className="text-2xl font-bold text-blue-600 mb-4">Welcome, Admin!</h1>
          
        </div>
      ) : (
        <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
          <h1 className="text-2xl font-bold text-blue-600 mb-4 text-center">Admin Login</h1>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mt-1 block w-full p-2 border rounded-lg"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full p-2 border rounded-lg"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
            >
              Login
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default LoginLogout;
