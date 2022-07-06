import React from "react";
import { BounceLoader } from "react-spinners";

// import { Container } from './styles';

const Spinner: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full text-center grid place-items-center z-[999] bg-opacity-25">
      <BounceLoader size={60} color="#00B37E" />
    </div>
  );
};

export default Spinner;
