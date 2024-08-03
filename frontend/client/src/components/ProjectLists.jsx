/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getListProjects } from '../actions/proejctActions';
import { Link } from 'react-router-dom';

const ProjectLists = () => {
  const dispatch = useDispatch();

  const projectList = useSelector(state => state.projectLists);

  // Ensure projects is initialized as an empty array if undefined
  const { projects = [] } = projectList;

  const [expanded, setExpanded] = useState({});
  const [popoverVisible, setPopoverVisible] = useState({});

  useEffect(() => {
    dispatch(getListProjects());
  }, [dispatch]);



  const handleMouseEnter = (id) => {
    setPopoverVisible(prevState => ({
      ...prevState,
      [id]: true
    }));
  };

  const handleMouseLeave = (id) => {
    setPopoverVisible(prevState => ({
      ...prevState,
      [id]: false
    }));
  };

  return (
    <div className='p-5'>
      <div className='flex justify-center'>
        <h2 className="text-5xl font-bold tracking-tight text-gray-900 dark:text-white mr-4 mt-2 mb-8">Projects Listed So far..</h2>
        
      </div>

      <div className='flex flex-wrap gap-4'>
        {projects.map((project) => {
          const isExpanded = expanded[project.id];
          const description = isExpanded ? project.description : `${project.description.substring(0, 20)}...`;
          const isPopoverVisible = popoverVisible[project.id];

          return (
            <div
              className="max-w-sm w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              key={project.id}
            >
              <img className="rounded-t-lg w-full" src={project.thumbnail} alt="" />
              <div className="p-5">
                <div className='flex justify-between'>
                <Link to="#">
                  <h5 className=" text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{project.title}</h5>
                </Link>
                </div>
                <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 mb-4 rounded-full dark:bg-indigo-900 dark:text-indigo-300 mb-2">{project.category}</span>
                
                <p className='text-lg'>{description} <span className='text-blue-600 cursor-pointer' onMouseEnter={() => handleMouseEnter(project.id)}
              onMouseLeave={() => handleMouseLeave(project.id)}>Read More</span></p>

                <div
                  className={`absolute z-10 ${isPopoverVisible ? 'visible opacity-100' : 'invisible opacity-0'} inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800`}
                >
                  <div className="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
                    <h3 className="font-semibold text-gray-900 dark:text-white">{project.description}</h3>
                  </div>
                </div>

                <div className='flex mt-3'>
                  <Link to={`/detail/${project.id}`}>
                    <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 mr-3">
                      View
                    </button>
                  </Link>
                  <Link to={project.github_url} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    GitHub Link
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProjectLists;
