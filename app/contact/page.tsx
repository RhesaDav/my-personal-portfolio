import React from 'react';
import { SiGithub, SiLinkedin, SiTwitter } from 'react-icons/si';

const ContactPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-8">Contact Page</h1>

      <div className="flex items-center mb-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 animate-bounce mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
          />
        </svg>
        <span className="text-lg">Email: example@example.com</span>
      </div>

    <div className="flex gap-5">

      <div className="flex items-center">
        <SiGithub className="h-6 w-6 animate-pulse mr-2 text-gray-700" />
        <a
          href="https://github.com/your-github-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg"
        >
          GitHub
        </a>
      </div>

      <div className="flex items-center">
        <SiLinkedin className="h-6 w-6 animate-pulse mr-2 text-blue-700" />
        <a
          href="https://www.linkedin.com/in/your-linkedin-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg"
        >
          LinkedIn
        </a>
      </div>

      <div className="flex items-center">
        <SiTwitter className="h-6 w-6 animate-pulse mr-2 text-blue-500" />
        <a
          href="https://twitter.com/your-twitter-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg"
        >
          Twitter
        </a>
      </div>
    </div>
    </div>
  );
};

export default ContactPage;
