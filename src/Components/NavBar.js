import React from 'react';

export default function(){
  return(
    <nav className="navbar">
      <ul className="navbar-nav">

        <li className="logo">
          <a href="#" className="nav-link">
            <span className="link-text logo-text top-logo">Nic<br/>Leask</span>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fad"
              data-icon="angle-double-right"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x"
            >
              <g className="fa-group">
                <path
                  fill="currentColor"
                  d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
                  className="fa-secondary"
                ></path>
                <path
                  fill="currentColor"
                  d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
                  className="fa-secondary"
                ></path>
              </g>
            </svg>
          </a>
        </li>

        <li className="nav-item">
          <a href="#" className="nav-link">
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px">
              <path className="fa-primary" d="M19,11v9h-5v-6h-4v6H5v-9H3.6L12,3.4l8.4,7.6H19z" opacity=".3"/>
              <path className="fa-secondary" d="M20,21h-7v-6h-2v6H4v-9H1l11-9.9L23,12h-3V21z M15,19h3v-8.8l-6-5.4l-6,5.4V19h3v-6h6V19z"/>
            </svg>
            Home
          </a>
        </li>

        <li className="nav-item">
          <a href="#" className="nav-link">
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px">
              <path className="fa-primary" d="M20,11c0-4.4-3.6-8-8-8s-8,3.6-8,8s3.6,8,8,8c0.3,0,0.7,0,1-0.1v2.3c2.1-1.4,6-4.4,6.8-8.6C19.9,12.1,20,11.6,20,11z" opacity=".3"/>
              <path className="fa-secondary" d="M12,23.1V20c-5,0-9-4-9-9c0-5,4-9,9-9c5,0,9,4,9,9c0,0.6-0.1,1.3-0.2,1.9c-0.9,4.5-4.9,7.7-7.3,9.2L12,23.1z M14,17.8v1.5 c2-1.5,4.2-3.9,4.8-6.8c0.1-0.5,0.2-1,0.2-1.5c0-3.9-3.1-7-7-7c-3.9,0-7,3.1-7,7s3.1,7,7,7c0.3,0,0.6,0,0.9-0.1L14,17.8z"/></svg>
            <span className="link-text">About</span>
          </a>
        </li>

        <li className="nav-item">
          <a href="#" className="nav-link">
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px">
              <path className='fa-primary' d="M20,19H4c-0.6,0-1-0.4-1-1V6c0-0.6,0.4-1,1-1h16c0.6,0,1,0.4,1,1v12C21,18.6,20.6,19,20,19z" opacity=".3"/>
              <path className='fa-secondary' d="M9 3H15V5H9z"/>
              <path className='fa-secondary' d="M20,20H4c-1.1,0-2-0.9-2-2V6c0-1.1,0.9-2,2-2h16c1.1,0,2,0.9,2,2v12C22,19.1,21.1,20,20,20z M20,18v1V18L20,18z M4,6v12h16 l0-12H4z"/>
              <path className='fa-secondary' d="M12 10A1 1 0 1 0 12 12A1 1 0 1 0 12 10Z"/>
              <path className='fa-secondary' d="M20,16H4c-1.1,0-2-0.9-2-2v-4h2v4h16v-4h2v4C22,15.1,21.1,16,20,16z"/></svg>
            <span className="link-text">Projects</span>
          </a>
        </li>

        <li className="nav-item">
          <a href="#" className="nav-link">
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px">
              <path className="fa-primary" d="M19,20c0,0.6-0.4,1-1,1H6c-0.6,0-1-0.4-1-1V4c0-0.6,0.4-1,1-1h7.6L19,8.4V20z" opacity=".3"/>
              <path className="fa-primary" d="M8 12H16V14H8zM8 16H16V18H8z"/>
              <path className="fa-secondary" d="M18,22H6c-1.1,0-2-0.9-2-2V4c0-1.1,0.9-2,2-2h8l6,6v12C20,21.1,19.1,22,18,22z M6,4v16h12V8.8L13.2,4H6z"/>
              <path className="fa-primary" d="M18.5 9L13 9 13 3.5z"/></svg>
            <span className="link-text">Resume</span>
          </a>
        </li>

        <li className="nav-item">
          <a href="#" className="nav-link">
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px">
              <path className="fa-primary" d="M7,5C4.8,5,3,6.8,3,9v9c0,0.6,0.4,1,1,1h16c0.6,0,1-0.4,1-1V9c0-2.2-1.8-4-4-4H7z" opacity=".3"/>
              <path className="fa-secondary" d="M20,20H4c-1.1,0-2-0.9-2-2V9c0-2.8,2.2-5,5-5h10c2.8,0,5,2.2,5,5v9C22,19.1,21.1,20,20,20z M7,6C5.3,6,4,7.3,4,9v9h16V9 c0-1.7-1.3-3-3-3H7z"/>
              <path className="fa-secondary" d="M12,19h-2V9c0-1.7-1.3-3-3-3V4c2.8,0,5,2.2,5,5V19z"/>
              <path className="fa-primary" d="M6 9H8V11H6zM18 13L16 13 16 11 11 11 11 9 18 9z"/>
            </svg>
            Contact
          </a>
        </li>
        <li></li>
        {/*<li className="nav-item" id="themeButton">
          <a href="#" className="nav-link">
             <svg
              className="theme-icon"
              id="lightIcon"
              aria-hidden="true"
              focusable="false"
              data-prefix="fad"
              data-icon="moon-stars"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="svg-inline--fa fa-moon-stars fa-w-16 fa-7x"
              >
              <g className="fa-group">
              <path
              fill="currentColor"
              d="M320 32L304 0l-16 32-32 16 32 16 16 32 16-32 32-16zm138.7 149.3L432 128l-26.7 53.3L352 208l53.3 26.7L432 288l26.7-53.3L512 208z"
              className="fa-secondary"
                ></path>
                <path
                  fill="currentColor"
                  d="M332.2 426.4c8.1-1.6 13.9 8 8.6 14.5a191.18 191.18 0 0 1-149 71.1C85.8 512 0 426 0 320c0-120 108.7-210.6 227-188.8 8.2 1.6 10.1 12.6 2.8 16.7a150.3 150.3 0 0 0-76.1 130.8c0 94 85.4 165.4 178.5 147.7z"
                  className="fa-primary"
                ></path>
              </g>
            </svg> 
            <svg
              className="theme-icon"
              id="solarIcon"
              aria-hidden="true"
              focusable="false"
              data-prefix="fad"
              data-icon="sun"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="svg-inline--fa fa-sun fa-w-16 fa-7x"
            >
              <g className="fa-group">
                <path
                  fill="currentColor"
                  d="M502.42 240.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.41-94.8a17.31 17.31 0 0 0-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4a17.31 17.31 0 0 0 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.41-33.5 47.3 94.7a17.31 17.31 0 0 0 31 0l47.31-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3a17.33 17.33 0 0 0 .2-31.1zm-155.9 106c-49.91 49.9-131.11 49.9-181 0a128.13 128.13 0 0 1 0-181c49.9-49.9 131.1-49.9 181 0a128.13 128.13 0 0 1 0 181z"
                  className="fa-secondary"
                ></path>
                <path
                  fill="currentColor"
                  d="M352 256a96 96 0 1 1-96-96 96.15 96.15 0 0 1 96 96z"
                  className="fa-primary"
                ></path>
              </g>
            </svg>
            <span className="link-text">Dark-Light</span>
          </a>
        </li>*/}
      </ul>
    </nav>
  )
}