import React from 'react';

// The main component for the Call to Action section
const CallToAction: React.FC = () => {
  return (
    // Section container with a light green background and padding
    <section className="bg-emerald-50 font-sans rounded-lg shadow-sm p-8 sm:p-12 lg:p-16">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main heading */}
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Ready to Share Your Writings?
        </h2>
        
        {/* Subheading paragraph */}
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Join our growing community today and start making an impact with your unique
          insights. It's free, easy, and rewarding.
        </p>
        
        {/* Call-to-action button */}
        <div className="mt-8">
          <button
            type="button"
            className="inline-block px-8 py-3 bg-green-600 text-white font-semibold rounded-md shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-transform transform hover:scale-105 duration-300"
          >
            Join Wein
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;