import React from "react";

const Loading = () => {
  return (
    <div className="loading-screen fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 z-50">
      <div className="text-white text-4xl font-bold text-center">
        <p>Loading...</p>
        {/* Use your GIF here */}
        <img
          src="/loading1.gif"  // Assuming the GIF is in the public folder
          alt="Loading..."
          className="w-32 h-32 mt-4"  // Adjust size of the gif
        />
      </div>
    </div>
  );
};

export default Loading;
