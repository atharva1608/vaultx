import React, {useState} from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import './App.css';
import {Link} from 'react-router-dom';

function App() {
  const [date, setDate] = useState(new Date());
  function navigate(){
    localStorage.setItem("Date", date);
    <Link to="/eventdate"></Link>
  }
  return (
    <div className='app'>
      <div className='calendar-container'>
        <Calendar onChange={setDate} value={date} >

        </Calendar>
        <hr style={{"color":"7e858e","width":"240px","marginLeft":"280px"}}/>
        <div className='allicons'>
        <img className='schimg' src="https://tse1.mm.bing.net/th?id=OIP.ErGoCbfBMGNUTxc-gsk4gQHaHa&pid=Api&P=0&w=165&h=165" alt=""></img>
        <button className="plusbtn"><img className='plusimg' src="https://static.vecteezy.com/system/resources/previews/000/583/100/original/vector-button-plus-icon.jpg" alt=""></img></button>
        <img className='searchimg' src="https://tse4.mm.bing.net/th?id=OIP.tbUGh7ESa06yleL6X-HvgAAAAA&pid=Api&P=0&w=160&h=160" alt=""></img>
        </div>
      </div>
      
    </div>
  );
}

export default App;
