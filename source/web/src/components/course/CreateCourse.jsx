import React, { useState } from "react";
import axios from "axios";

export default function CreateCourse() {

  const generateUniqueId = () => {
    const timestamp = Date.now().toString(36);
    const randomStr = Math.random().toString(36).substring(2, 8);
    return timestamp + randomStr;
  }; 
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [courseId, setCourseId] = useState(generateUniqueId());
  const [courseName, setCourseName] = useState("");
  const [instructorUsername, setInstructorUsername] = useState("");
  const [price, setPrice] = useState('');
  const [courseCategory, setCourseCategory] = useState("");
  const [description, setDescription] = useState("");
  const [modules, setModules] = useState([{ video_title: "", video_description: "", video_file: null, note_file: null }]);

  const handleInputChange = (e, index) => {
    const { name, value, files } = e.target;
    const newModules = [...modules];
    if (name === "video_file" || name === "note_file") {
      newModules[index][name] = files[0];
    } else {
      newModules[index][name] = value;
    }
    setModules(newModules);
  };

  const handleAddModule = () => {
    setModules([...modules, { video_title: "", video_description: "", video_file: null, note_file: null }]);
  };

  const handleRemoveModule = (index) => {
    const newModules = [...modules];
    newModules.splice(index, 1);
    setModules(newModules);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const textData = { courseId, courseName, instructorUsername, price, courseCategory, description, };
    console.log(textData)
    const uploadedModules = await Promise.all(
      modules.map(async (module) => {
        const videoUrl = module.video_file ? await uploadToCloudinary(module.video_file, "video") : null;
        const noteUrl = module.note_file ? await uploadToCloudinary(module.note_file, "auto") : null;

        return {
          video_url: videoUrl,
          note_url: noteUrl,
          ...module
        };
      })
    );

    const courseData = { courseId, courseName, instructorUsername, price, courseCategory, description, modules: uploadedModules };
    console.log("Course data:", courseData);

    // Send data to backend
    try {
      const response = await axios.post("http://localhost:8080/api/v1/course/new-course", courseData);
      alert("Response from backend:", response.data);

    } catch (error) {
      console.error("Error sending data to backend:", error);
    }

    // Reset the form after submission
    setIsSubmitting(false);
    setCourseId("");
    setCourseName("");
    setInstructorUsername("");
    setPrice(0);
    setCourseCategory("");
    setDescription("");
    setModules([{ video_title: "", video_description: "", video_file: null, note_file: null }]);
  };

  const uploadToCloudinary = async (file, resourceType) => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "ysb7icly");
      formData.append("resource_type", resourceType);
      formData.append("Content-Type", "application/pdf");

      const response = await axios.post("https://api.cloudinary.com/v1_1/dooem026n/upload", formData);
      console.log("Uploaded file to Cloudinary:", response.data.secure_url);
      return response.data.secure_url;
    } catch (error) {
      console.error("Error uploading file to Cloudinary:", error);
      return null;
    }
  };

  
  return (

    <div>

      {isSubmitting && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">



          <div className="text-white">Submitting...<span className="loading loading-bars loading-lg"></span>
            <span className="loading loading-bars loading-lg"></span>
            <span className="loading loading-bars loading-lg"></span>
            <span className="loading loading-bars loading-lg"></span></div>
          {/* Add your loader/spinner here */}
        </div>
      )}


      <form className="bg-white lg:px-96 lg:py-10" onSubmit={handleSubmit}>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className=" font-semibold leading-7 text-2xl text-gray-900">Create New Course</h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, aperiam!</p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label htmlFor="coursename" className="block text-sm font-medium leading-6 text-gray-900">
                  Course Name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="coursename"
                    onChange={(e) => setCourseName(e.target.value)}
                    value={courseName}
                    id="coursename"
                    autoComplete="coursename"
                    className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Thermodynamics/Fluid mechanics"
                  />
                </div>
              </div>
              <div className="sm:col-span-4">
                <label htmlFor="instructorusername" className="block text-sm font-medium leading-6 text-gray-900">
                  Instructor User Name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="instructorusername"
                    onChange={(e) => setInstructorUsername(e.target.value)}
                    value={instructorUsername}
                    id="instructorusername"
                    autoComplete="instructorusername"
                    className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="@alokmehta"
                  />
                </div>
              </div>
              <div className="sm:col-span-4">
                <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
                  Price
                </label>
                <div className="mt-2">
                  <input
                    type="number"
                    name="price"
                    onChange={(e) => setPrice(parseFloat(e.target.value))}
                    value={price}
                    id="price"
                    autoComplete="price"
                    className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="$234"
                  />
                </div>
              </div>
              <div className="sm:col-span-4">
                <label htmlFor="courseCategory" className="block text-sm font-medium leading-6 text-gray-900">
                  Course Category
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="courseCategory"
                    onChange={(e) => setCourseCategory(e.target.value)}
                    value={courseCategory}
                    id="courseCategory"
                    autoComplete="courseCategory"
                    className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Maths/English"
                  />
                </div>
              </div>
              <div className="col-span-full">
                <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                  Description
                </label>
                <div className="mt-2">
                  <textarea
                    id="description"
                    name="description"
                    rows={3}
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Write a few sentences about the course."
                  />
                </div>
              </div>
              <div className="sm:col-span-4">
                <button type="button" onClick={handleAddModule} className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  Add Module
                </button>
              </div>
              {modules.map((module, index) => (
                <React.Fragment key={index}>
                  <div className="sm:col-span-4">
                    <label htmlFor={`video_title_${index}`} className="block text-sm font-medium leading-6 text-gray-900">
                      Video Title
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="video_title"
                        id={`video_title_${index}`}
                        onChange={(e) => handleInputChange(e, index)}
                        value={module.video_title}
                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="Lecture-01"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-4">
                    <label htmlFor={`video_description_${index}`} className="block text-sm font-medium leading-6 text-gray-900">
                      Video Description
                    </label>
                    <div className="mt-2">
                      <textarea
                        id={`video_description_${index}`}
                        name="video_description"
                        rows={3}
                        onChange={(e) => handleInputChange(e, index)}
                        value={module.video_description}
                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="Write a few sentences about the video."
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-4">
                    <label htmlFor={`video_file_${index}`} className="block text-sm font-medium leading-6 text-gray-900">
                      Video File
                    </label>
                    <div className="mt-2">
                      <input
                        type="file"
                        name="video_file"
                        id={`video_file_${index}`}
                        onChange={(e) => handleInputChange(e, index)}
                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-4">
                    <label htmlFor={`note_file_${index}`} className="block text-sm font-medium leading-6 text-gray-900">
                      Note File
                    </label>
                    <div className="mt-2">
                      <input
                        type="file"
                        name="note_file"
                        id={`note_file_${index}`}
                        onChange={(e) => handleInputChange(e, index)}
                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-4">
                    <button type="button" onClick={() => handleRemoveModule(index)} className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">
                      Remove Module
                    </button>
                  </div>
                </React.Fragment>
              ))}
            </div>
            <div className="mt-6 flex items-center justify-end gap-x-6">
              <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
