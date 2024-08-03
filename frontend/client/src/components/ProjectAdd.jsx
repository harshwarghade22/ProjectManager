// import React from 'react'

import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { addProject } from "../actions/proejctActions"

const ProjectAdd = () => {

    // eslint-disable-next-line no-unused-vars
    const [thumbnail, setThumbNail] = useState(null)
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")
    const [demo, setDemo] = useState("")

    const dispatch=useDispatch()
    const navigate=useNavigate()

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

        try {
            dispatch(addProject(formData))
            navigate("/")
        } catch (error) {
            console.error(error)
        }

        clearData()    
    }


    return (
        <div className="w-2/3 mx-auto">
            <h2 className="mt-5 font-bold text-3xl">Add New Project</h2>
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
                </div>
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        type="text"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title} />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                        Description
                    </label>
                    <textarea
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="description"
                        onChange={(e) => setDescription(e.target.value)}
                        value={description} />
                </div>
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Choose Category</label>
                    <select
                        id="countries"
                        name="countries"
                        className=" w-full bg-gray-200 text-gray-700 border border-gray-300 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        onChange={(e) => setCategory(e.target.value)} value={category}>
                        <option value="Web Devlopment">Web Devlopment</option>
                        <option value="App Devlopment">App Devlopment</option>
                        <option value="Hardware">Hardware</option>
                        <option value="Cloud project">Cloud project</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Demo Link</label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        type="text"
                        onChange={(e) => setDemo(e.target.value)}
                        value={demo} />
                </div>

                <button className="w-1/3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:ring-blue-300 focus:ring-opacity-50" type="submit">
                    Add Project
                </button>
            </form>
        </div>
    )
}

export default ProjectAdd
