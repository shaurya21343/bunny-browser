import React from 'react'

const topBar = () => {
  return (
   <div
        className='bg-gray-700 h-8 w-screen flex items-center justify-between'
        style={{ WebkitAppRegion: 'drag' }}
      >
        <span
          className="text-white font-semibold pl-4 select-none"
          style={{ WebkitAppRegion: 'no-drag' }}
          onClick={() => window.location.reload()}
        >
          Bunny
        </span>
        <div className="flex items-center space-x-2 pr-2">
          <button
            className="w-4 h-4 bg-yellow-400 rounded-full hover:bg-yellow-500 focus:outline-none"
            onClick={() => {window.electron.ipcRenderer.send('minimize')}}
            title="Minimize"
            style={{ WebkitAppRegion: 'no-drag' }}
          />
          <button
            className="w-4 h-4 bg-red-500 rounded-full hover:bg-red-600 focus:outline-none"
            onClick={() => window.electron.ipcRenderer.send('close')}
            title="Close"
            style={{ WebkitAppRegion: 'no-drag' }}
          />
        </div>
        </div>
  )
}

export default topBar