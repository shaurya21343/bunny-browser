import React from 'react'


const HyperLinkGroup = () => {
return (
    <div className="flex">
        <a href="#" className="text-white m-5 hover:underline rounded-4xl flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" viewBox="0 0 24 24" className="mr-2">
                <path d="M23.498 6.186a2.994 2.994 0 0 0-2.107-2.117C19.204 3.5 12 3.5 12 3.5s-7.204 0-9.391.569A2.994 2.994 0 0 0 .502 6.186C0 8.38 0 12 0 12s0 3.62.502 5.814a2.994 2.994 0 0 0 2.107 2.117C4.796 20.5 12 20.5 12 20.5s7.204 0 9.391-.569a2.994 2.994 0 0 0 2.107-2.117C24 15.62 24 12 24 12s0-3.62-.502-5.814zM9.545 16.02V7.98l6.545 4.02-6.545 4.02z"/>
            </svg>
        </a>
        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="text-white m-5 hover:underline rounded-4xl flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" viewBox="0 0 24 24" className="mr-2">
                <path d="M21.35 11.1H12.18v2.92h5.29c-.23 1.23-1.39 3.6-5.29 3.6-3.18 0-5.78-2.63-5.78-5.86s2.6-5.86 5.78-5.86c1.81 0 3.03.77 3.73 1.43l2.55-2.48C17.41 3.98 15.04 3 12.18 3 6.65 3 2.18 7.48 2.18 12s4.47 9 10 9c5.75 0 9.55-4.03 9.55-9.7 0-.65-.07-1.14-.18-1.6z"/>
            </svg>
        </a>
        <a href="mailto:example@example.com" className="text-white m-5 hover:underline rounded-4xl flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" viewBox="0 0 24 24" className="mr-2">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zm0 12H4V8.99l8 6.99 8-6.99V18z"/>
            </svg>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white m-5 hover:underline rounded-4xl flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" viewBox="0 0 24 24" className="mr-2">
                <path d="M22.46 5.924c-.793.352-1.645.59-2.54.698a4.48 4.48 0 0 0 1.963-2.475 8.94 8.94 0 0 1-2.828 1.082 4.48 4.48 0 0 0-7.635 4.086A12.72 12.72 0 0 1 3.11 4.86a4.48 4.48 0 0 0 1.388 5.976 4.44 4.44 0 0 1-2.03-.561v.057a4.48 4.48 0 0 0 3.593 4.393 4.5 4.5 0 0 1-2.025.077 4.48 4.48 0 0 0 4.184 3.114A8.98 8.98 0 0 1 2 19.54a12.67 12.67 0 0 0 6.88 2.017c8.26 0 12.78-6.84 12.78-12.78 0-.195-.004-.39-.013-.583A9.22 9.22 0 0 0 24 4.59a8.93 8.93 0 0 1-2.54.697z"/>
            </svg>
        </a>
    <a href="/settings" className="text-white m-5 hover:underline rounded-4xl flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" viewBox="0 0 24 24" className="mr-2">
            <path d="M19.14,12.94a7.07,7.07,0,0,0,.05-1,7.07,7.07,0,0,0-.05-1l2.11-1.65a.5.5,0,0,0,.12-.63l-2-3.46a.5.5,0,0,0-.6-.22l-2.49,1a7,7,0,0,0-1.73-1l-.38-2.65A.5.5,0,0,0,13,2H11a.5.5,0,0,0-.5.42l-.38,2.65a7,7,0,0,0-1.73,1l-2.49-1a.5.5,0,0,0-.6.22l-2,3.46a.5.5,0,0,0,.12.63l2.11,1.65a7.07,7.07,0,0,0-.05,1,7.07,7.07,0,0,0,.05,1L2.86,14.59a.5.5,0,0,0-.12.63l2,3.46a.5.5,0,0,0,.6.22l2.49-1a7,7,0,0,0,1.73,1l.38,2.65A.5.5,0,0,0,11,22h2a.5.5,0,0,0,.5-.42l.38-2.65a7,7,0,0,0,1.73-1l2.49,1a.5.5,0,0,0,.6-.22l2-3.46a.5.5,0,0,0-.12-.63ZM12,15.5A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/>
        </svg>
    </a>
    </div>
)
}

export default HyperLinkGroup