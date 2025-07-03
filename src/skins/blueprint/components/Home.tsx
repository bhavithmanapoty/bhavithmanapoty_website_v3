import React from 'react';

const BlueprintHome: React.FC = () => {
  return (
  <div
    className="
      w-full min-h-screen
      bg-[url('./common/assets/blueprint.png')] bg-repeat
      flex flex-col items-center justify-center text-center px-4
    "
  >
    <h1
      className="
        max-w-full break-words whitespace-normal
        font-permanent text-white leading-tight
        text-4xl md:text-6xl lg:text-8xl xl:text-9xl
      "
    >
      Bhavith&nbsp;Manapoty
    </h1>

    <h2
      className="
        max-w-full break-words whitespace-normal
        font-indie text-white mt-4 leading-snug
        text-3xl md:text-4xl lg:text-5xl
      "
    >
      Welcome to the Blueprint&nbsp;of&nbsp;my&nbsp;Life
    </h2>
  </div>
);
};

export default BlueprintHome;
