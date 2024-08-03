/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { detailProject, updateProject } from "../actions/proejctActions"

const UpdateProject = () => {
    const [thumbnail, setThumbNail] = useState(null)
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")
    const [demo, setDemo] = useState("")
    const { id } = useParams()
    const dispatch = useDispatch()
    const navigate=useNavigate()

    const projectDetail = useSelector(state => state.detailPoject)
    const { project, loading, error, success } = projectDetail

    const projectUpdateData=useSelector(state => state.updateProject)
    const { project: updatedProject , loading: updatedLoading, success: updatedSuccess, error: updatedError } = projectUpdateData



    useEffect(() => {
        dispatch(detailProject(id))
        
        setThumbNail(project.thumbnail)
        setTitle(project.title)
        setDescription(project.description)
        setCategory(project.category)
        setDemo(project.github_url)
        
    }, [dispatch, id])

    // console.log(project)
    const clearData=()=>{
        setTitle("");
        setDescription("");
        setCategory("");
        setDemo("");
        setThumbNail(null);
    }


    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('thumbnail', thumbnail)
        formData.append('title', title)
        formData.append('description', description)
        formData.append('category', category)
        formData.append('demo', demo)
        dispatch(updateProject(id, formData))
        clearData()
        navigate("/")
        
    }

    return (
        <div className="w-2/3 mx-auto">
            <h2 className="mt-5 font-bold text-3xl">Update Project</h2>
            <form className="mt-5" onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="thumbnail">
                        Thumbnail
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="thumbnail"
                        type="file"
                        onChange={(e) => setThumbNail(e.target.files[0])}
                    />
                    <img src={thumbnail} alt="" className=""/>
                </div>
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        type="text"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                        Description
                    </label>
                    <textarea
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="description"
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Choose Category</label>
                    <select
                        id="category"
                        name="category"
                        className="w-full bg-gray-200 text-gray-700 border border-gray-300 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        onChange={(e) => setCategory(e.target.value)}
                        value={category}
                    >
                        <option value={category}>{category}</option>
                        <option value="Web Development">Web Development</option>
                        <option value="App Development">App Development</option>
                        <option value="Hardware">Hardware</option>
                        <option value="Cloud Project">Cloud Project</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Demo Link</label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        type="text"
                        onChange={(e) => setDemo(e.target.value)}
                        value={demo}
                    />
                </div>
                <button className="w-1/3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:ring-blue-300 focus:ring-opacity-50" type="submit">
                    Update Project
                </button>
            </form>
        </div>
    )
}

export default UpdateProject
