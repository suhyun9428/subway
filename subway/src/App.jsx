import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const openList = (e) => {
    var buttonEl = e.target;
    var innerBox = buttonEl.parentElement;
    var listBox = buttonEl.parentElement.children[1];
    if(!innerBox.classList.contains('box__select-list--active')){
      innerBox.classList.add('box__select-list--active')
    }else{
      innerBox.classList.remove('box__select-list--active')
    }
  }
  return (
    <>
      <h1>실시간 도착 정보</h1>
      <div className='box__select-wrap'>
        <div className='box__select-inner'>
          <p className='text__select-title'>출발역</p>
          <div className='box__select-list'>
            <button type='button' className='button__subway' onClick={openList}>
              <span className='text__line'>2</span>선릉
            </button>
            <ul className='list__stations'>
              <li className='list-item'>
                <button type='button' className='button__station'>
                  <span className='text__line'>2</span>선릉
                </button>
              </li>
              <li className='list-item'>
                <button type='button' className='button__station'>
                  <span className='text__line'>2</span>강남
                </button>
              </li>
              <li className='list-item'>
                <button type='button' className='button__station'>
                  <span className='text__line'>2</span>역삼
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className='box__select-inner'>
          <p className='text__select-title'>도착역</p>
          <div className='box__select-list'>
            <button type='button' className='button__subway' onClick={openList}>
              <span className='text__line'>2</span>신림
            </button>
            <ul className='list__stations'>
              <li className='list-item'>
                <button type='button' className='button__station'>
                  <span className='text__line'>2</span>신림
                </button>
              </li>
              <li className='list-item'>
                <button type='button' className='button__station'>
                  <span className='text__line'>2</span>구로디지털단지
                </button>
              </li>
              <li className='list-item'>
                <button type='button' className='button__station'>
                  <span className='text__line'>2</span>신도림
                </button>
              </li>
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
          <div className='box__congestion' style={{'background':'var(--toomuch)'}}>1</div>
          <div className='box__congestion' style={{'background':'var(--alot)'}}>2</div>
          <div className='box__congestion' style={{'background':'var(--normal)'}}>3</div>
          <div className='box__congestion' style={{'background':'var(--normal)'}}>4</div>
          <div className='box__congestion' style={{'background':'var(--peace)'}}>5</div>
          <div className='box__congestion' style={{'background':'var(--peace)'}}>6</div>
          <div className='box__congestion' style={{'background':'var(--peace)'}}>7</div>
          <div className='box__congestion' style={{'background':'var(--normal)'}}>8</div>
          <div className='box__congestion' style={{'background':'var(--peace)'}}>9</div>
          <div className='box__congestion' style={{'background':'var(--toomuch)'}}>10</div>
        </div>
      </div>
    </>
  )
}

export default App
