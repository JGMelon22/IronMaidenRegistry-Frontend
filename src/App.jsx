import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  return (
    <>
      <nav className='navbar navbar-expand-md bg-dark py-3' data-bs-theme='dark'>
        <div className='container'><a className='navbar-brand d-flex align-items-center' href='#'><span className='bs-icon-sm bs-icon-rounded bs-icon-primary d-flex justify-content-center align-items-center me-2 bs-icon'><svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' fill='currentColor' viewBox='0 0 16 16' className='bi bi-bezier'>
          <path fillRule='evenodd' d='M0 10.5A1.5 1.5 0 0 1 1.5 9h1A1.5 1.5 0 0 1 4 10.5v1A1.5 1.5 0 0 1 2.5 13h-1A1.5 1.5 0 0 1 0 11.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm10.5.5A1.5 1.5 0 0 1 13.5 9h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zM6 4.5A1.5 1.5 0 0 1 7.5 3h1A1.5 1.5 0 0 1 10 4.5v1A1.5 1.5 0 0 1 8.5 7h-1A1.5 1.5 0 0 1 6 5.5v-1zM7.5 4a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z'></path>
          <path d='M6 4.5H1.866a1 1 0 1 0 0 1h2.668A6.517 6.517 0 0 0 1.814 9H2.5c.123 0 .244.015.358.043a5.517 5.517 0 0 1 3.185-3.185A1.503 1.503 0 0 1 6 5.5v-1zm3.957 1.358A1.5 1.5 0 0 0 10 5.5v-1h4.134a1 1 0 1 1 0 1h-2.668a6.517 6.517 0 0 1 2.72 3.5H13.5c-.123 0-.243.015-.358.043a5.517 5.517 0 0 0-3.185-3.185z'></path>
        </svg></span><span className='text-warning-emphasis'>Iron Maiden - Registry</span></a><button data-bs-toggle='collapse' className='navbar-toggler' data-bs-target='#navcol-5'><span className='visually-hidden'>Toggle navigation</span><span className='navbar-toggler-icon'></span></button>
          <div className='collapse navbar-collapse' id='navcol-5'>
            <ul className='navbar-nav ms-auto'>
              <li className='nav-item'><a className='nav-link active' href='#'>Members</a></li>
              <li className='nav-item'><a className='nav-link' href='#'>Hits</a></li>
              <li className='nav-item'><a className='nav-link' href='#'>Instruments</a></li>
            </ul>
          </div>
        </div>
      </nav>
      <div className='container py-4 py-xl-5'>
        <div className='row mb-5'>
          <div className='col-md-8 col-xl-6 text-center mx-auto'>
            <h2>Heading</h2>
            <p className='w-lg-50'>Curae hendrerit donec commodo hendrerit egestas tempus, turpis facilisis nostra nunc. Vestibulum dui eget ultrices.</p>
          </div>
        </div>
        <div className='row gy-4 row-cols-1 row-cols-md-2'>
          <div className='col'>
            <div className='d-flex flex-column flex-lg-row'>
              <div className='w-100'><img className='rounded img-fluid d-block w-100 fit-cover' style={{ height: '200px' }} src='https://cdn.bootstrapstudio.io/placeholders/1400x800.png' /></div>
              <div className='py-4 py-lg-0 px-lg-4'>
                <h4>Lorem libero donec</h4>
                <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p>
              </div>
            </div>
          </div>
          <div className='col'>
            <div className='d-flex flex-column flex-lg-row'>
              <div className='w-100'><img className='rounded img-fluid d-block w-100 fit-cover' style={{ height: '200px' }} src='https://cdn.bootstrapstudio.io/placeholders/1400x800.png' /></div>
              <div className='py-4 py-lg-0 px-lg-4'>
                <h4>Lorem libero donec</h4>
                <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p>
              </div>
            </div>
          </div>
          <div className='col'>
            <div className='d-flex flex-column flex-lg-row'>
              <div className='w-100'><img className='rounded img-fluid d-block w-100 fit-cover' style={{ height: '200px' }} src='https://cdn.bootstrapstudio.io/placeholders/1400x800.png' /></div>
              <div className='py-4 py-lg-0 px-lg-4'>
                <h4>Lorem libero donec</h4>
                <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p>
              </div>
            </div>
          </div>
          <div className='col'>
            <div className='d-flex flex-column flex-lg-row'>
              <div className='w-100'><img className='rounded img-fluid d-block w-100 fit-cover' style={{ height: '200px' }} src='https://cdn.bootstrapstudio.io/placeholders/1400x800.png' /></div>
              <div className='py-4 py-lg-0 px-lg-4'>
                <h4>Lorem libero donec</h4>
                <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p>
              </div>
            </div>
          </div>
        </div>
        <footer className='text-center fixed-bottom'>
          <div className='container text-white py-4 py-lg-5'>
            <ul className='list-inline'>
              <li className='list-inline-item me-4'><a className='link-light' href='https://github.com/JGMelon22/IronMaidenRegistry-Frontend'>Front-end source code</a></li>
              <li className='list-inline-item me-4'><a className='link-light' href='https://github.com/JGMelon22/IronMaidenRegistryApi'>Back-end source code</a></li>
            </ul>
            <ul className='list-inline'>
              <img width='3%' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
            </ul>
            <p className='text-muted mb-0'>This is a fan project. All reserved rights are for:</p> <br />
            <p className='text-muted mb-0'>© 2023 - Iron Maiden - <a href='https://keanecreative.co.uk/?utm_source=ironmaiden&utm_medium=link&utm_campaign=websitelink'> Website Designed & Developed by Keane Creative Ltd.</a></p>
          </div>
        </footer>
      </div>
    </>
  )
}

export default App
