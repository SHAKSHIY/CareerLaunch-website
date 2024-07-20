import { useState } from 'react';
import { useForm } from "react-hook-form";
import CreatableSelect from "react-select/creatable";
import Footer from '../components/Footer';

const CreateJob = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const {
        register,
        handleSubmit,reset,
        formState: { errors },
    } = useForm()

    //handle input change
    const [query, setQuery] = useState("");
    const handleInputChange = (event) => {
        setQuery(event.target.value);
    }

    const onSubmit = (data) => {
        data.skills = selectedOption;
        //console.log(data);
        fetch("http://localhost:3000/post-job",{
            method: "POST",
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(data),
        }).then((res) => res.json()).then((result) => {
            console.log(result);
            if(result.acknowledged === true){
                alert("Job Posted Successfully!!!")
            }
            reset()
        })
    };

    const options = [
        { value: "Javascript", label: "Javascript" },
        { value: "C++", label: "C++" },
        { value: "HTML", label: "HTML" },
        { value: "CSS", label: "CSS" },
        { value: "React JS", label: "React JS" },
        { value: "Node JS", label: "Node JS" },
        { value: "MongoDB", label: "MongoDB" },
        { value: "Redux", label: "Redux" },
    ]

    return (
        <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4 py-5'>
            {/* form */}
            <div className='bg-[#FAFAFA] py-10 px-4 lg:px-16'>
                <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>

                    {/* 1st line */}
                    <div className='flex flex-col lg:flex-row items-center justify-between gap-8'>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg'>Job Title</label>
                            <input type="text" defaultValue={"Web Developer"} {...register("jobTitle")} className='block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6' />
                        </div>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg'>Company Name</label>
                            <input type="text" placeholder='Ex: Microsoft' {...register("companyName")} className='block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6' />
                        </div>
                    </div>


                    {/* 2nd line */}
                    <div className='flex flex-col lg:flex-row items-center justify-between gap-8'>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg'>Minimum Salary</label>
                            <input type="text" placeholder='$20k' {...register("minPrice")} className='block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6' />
                        </div>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg'>Maximum Salary</label>
                            <input type="text" placeholder='$120k' {...register("maxPrice")} className='block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6' />
                        </div>
                    </div>


                    {/* 3rd line */}
                    <div className='flex flex-col lg:flex-row items-center justify-between gap-8'>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg'>Salary Type</label>
                            <select {...register("salaryType")} className='block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6'>
                                <option value="">Choose your salary type</option>
                                <option value="Hourly">Hourly</option>
                                <option value="Monthly">Monthly</option>
                                <option value="Yearly">Yearly</option>
                            </select>
                        </div>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg'>Job Location</label>
                            <input type="text" placeholder='Ex: Hydrabad' {...register("jobLocation")} className='block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6' />
                        </div>
                    </div>


                    {/* 4th line */}
                    <div className='flex flex-col lg:flex-row items-center justify-between gap-8'>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg'>Job Posting date</label>
                            <input type="date" placeholder='Ex: 2024-07-08' {...register("postingDate")} className='block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6' />
                        </div>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg'>Experince level</label>
                            <select {...register("experienceLevel")} className='block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6'>
                                <option value="">Choose your experience</option>
                                <option value="NoExperience">Fresher</option>
                                <option value="Internship">Internship</option>
                                <option value="Work remotely">Work remotely</option>
                            </select>
                        </div>
                    </div>


                    {/* 5th line */}
                    <div>
                        <label className='block mb-2 text-lg'>Required Skill Sets:</label>
                        <CreatableSelect defaultInputValue={selectedOption} onChange={setSelectedOption} options={options} isMulti className='block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6' />
                    </div>


                    {/* 6th line */}
                    <div className='flex flex-col lg:flex-row items-center justify-between gap-8'>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg'>Company Logo</label>
                            <input type="url" placeholder='Paste your company logo url: https://microsoft.com/img' {...register("companyLogo")} className='block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6' />
                        </div>
                        <div className='lg:w-1/2 w-full'>
                            <label className='block mb-2 text-lg'>Employment type</label>
                            <select {...register("employmentType")} className='block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6'>
                                <option value="">Choose your option</option>
                                <option value="Full-time">Full-time</option>
                                <option value="Part-time">Part-time</option>
                                <option value="Temporary">Temporary</option>
                            </select>
                        </div>
                    </div>


                    {/* 7th line */}
                    <div className='w-full'>
                    <label className='block mb-2 text-lg'>Job Description</label>
                    <textarea className='w-full pl-3 py-1.5 focus:outline-none placeholder:text-gray-500' rows={6} placeholder='Job Description' {...register("description")}/>
                    </div>


                    {/* 8th line */}
                    <div className='w-full'>
                    <label className='block mb-2 text-lg'>Job Posted by: </label>
                    <input type="email" placeholder='xyz@gmail.com' {...register("postedBy")} className='block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6' />
                    </div>

                    <input type="submit" className='block mt-12 bg-purple-600 text-white font-semibold px-8 py-2 rounded-sm cursor-pointer' />
                </form>
            </div>
            <Footer query={query} handleInputChange={handleInputChange}/>
        </div>
    )
}

export default CreateJob;


// 01:38:41














// import { useState } from 'react';
// import { useForm } from "react-hook-form";
// import CreatableSelect from "react-select/creatable";

// const CreateJob = () => {
//     const [selectedOption, setSelectedOption] = useState(null);
//     const {
//         register,
//         handleSubmit,reset,
//         formState: { errors },
//     } = useForm()

