import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function ListCourse() {
   
    const [courses, setCourses] = useState([]);
   
    const [loading, setLoading] = useState(true);
  
    const [error, setError] = useState(null);

    useEffect(() => {
        
        const fetchCourses = async () => {
            try {
               
                const response = await axios.get('http://localhost:8080/api/v1/course/all-courses');
               
                const { courses } = response.data;
                // Set courses in state
                setCourses(courses);
                // Set loading state to false
                setLoading(false);
            } catch (error) {
                // Set error state if request fails
                setError(error.message);
                // Set loading state to false
                setLoading(false);
            }
        };

        // Call fetchCourses function
        fetchCourses();
    }, []); // Run only once on component mount

    if (loading) {
        return (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-300"></div>
            </div>
        );
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className='bg-white p-8'>
            <h1 className='text-2xl font-bold mb-4'>List of Courses</h1>
            <ul>
                {courses.map(course => (
                    <li key={course._id} className='mb-8'>
                        <div className='bg-gray-100 p-4 rounded-lg shadow'>
                            <h2 className='text-xl font-semibold mb-2'>{course.courseName}</h2>
                            <p>Course ID: {course.courseId}</p>
                            <p>Instructor: {course.instructorUsername}</p>
                            <p>Price: {course.price}</p>
                            <p>Course Category: {course.courseCategory}</p>
                            <p>Description: {course.description}</p>
                            <h3 className='mt-4 mb-2 font-semibold'>Modules:</h3>
                            <ul>
                                {course.modules.map((module, index) => (
                                    <li key={index} className='mb-4'>
                                        <h4 className='text-lg font-semibold mb-1'>Module {index + 1}</h4>
                                        <p className='mb-1'>Video Title: {module.video_title}</p>
                                        <p className='mb-1'>Video Description: {module.video_description}</p>
                                        <div className='mb-2'>
                                            <video height={400} width={500} className='w-full/2 h-auto' controls>
                                                <source src={module.video_url} type='video/mp4' />
                                                Your browser does not support the video tag.
                                            </video>
                                        </div>
                                        <div>
                                            <a
                                                href={module.note_url}
                                                download
                                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                            >
                                                View Module Note
                                            </a>
                                        </div>

                                    </li>
                                ))}
                            </ul>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
