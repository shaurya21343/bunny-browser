import React, { useState } from 'react'

const SearchBar = () => {
    const [inputValue, setInputValue] = useState('');

    return (
        <div className='flex justify-center items-center'>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    window.electron.ipcRenderer.send('url', inputValue);
                }}
            >
                <input
                    type="text"
                    className="bg-gray-600 text-white rounded px-2 py-1 mx-2 focus:outline-none focus:ring focus:ring-blue-400 mt-3 w-[calc(100vw-100px)] h-10"
                    placeholder='Search for a link...'
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
            </form>
        </div>
    );
}

export default SearchBar