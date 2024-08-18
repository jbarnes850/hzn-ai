import React from 'react';

const Loading: React.FC = () => (
  <div className="flex justify-center items-center h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-[#9696FE]"></div>
  </div>
);

export default Loading;