//     const onSubmit = (data) => {
//         data.skills = selectedOption;
//         //console.log(data);
//         fetch("http://localhost:3000/post-job",{
//             method: "POST",
//             headers: {'Content-Type' : 'application/json'},
//             body: JSON.stringify(data),
//         }).then((res) => res.json()).then((result) => {
//             console.log(result);
//             if(result.acknowledged === true){
//                 alert("Job Posted Successfully!!!")
//             }
//             reset()
//         })
//     };

//     const options = [
//         { value: "Javascript", label: "Javascript" },
//         { value: "C++", label: "C++" },
//         { value: "HTML", label: "HTML" },
//         { value: "CSS", label: "CSS" },
//         { value: "React JS", label: "React JS" },
//         { value: "Node JS", label: "Node JS" },
//         { value: "MongoDB", label: "MongoDB" },
//         { value: "Redux", label: "Redux" },
//     ]

//     return (
//         <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4 py-5'>
//             {/* form */}
//             <div className='bg-[#FAFAFA] py-10 px-4 lg:px-16'>
//                 <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>

//                     {/* 1st line */}
//                     <div className='flex flex-col lg:flex-row items-center justify-between gap-8'>
//                         <div className='lg:w-1/2 w-full'>
//                             <label className='block mb-2 text-lg'>Job Title</label>
//                             <input type="text" defaultValue={"Web Developer"} {...register("jobTitle")} className='block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6' />
//                         </div>
//                         <div className='lg:w-1/2 w-full'>
//                             <label className='block mb-2 text-lg'>Company Name</label>
//                             <input type="text" placeholder='Ex: Microsoft' {...register("companyName")} className='block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6' />
//                         </div>
//                     </div>


//                     {/* 2nd line */}
//                     <div className='flex flex-col lg:flex-row items-center justify-between gap-8'>
//                         <div className='lg:w-1/2 w-full'>
//                             <label className='block mb-2 text-lg'>Minimum Salary</label>
//                             <input type="text" placeholder='$20k' {...register("minPrice")} className='block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6' />
//                         </div>
//                         <div className='lg:w-1/2 w-full'>
//                             <label className='block mb-2 text-lg'>Maximum Salary</label>
//                             <input type="text" placeholder='$120k' {...register("maxPrice")} className='block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6' />
//                         </div>
//                     </div>


//                     {/* 3rd line */}
//                     <div className='flex flex-col lg:flex-row items-center justify-between gap-8'>
//                         <div className='lg:w-1/2 w-full'>
//                             <label className='block mb-2 text-lg'>Salary Type</label>
//                             <select {...register("salaryType")} className='block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6'>
//                                 <option value="">Choose your salary type</option>
//                                 <option value="Hourly">Hourly</option>
//                                 <option value="Monthly">Monthly</option>
//                                 <option value="Yearly">Yearly</option>
//                             </select>
//                         </div>
//                         <div className='lg:w-1/2 w-full'>
//                             <label className='block mb-2 text-lg'>Job Location</label>
//                             <input type="text" placeholder='Ex: Hydrabad' {...register("jobLocation")} className='block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6' />
//                         </div>
//                     </div>


//                     {/* 4th line */}
//                     <div className='flex flex-col lg:flex-row items-center justify-between gap-8'>
//                         <div className='lg:w-1/2 w-full'>
//                             <label className='block mb-2 text-lg'>Job Posting date</label>
//                             <input type="date" placeholder='Ex: 2024-07-08' {...register("postingDate")} className='block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6' />
//                         </div>
//                         <div className='lg:w-1/2 w-full'>
//                             <label className='block mb-2 text-lg'>Experince level</label>
//                             <select {...register("experienceLevel")} className='block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6'>
//                                 <option value="">Choose your experience</option>
//                                 <option value="NoExperience">Fresher</option>
//                                 <option value="Internship">Internship</option>
//                                 <option value="Work remotely">Work remotely</option>
//                             </select>
//                         </div>
//                     </div>


//                     {/* 5th line */}
//                     <div>
//                         <label className='block mb-2 text-lg'>Required Skill Sets:</label>
//                         <CreatableSelect defaultInputValue={selectedOption} onChange={setSelectedOption} options={options} isMulti className='block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6' />
//                     </div>


//                     {/* 6th line */}
//                     <div className='flex flex-col lg:flex-row items-center justify-between gap-8'>
//                         <div className='lg:w-1/2 w-full'>
//                             <label className='block mb-2 text-lg'>Company Logo</label>
//                             <input type="url" placeholder='Paste your company logo url: https://microsoft.com/img' {...register("companyLogo")} className='block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6' />
//                         </div>
//                         <div className='lg:w-1/2 w-full'>
//                             <label className='block mb-2 text-lg'>Employment type</label>
//                             <select {...register("employmentType")} className='block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6'>
//                                 <option value="">Choose your option</option>
//                                 <option value="Full-time">Full-time</option>
//                                 <option value="Part-time">Part-time</option>
//                                 <option value="Temporary">Temporary</option>
//                             </select>
//                         </div>
//                     </div>


//                     {/* 7th line */}
//                     <div className='w-full'>
//                     <label className='block mb-2 text-lg'>Job Description</label>
//                     <textarea className='w-full pl-3 py-1.5 focus:outline-none placeholder:text-gray-500' rows={6} placeholder='Job Description' {...register("description")}/>
//                     </div>


//                     {/* 8th line */}
//                     <div className='w-full'>
//                     <label className='block mb-2 text-lg'>Job Posted by: </label>
//                     <input type="email" placeholder='xyz@gmail.com' {...register("postedBy")} className='block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6' />
//                     </div>

//                     <input type="submit" className='block mt-12 bg-purple-600 text-white font-semibold px-8 py-2 rounded-sm cursor-pointer' />
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default CreateJob


// // 01:38:41