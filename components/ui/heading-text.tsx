import React from 'react';

interface Props {
  title: string;
  description: string;
}

const HeadingText: React.FC<Props> = ({ title, description }) => {
  return (
    <div className="my-6">
      <h1 className="text-xl font-bold text-gray-800">{title}</h1>
      <p className="text-gray-600 mt-2 font-medium">{description}</p>
    </div>
  );
};

export default HeadingText;
