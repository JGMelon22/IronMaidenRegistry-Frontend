import { useState } from 'react'
import axios from 'axios'
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'

import logoBass from './assets/bass-svgrepo-com.svg'
import logoDrum from './assets/music-drums-svgrepo-com.svg'
import logoGuitar from './assets/guitar-svgrepo-com.svg'
import logoKeyboard from './assets/keyboard-svgrepo-com.svg'
import logoVocals from './assets/voice-tools-svgrepo-com.svg'
import logoJoyHappiness from './assets/happy-svgrepo-com.svg'

import './App.css'

function App() {

  const instrumentsBaseUrl = 'http://localhost:5200/api/Instruments'
  const membersBaseUrl = 'http://localhost:5200/api/Members'
  const songsBaseUrl = 'http://localhost:5200/api/Songs'

  const [dataInstrument, setDataInstrument] = useState([])
  const [dataMember, setDataMember] = useState([])
  const [dataSong, setDataSong] = useState([])

  // Modals
  const [instrumentsDetails, setInstrumentsDetails] = useState(false);
  const [songsDetails, setSongsDetails] = useState(false);

  // Modal State (open/close)
  const openCloseInstrumentsDetails = () => {
    setInstrumentsDetails(!instrumentsDetails);
  }

  const openCloseSongsDetails = () => {
    setSongsDetails(!songsDetails);
  }

  // Get Data
  const requestInstrumentsGet = async () => {
    await axios.get(instrumentsBaseUrl)
      .then(response => {
        setDataInstrument(response.dataInstrument)
      }).catch(error => {
        alert(error)
      })
  }

  const requestMembersGet = async () => {
    await axios.get(membersBaseUrl)
      .then(response => {
        setDataMember(response.dataMember)
      }).catch(error => {
        alert(error)
      })
  }

  const requestSongsGet = async () => {
    await axios.get(songsBaseUrl)
      .then(response => {
        setDataSong(response.dataSong)
      }).catch(error => {
        alert(error)
      })
  }

  return (
    <>
      <nav className='navbar navbar-expand-md bg-dark py-3' data-bs-theme='dark'>
        <div className='container'><a className='navbar-brand d-flex align-items-center' href='#'><span className='bs-icon-sm bs-icon-rounded bs-icon-primary d-flex justify-content-center align-items-center me-2 bs-icon'><svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' fill='currentColor' viewBox='0 0 16 16' className='bi bi-bezier'>
          <path fillRule='evenodd' d='M0 10.5A1.5 1.5 0 0 1 1.5 9h1A1.5 1.5 0 0 1 4 10.5v1A1.5 1.5 0 0 1 2.5 13h-1A1.5 1.5 0 0 1 0 11.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm10.5.5A1.5 1.5 0 0 1 13.5 9h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zM6 4.5A1.5 1.5 0 0 1 7.5 3h1A1.5 1.5 0 0 1 10 4.5v1A1.5 1.5 0 0 1 8.5 7h-1A1.5 1.5 0 0 1 6 5.5v-1zM7.5 4a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z'></path>
          <path d='M6 4.5H1.866a1 1 0 1 0 0 1h2.668A6.517 6.517 0 0 0 1.814 9H2.5c.123 0 .244.015.358.043a5.517 5.517 0 0 1 3.185-3.185A1.503 1.503 0 0 1 6 5.5v-1zm3.957 1.358A1.5 1.5 0 0 0 10 5.5v-1h4.134a1 1 0 1 1 0 1h-2.668a6.517 6.517 0 0 1 2.72 3.5H13.5c-.123 0-.243.015-.358.043a5.517 5.517 0 0 0-3.185-3.185z'></path>
        </svg></span><span id='title' className='text-warning-emphasis'>Iron Maiden - Registry</span></a><button data-bs-toggle='collapse' className='navbar-toggler' data-bs-target='#navcol-5'><span className='visually-hidden'>Toggle navigation</span><span className='navbar-toggler-icon'></span></button>
          <div className='collapse navbar-collapse' id='navcol-5'>
            <ul className='navbar-nav ms-auto'>
              <li className='nav-item'><a className='nav-link active' href='#'>Members</a></li>
              <li className='nav-item'><a className='nav-link' onClick={() => openCloseSongsDetails()} href='#'>Hits</a></li>
              <li className='nav-item'><a className='nav-link' onClick={() => openCloseInstrumentsDetails()} href='#'>Instruments</a></li>
            </ul>
          </div>
        </div>
      </nav>
      <div className='container py-4 py-xl-5'>
        <div className='row mb-5'>
          <div className='col-md-8 col-xl-6 text-center mx-auto'>
            <h2>Up the Iron's</h2>
            <p className='w-lg-50'>In tribute to the greatest band of all time.</p>
          </div>
        </div>
        <div className='row gy-4 row-cols-1 row-cols-md-2'>
          <div className='col'>
            <div className='d-flex flex-column flex-lg-row'>
              <div className='w-100'><img className='rounded img-fluid d-block w-100 fit-cover' style={{ height: '200px' }} src='https://upload.wikimedia.org/wikipedia/pt/e/e3/Brave_New_World_-_Iron_Maiden.jpg' /></div>
              <div className='py-4 py-lg-0 px-lg-4'>
                <h4>Brave New World</h4>
                <p>The first album I've ever heard. Since them, I can't stop loving this band! The come back from Bruce Dickson and the third Rock in Rio edition.</p>
              </div>
            </div>
          </div>
          <div className='col'>
            <div className='d-flex flex-column flex-lg-row'>
              <div className='w-100'><img className='rounded img-fluid d-block w-100 fit-cover' style={{ height: '200px' }} src='https://upload.wikimedia.org/wikipedia/pt/2/23/The_x_factor_-_iron_maiden.jpg' /></div>
              <div className='py-4 py-lg-0 px-lg-4'>
                <h4 >The X Factor</h4>
                <p>An absolutely time classic, powerful, deep and dark vocals from the master Blaze Bayley and the presence of the guitarist magician Janick Gers.</p>
              </div>
            </div>
          </div>
          <div className='col'>
            <div className='d-flex flex-column flex-lg-row'>
              <div className='w-100'><img className='rounded img-fluid d-block w-100 fit-cover' style={{ height: '200px' }} src='https://upload.wikimedia.org/wikipedia/en/3/3a/Iron_Maiden_-_Virtual_XI.jpg' /></div>
              <div className='py-4 py-lg-0 px-lg-4'>
                <h4>Virtual XI</h4>
                <p>Say what you want, but The Clansman and Futureal are a hell of great songs. The inspiration an the will to fight from Blaze's voice always give goosebumps.</p>
              </div>
            </div>
          </div>
          <div className='col'>
            <div className='d-flex flex-column flex-lg-row'>
              <div className='w-100'><img className='rounded img-fluid d-block w-100 fit-cover' style={{ height: '200px' }} src='https://upload.wikimedia.org/wikipedia/en/9/9b/Iron_Maiden_-_Somewhere_in_Time.jpg' /></div>
              <div className='py-4 py-lg-0 px-lg-4'>
                <h4>Somewhere in Time</h4>
                <p>The goat, no more and no less. Simply a time classic full of energy from Wasted Years to the contagious rhythm from the The Loneliness of the Long Distance Runner.</p>
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
              <img width='3%' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' />
            </ul>
            <p className='text-muted mb-0'>This is a fan project. All reserved rights are for:</p> <br />
            <p className='text-muted mb-0'>© 2023 - Iron Maiden - <a href='https://keanecreative.co.uk/?utm_source=ironmaiden&utm_medium=link&utm_campaign=websitelink'> Website Designed & Developed by Keane Creative Ltd.</a></p>
          </div>
        </footer>
      </div>

      { /* Instruments Details Modal */}
      <Modal isOpen={instrumentsDetails} className='modal-lg'>
        <ModalHeader className='text-center mx-auto'>
          <div>
            <p class='w-lg-50'>Meet the instruments</p>
            <p>from our heroes</p>
          </div>
        </ModalHeader>
        <ModalBody>
          <div class='container py-4 py-xl-5'>
            <div class='row row-cols-1 row-cols-md-2 row-cols-xl-3'>
              <div class='col'>
                <div class='d-flex p-3'>
                  <div class='rounded bg-light'><img src={logoBass} width='23' height='50' /></div>
                  <div class='px-2'>
                    <h5 class='mb-0 mt-1'>Bass</h5>
                  </div>
                </div>
              </div>
              <div class='col'>
                <div class='d-flex p-3'>
                  <div class='rounded bg-light'><img src={logoGuitar} width='23' height='50' /></div>
                  <div class='px-2'>
                    <h5 class='mb-0 mt-1'>Guitar</h5>
                  </div>
                </div>
              </div>
              <div class='col'>
                <div class='d-flex p-3'>
                  <div class='rounded bg-light'><img src={logoVocals} width='23' height='50' /></div>
                  <div class='px-2'>
                    <h5 class='mb-0 mt-1'>Vocals</h5>
                  </div>
                </div>
              </div>
              <div class='col'>
                <div class='d-flex p-3'>
                  <div class='rounded bg-light'><img src={logoDrum} width='23' height='50' /></div>
                  <div class='px-2'>
                    <h5 class='mb-0 mt-1'>Drum</h5>
                  </div>
                </div>
              </div>
              <div class='col'>
                <div class='d-flex p-3'>
                  <div class='rounded bg-light'><img src={logoKeyboard} width='23' height='50' /></div>
                  <div class='px-2'>
                    <h5 class='mb-0 mt-1'>Keyboard</h5>
                  </div>
                </div>
              </div>
              <div class='col'>
                <div class='d-flex p-3'>
                  <div class='rounded bg-light'><img src={logoJoyHappiness} width='23' height='50' /></div>
                  <div class='px-2'>
                    <h5 class='mb-0 mt-1'>Joy and Happiness</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <button className='btn btn-secondary m-1' onClick={() => openCloseInstrumentsDetails()}>Close</button>
        </ModalFooter>
      </Modal>

      { /* Songs Details Modal */}
      <Modal isOpen={songsDetails} className='modal-xl'>
        <ModalHeader className='text-center mx-auto'>
          <div>
            <h2>Time Classics</h2>
            <p className='w-lg-75'>Top voted from each album and era from Maiden</p>
          </div>
        </ModalHeader>
        <ModalBody className='form-group'>
          <div class='row gy-4 row-cols-2 row-cols-md-4'>
            <div class='col'>
              <div class='card border-0 shadow-none'>
                <div class='card-body text-center d-flex flex-column align-items-center p-0'><img class='rounded-circle mb-3 fit-cover' width='130' height='130' src='https://i.ytimg.com/vi/7DcVwd31uC0/maxresdefault.jpg' /></div>
              </div>
              <p class='text-muted mb-2'>Name:&nbsp;&nbsp;</p>
              <p class='text-muted mb-2'>Duration in Minutes:&nbsp;</p>
              <p class='text-muted mb-2'>Score:&nbsp;</p>
            </div>
            <div class='col'>
              <div class='card border-0 shadow-none'>
                <div class='card-body text-center d-flex flex-column align-items-center p-0'><img class='rounded-circle mb-3 fit-cover' width='130' height='130' src='https://i.ytimg.com/vi/p3Uy1YhBsvs/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&amp;rs=AOn4CLBooB-qMh8mPiPwcDBsI-gEwVXrHQ' /></div>
              </div>
              <p class='text-muted mb-2'>Name:&nbsp;&nbsp;</p>
              <p class='text-muted mb-2'>Duration in Minutes:&nbsp;</p>
              <p class='text-muted mb-2'>Score:&nbsp;</p>
            </div>
            <div class='col'>
              <div class='card border-0 shadow-none'>
                <div class='card-body text-center d-flex flex-column align-items-center p-0'><img class='rounded-circle mb-3 fit-cover' width='130' height='130' src='https://upload.wikimedia.org/wikipedia/pt/f/f7/Trooper.jpg' /></div>
              </div>
              <p class='text-muted mb-2'>Name:&nbsp;&nbsp;</p>
              <p class='text-muted mb-2'>Duration in Minutes:&nbsp;</p>
              <p class='text-muted mb-2'>Score:&nbsp;</p>
            </div>
            <div class='col'>
              <div class='card border-0 shadow-none'>
                <div class='card-body text-center d-flex flex-column align-items-center p-0'><img class='rounded-circle mb-3 fit-cover' width='130' height='130' src='https://upload.wikimedia.org/wikipedia/pt/6/64/Fear_of_the_dark_-_iron_maiden.jpg' /></div>
              </div>
              <p class='text-muted mb-2'>Name:&nbsp;&nbsp;</p>
              <p class='text-muted mb-2'>Duration in Minutes:&nbsp;</p>
              <p class='text-muted mb-2'>Score:&nbsp;</p>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <button className='btn btn-secondary m-1' onClick={() => openCloseSongsDetails()}>Close</button>
        </ModalFooter>
      </Modal >
    </>
  )
}

export default App
