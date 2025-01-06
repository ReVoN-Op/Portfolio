import React from 'react';

const Footer = () => {
  return (
    <footer className="left-0 w-full bg-black text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Left Side */}
        <p className="text-lg"><span className='text-purple-500'>Developed</span> by me</p>

        {/* Right Side: Social Media Links */}
        <div className="flex space-x-6">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <img src="/public/images/github1.png" alt="GitHub" className="h-8 w-8 hover:text-gray-200" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src="/public/images/l.jpg" alt="LinkedIn" className="h-6 w-6 hover:text-gray-200" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="/public/images/instagram.jpg" alt="Instagram" className="h-6 w-6 hover:text-gray-200" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
