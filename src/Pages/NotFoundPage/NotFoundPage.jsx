/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-2xl mb-4">Page Not Found</p>
      <p className="mb-8">The page you're looking for doesn't exist.</p>
      <Link to="/" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300">
        Go Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
