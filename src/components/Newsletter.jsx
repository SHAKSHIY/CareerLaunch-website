import React from 'react';
import { FaEnvelopeOpenText, FaRocket } from "react-icons/fa6";

const Newsletter = () => {
    return (
        <div>
            <div className='mt-20'>
                <h3 className='text-lg font-bold mb-2 flex items-center gap-2'>
                    <FaEnvelopeOpenText />
                    Email me for Jobs
                </h3>
                <p className='text-primary/75 text-base mb-4'>
                    Stay updated with the latest job postings and opportunities. Subscribe to our newsletter to receive job alerts directly in your inbox.
                </p>

                <div className='w-full space-y-4'>
                    <input 
                        type="email" 
                        name='email' 
                        id='email' 
                        placeholder='name@gmail.com' 
                        className='w-full block py-2 pl-3 border focus:outline-none'
                    />
                    <input 
                        type="submit" 
                        value="Subscribe" 
                        className='w-full block py-2 pl-3 border focus:outline-none bg-purple-600 rounded-sm text-white cursor-pointer font-semibold'
                    />
                </div>
            </div>

            <div className='mt-20'>
                <h3 className='text-lg font-bold mb-2 flex items-center gap-2'>
                    <FaRocket />
                    Get noticed faster
                </h3>
                <p className='text-primary/75 text-base mb-4'>
                    Upload your resume to get noticed by top companies. Make sure your resume is up-to-date and stands out to potential employers.
                </p>
                
                <div className='w-full space-y-4'>
                    <input 
                        type="submit" 
                        value="Upload Your Resume" 
                        className='w-full block py-2 pl-3 border focus:outline-none bg-purple-600 rounded-sm text-white cursor-pointer font-semibold'
                    />
                </div>
            </div>
        </div>
    );
};

export default Newsletter;
