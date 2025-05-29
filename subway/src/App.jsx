import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const handleStation = () => {
    return(
      console.log('hi')
    )
  }
  return (
    <>
      <h1>실시간 도착 정보</h1>
      <div className='box__select-wrap'>
        <div className='box__select-inner'>
          <p className='text__select-title'>출발역</p>
          <div className='box__select-list'>
            <button type='button' className='button__subway' onClick={handleStation}>
              <span className='text__line'>2</span>선릉
            </button>
            <ul className='list__stations'>
              <li className='list-item'><span className='text__line'>2</span>선릉</li>
              <li className='list-item'><span className='text__line'>2</span>강남</li>
              <li className='list-item'><span className='text__line'>2</span>역삼</li>
            </ul>
          </div>
        </div>
        <div className='box__select-inner'>
          <p className='text__select-title'>도착역</p>
          <div className='box__select-list'>
            <button type='button' className='button__subway' onClick={handleStation}>
              <span className='text__line'>2</span>신림
            </button>
            <ul className='list__stations'>
              <li className='list-item'><span className='text__line'>2</span>신림</li>
              <li className='list-item'><span className='text__line'>2</span>구로디지털단지</li>
              <li className='list-item'><span className='text__line'>2</span>신도림</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='box__arrival-info'>
        <p><span className='text__line'>2</span> 내선</p>
        <p className='text__side'>구로디지털단지 방면</p>
        <p className='text__time'><span>00:45</span> 남음</p>
      </div>
      <div className='box__congestion-wrap'>
        <p className='text__congestion-title'>혼잡도</p>
        <div className="box__congestion-inner">
          <div className='box__congestion'>1</div>
          <div className='box__congestion'>2</div>
          <div className='box__congestion'>3</div>
          <div className='box__congestion'>4</div>
          <div className='box__congestion'>5</div>
          <div className='box__congestion'>6</div>
          <div className='box__congestion'>7</div>
          <div className='box__congestion'>8</div>
          <div className='box__congestion'>9</div>
          <div className='box__congestion'>10</div>
        </div>
      </div>
    </>
  )
}

export default App
