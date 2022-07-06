import React from "react";
import { Logo } from "./Logo";

// import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <header className="w-full py-5 flex justify-center align-center bg-gray-700 border-b border-gray-600">
      <Logo />
    </header>
  );
};

export default Header;
