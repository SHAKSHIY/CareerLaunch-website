import React, { useState } from 'react';
import InputField from '../components/InputField';

const Filter = ({handleChange, handleClick }) => {
    const locations = [];
    const salaryTypes = ['Hourly', 'Monthly', 'Yearly'];
    const salaryRanges = [];
    const [selectedFilters, setSelectedFilters] = useState({
        // location: 'All',
        // salaryType: 'Hourly',
        // salaryRange: 'All',
        // postingDate: 'All time',
        // experience: 'Any Experience',
        // employmentType: 'All'
    });

    const handleFilterChange = (category, value) => {
        setSelectedFilters(prevFilters => ({
            ...prevFilters,
            [category]: value
        }));
    };

    return (
        <div className="p-4 bg-gray-100 rounded-lg">
            <h2 className="text-lg font-bold mb-4">Filters</h2>
            <div className="mb-6">
                <h3 className="font-semibold mb-2">Location</h3>
                {locations.map(location => (
                    <div key={location} className="flex items-center mb-1">
                        <input
                            type="radio"
                            name="location"
                            value={location}
                            checked={selectedFilters.location === location}
                            onChange={() => handleFilterChange('location', location)}
                            className="mr-2"
                        />
                        <label >{location}</label>
                    </div>
                ))}
                <div className="mt-4">
                    <InputField handleChange={handleChange} value="london" title="London" name="test" />
                    <InputField handleChange={handleChange} value="seattle" title="Seattle" name="test" />
                    <InputField handleChange={handleChange} value="madrid" title="Madrid" name="test" />
                    <InputField handleChange={handleChange} value="boston" title="Boston" name="test" />
                </div>
            </div>

            <div className="mb-6">
                <h3 className="font-semibold mb-2">Salary</h3>
                <div className="flex mb-2">
                    {salaryTypes.map(type => (
                        <button
                            key={type}
                            onClick={() => handleFilterChange('salaryType', type)}
                            className={`px-4 py-2 border ${selectedFilters.salaryType === type ? 'bg-purple-600 text-white' : 'bg-white'}`}
                        >
                            {type}
                        </button>
                    ))}
                </div>
                {salaryRanges.map(range => (
                    <div key={range} className="flex items-center mb-1">
                        <label className="sidebar-label-container flex items-center">
                            <input
                                type="radio"
                                name="salaryRange"
                                value={range}
                                checked={selectedFilters.salaryRange === range}
                                onChange={() => handleFilterChange('salaryRange', range)}
                                className="mr-2"
                            />
                            {range}
                            <span className="checkmark ml-2"></span>
                        </label>
                    </div>
                ))}
                <div className="mt-4">
                    <InputField handleChange={handleChange} value={30} title="< 30k" name="customRange" />
                    <InputField handleChange={handleChange} value={50} title="< 50k" name="customRange" />
                    <InputField handleChange={handleChange} value={80} title="< 80k" name="customRange" />
                    <InputField handleChange={handleChange} value={100} title="< 100k" name="customRange" />
                </div>
            </div>

            <div className="mb-6">
                <h3 className="font-semibold mb-2">Date of Posting</h3>
                {['All time', 'Last 24 Hours', 'Last 7 days', 'Last Month'].map(date => (
                    <div key={date} className="flex items-center mb-1">
                        <input
                            type="radio"
                            name="postingDate"
                            value={date}
                            checked={selectedFilters.postingDate === date}
                            onChange={() => handleFilterChange('postingDate', date)}
                            className="mr-2"
                        />
                        <label>{date}</label>
                    </div>
                ))}
            </div>

            <div className="mb-6">
                <h3 className="font-semibold mb-2">Work Experience</h3>
                {['Any Experience', 'Internship', 'Fresher', '1-2 Years', '3-5 Years'].map(exp => (
                    <div key={exp} className="flex items-center mb-1">
                        <input
                            type="radio"
                            name="experience"
                            value={exp}
                            checked={selectedFilters.experience === exp}
                            onChange={() => handleFilterChange('experience', exp)}
                            className="mr-2"
                        />
                        <label>{exp}</label>
                    </div>
                ))}
            </div>

            <div className="mb-6">
                <h3 className="font-semibold mb-2">Employment Type</h3>
                {['All', 'Full-time', 'Part-time', 'Temporary', 'Contract'].map(type => (
                    <div key={type} className="flex items-center mb-1">
                        <input
                            type="radio"
                            name="employmentType"
                            value={type}
                            checked={selectedFilters.employmentType === type}
                            onChange={() => handleFilterChange('employmentType', type)}
                            className="mr-2"
                        />
                        <label>{type}</label>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Filter;
