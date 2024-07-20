import React, { useState } from 'react';
import { FiMapPin, FiSearch } from "react-icons/fi";

const Banner = ({ query, designation, handleInputChange }) => {
    return (
        <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 md:py-20 py-14 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}">
            <h1 className="text-5xl font-bold text-primary mb-3 ${isDarkMode ? 'text-white' : 'text-black'}">
                Welcome to <span className="text-purple-600">Placement Portal</span> of IIT Patna
            </h1>
            <p className="text-lg text-black/70 mb-8">
                Find Your Dream <span className="text-purple-600">Jobs</span> and <span className="text-purple-600">Internships</span> tailored for you. Accelerate your career with <span className="text-purple-600">top</span> companies hiring now!
            </p>
    
            <form onSubmit={(e) => e.preventDefault()}>
                <div className="relative flex flex-col md:flex-row md:items-center md:gap-4 gap-4">
                    <div className="flex md:rounded-md rounded shadow-sm ring-1 ring-inset focus-within:ring-2 focus-within:ring-inset focus-within:ring-purple-600 md:w-1/2 w-full">
                        <FiSearch className="absolute mt-2.5 ml-2 text-gray-400" />
                        <input 
                            type="text" 
                            name="searchJobs" 
                            id="searchJobs" 
                            placeholder="Search for Jobs or Internships" 
                            className="block flex-1 border-0 bg-transparent py-2 pl-10 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" 
                            onChange={(e) => handleInputChange(e, 'query')}
                            value={query}
                        />
                    </div>
                    <div className="flex md:rounded-md rounded shadow-sm ring-1 ring-inset focus-within:ring-2 focus-within:ring-inset focus-within:ring-purple-600 md:w-1/3 w-full">
                        <FiMapPin className="absolute mt-2.5 ml-2 text-gray-400" />
                        <input 
                            type="text" 
                            name="searchLocation" 
                            id="searchLocation" 
                            placeholder="Location" 
                            className="block flex-1 border-0 bg-transparent py-2 pl-10 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" 
                            onChange={(e) => handleInputChange(e, 'designation')}
                            value={designation}
                        />
                    </div>
                    <button type='submit' className='bg-purple-600 py-2 px-8 text-white md:rounded-md rounded'>
                        Search
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Banner;