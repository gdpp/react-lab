import React, { useState } from "react";
import { Note } from "../lib/types";

type Props = {
    onSubmitData: (note: Note) => void;
  };

export const NoteForm = ({onSubmitData}: Props) => {
    const [formData, setFormData] = useState({
        title: '',
        body: ''
    });
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target

        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmitData(formData)
        setFormData({ title: '', body: '' })
    }

    return (
        <div className="p-4 md:py-3 md:px-6 flex gap-4 w-full flex-col rounded-2xl bg-slate-200">
            <h3 className="text-2xl font-bold text-slate-800">Add a note.</h3>
            <form onSubmit={handleSubmit}>
                <label className="font-bold" htmlFor="title">Title</label>
                <input required className="px-6 h-11 rounded m-2 bg-red-50" name="title" type="text" value={formData.title} onChange={handleChange} />
                <label className="font-bold" htmlFor="body">Body</label>
                <input required className="px-6 h-11 rounded m-2 bg-red-50 w-[" name="body" type="text" maxLength={130} value={formData.body} onChange={handleChange} /> 
                <button type="submit" className="inline-flex items-center justify-center h-11 px-6 font-medium tracking-wide text-white transition duration-200 bg-gray-900 rounded-lg hover:bg-gray-800 focus:shadow-outline focus:outline-none"> 
                    Add 
                </button>
                
            </form>

        </div>
    )
}
