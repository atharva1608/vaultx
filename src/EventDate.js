import React, {useState} from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import './App.css';
import moment from 'moment';
import {Link} from 'react-router-dom';
function EventDate() {
  const [date, setDate] = useState(new Date());

  return (
    <div className='app'>
      <div className='calendar-container'>
        <Calendar onChange={setDate} value={date} />
        <p className='text-center'>
        <p>Today, <b style={{"fontWeight":"normal"}}>{moment(date).format('MMMM D')}</b></p>
      </p>
      <div style={{"display":"flex","marginTop":"-10px"}}>
          <img className='per' src="https://tse2.mm.bing.net/th?id=OIP.iEI9uE_z6erZzx7WyXAI1AHaHy&pid=Api&P=0&w=148&h=156" alt=""></img>
         <Link to="/description"> <button class="rectangular">
              <p class="text">20% of on ICICI Debit Cards</p>
          </button>
          </Link>
      </div>
        <hr style={{"color":"7e858e","width":"240px","marginLeft":"280px","marginTop":"50px"}}/>
        <div className='allicons'>
        <img className='schimg' src="https://tse1.mm.bing.net/th?id=OIP.ErGoCbfBMGNUTxc-gsk4gQHaHa&pid=Api&P=0&w=165&h=165" alt=""></img>
        <button className="plusbtn"><img className='plusimg' src="https://static.vecteezy.com/system/resources/previews/000/583/100/original/vector-button-plus-icon.jpg" alt=""></img></button>
        <img className='searchimg' src="https://tse4.mm.bing.net/th?id=OIP.tbUGh7ESa06yleL6X-HvgAAAAA&pid=Api&P=0&w=160&h=160" alt=""></img>
        </div>
      </div>
      
    </div>
  );
}

export default EventDate;