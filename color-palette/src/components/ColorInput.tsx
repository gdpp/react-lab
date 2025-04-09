import { useState } from "react";

type Props = {
    addColor: (color: string) => void;
}

export const ColorInput = ({ addColor }: Props) => {
    const [inputValue, setInputValue] = useState("");
    
    const handleAddColor = () => {
        if(inputValue){
            addColor(inputValue.trim());
            setInputValue("");
        }
    }

    // const handleAddRandomColor = () => {
    //     const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    //     addColor(randomColor);
    // }

    return (
        <div className="flex gap-2 w-full items-center justify-center lg:justify-start">
            <input className="w-[120px]" type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <button className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 bg-gray-900 rounded-lg hover:bg-gray-800 focus:shadow-outline focus:outline-none"  onClick={handleAddColor}> Add </button>
            {/* <button onClick={handleAddRandomColor}>Random</button>*/}
            <button className="relative inline-flex items-center justify-center inline-block p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group">
                <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
                <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                    <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
                    <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
                </span>
                <span className="relative text-white">Random</span>
            </button>
        </div>
    )
}
