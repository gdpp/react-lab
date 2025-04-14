import { useState } from "react";

type Props = {
    addColor: (color: string) => void;
}

export const ColorInput = ({ addColor }: Props) => {
    const [inputValue, setInputValue] = useState("");
    
    const handleAddColor = () => {
        if(inputValue){
            addColor(`#${inputValue.trim()}`);
            setInputValue("");
        }
    }

    const handleAddRandomColor = () => {
        const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        addColor(randomColor);
    }

    return (
        <div className="p-4 md:py-3 md:px-6 flex gap-12 w-full flex-col md:flex-row items-center justify-center md:justify-between bg-slate-100">
            <p className="text-lg md:text-xl text-gray-400 w-full text-center md:text-left">Press the spacebar to generate random colors!</p>
            <div className="flex gap-4 flex-row items-center justify-end w-full">
                <input className="p-2 w-full md:w-36 border-2 border-slate-300 bg-white font-bold rounded" type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                <button className="inline-flex items-center justify-center h-11 px-6 font-medium tracking-wide text-white transition duration-200 bg-gray-900 rounded-lg hover:bg-gray-800 focus:shadow-outline focus:outline-none"  onClick={handleAddColor}> Add </button>
                <button onClick={handleAddRandomColor} className="relative inline-flex items-center justify-center px-6 h-11 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group">
                    <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-400 rounded-full blur-md ease"></span>
                    <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                        <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-400 rounded-full blur-md"></span>
                        <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-400 rounded-full blur-md"></span>
                    </span>
                    <span className="relative text-white">Random</span>
                </button> 
            </div>
        </div>
    )
}
