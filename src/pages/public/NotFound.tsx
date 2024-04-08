import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-1 items-center">
      <p className="mt-2">Page not Found</p>
      <button
        className="bg-gray-700 w-[120px] py-1 rounded text-white hover:bg-gray-500"
        onClick={() => navigate('/dashboard')}>
        Dashboard
      </button>
    </div>
  );
};

export default NotFound;
