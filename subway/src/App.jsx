import './App.css'
import axios from "axios";
import { useEffect, useState } from 'react';

function App() {
  const [subway, setSubway] = useState([]);
  const apiKey = import.meta.env.VITE_SUBWAY_API_KEY;
  const station = '문래';
  const url = `http://swopenapi.seoul.go.kr/api/subway/${apiKey}/json/realtimeStationArrival/1/5/${station}`
  useEffect(() => {
    const fetchSubway = 
      async () => {
        try {
          const response = await fetch(url);
          const data = await response.json();
          console.log(data.realtimeArrivalList[0], 'subwayId');
          // console.log(data.realtimeArrivalList[0].subwayNm, '지하철 호선명'); null
          console.log(data.realtimeArrivalList[0].trainLineNm, '방면');
          console.log(data.realtimeArrivalList[0].updnLine === '1' ? '하행/외선' : '상행/내선', '상하행');
          console.log(data.realtimeArrivalList[0].lstcarAt === '1' ? '막차' : '막차 아님', '막차여부');
          console.log(data.realtimeArrivalList[0].arvlMsg2, '도착 마은 시간');
          // subwayId === '1001' && '1호선'
          // subwayId === '1002' && '2호선'
          // subwayId === '1003' && '3호선'
          // subwayId === '1004' && '4호선'
          // subwayId === '1005' && '5호선'
          // subwayId === '1006' && '6호선'
          // subwayId === '1007' && '7호선'
          // subwayId === '1008' && '8호선'
          // subwayId === '1009' && '9호선'
          // subwayId === '1032' && 'GTX-A'
          // subwayId === '1063' && '경의중앙선'
          // subwayId === '1065' && '공항철도'
          // subwayId === '1067' && '경춘선'
          // subwayId === '1077' && '신분당선'
          // subwayId === '1075' && '수인분당선'
          // subwayId === '1081' && '경강선'
          // subwayId === '1092' && '우이신설선'
          // subwayId === '1093' && '서해선'
          // subwayId === '1094' && '신림선'
        } catch(err){
          console.log('error');
        }
    }
    fetchSubway();
  }, []);
  const openList = (e) => {
    var buttonEl = e.target;
    var innerBox = buttonEl.parentElement;
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
