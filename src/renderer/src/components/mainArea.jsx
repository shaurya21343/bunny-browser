import React from 'react'
import HyperLinkGroup from './hyperLinkGrout'

const MainArea = () => {
  const [url, setUrl] = React.useState(undefined)
  const [input, setInput] = React.useState('')
   const ChangeURL= () => {
    
    let newUrl = input.trim();
    if (newUrl && !/^https?:\/\//i.test(newUrl)) {
      newUrl = 'https://' + newUrl;
    }
    if (newUrl) {
      setUrl(newUrl);
      setInput('');
      console.log('URL changed to:', newUrl);
    }
  }
  window.electron.ipcRenderer.on('url', (event, newUrl) => {
    if (newUrl && !/^https?:\/\//i.test(newUrl)) {
      newUrl = 'https://' + newUrl;
    }
    setUrl(newUrl);
  })
  return (
    <div className='gradient p-4 rounded m-4 h-[87%] flex justify-center items-center shadow-lg overflow-y-auto w-[calc(100vw-)]'>
      { url && (<webview
        key={url}
        src={url}
        style={{flex:1 ,height: '100%', width: '100%'}}
        allowpopups="true"
      />)}
      {
        !url && <div>
          <form onSubmit={(e) => { e.preventDefault(); ChangeURL(); }}>
            <input type="text" className="p-5 rounded-4xl w-96  bg-gray-900 text-white outline-none" placeholder="Enter your URL here..."
            onChange={(e) => setInput(e.target.value)} value={input} autoFocus
            />
            <button className="bg-blue-500 text-white p-2 rounded-4xl ml-2 h-15 w-15">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
                </svg>
            </button>
          </form>
          <HyperLinkGroup />
        </div>
      }

      </div>

  )
}

export default MainArea