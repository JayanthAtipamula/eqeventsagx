import React from 'react';

interface ServiceLayoutProps {
  children: React.ReactNode;
}

const ServiceLayout = ({ children }: ServiceLayoutProps) => {
  return (
    <div className="min-h-screen bg-black text-white pt-32">
      {children}
    </div>
  );
};

export default ServiceLayout; 