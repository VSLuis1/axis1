import React from 'react';

type LogoProps = {
  src: string;
  alt?: string;
  className?: string;
};

const Logo: React.FC<LogoProps> = ({ src, alt = 'Logo', className = '' }) => {
  return (
    <img
      src="/logo.png"
      alt={alt}
      className={`h-16 w-16 object-contain ${className}`}
    />
  );
};

export default Logo;
