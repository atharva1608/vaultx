import React, {useState,useEffect} from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './App.css';
import moment from 'moment';
import CalendarHeader from 'react-calendar'

function Description() {
  const [date, setDate] = useState(new Date());
  
  const [img, setImg] = useState();
   const [Email,setEmail] = useState("");
   
   const data = async () => {
       const url = "https://reqres.in/api/users/3";
       const response = await fetch(url);
       const data = await response.json();
       console.log(data);
      setEmail(data.data.email);
      setImg(data.data.avatar);
      console.log(data.data.email);
      document.getElementById("invitedbtn").innerHTML="Invited"
      alert("Email sent to " + `${data.data.email}`);
   }
  

  
  

  return (
    <div className='app'>
      <div className='calendar-container'>
        <Calendar onChange={setDate} value={date} />
        <p className='text-center'>
        <p>Today, <b style={{"fontWeight":"normal"}}>{moment(date).format('MMMM D')}</b></p>
      </p>
      <div style={{"display":"flex","marginTop":"-10px"}}>
          <img className='per' src="https://tse2.mm.bing.net/th?id=OIP.iEI9uE_z6erZzx7WyXAI1AHaHy&pid=Api&P=0&w=148&h=156" alt=""></img>
          <button class="rectangular1">
              <p className="text1">20% of on ICICI Debit Cards</p>
              <p className="text2">Description</p>
              <p style={{"color":"white","marginLeft":"-1px"}}>This Offer applies only on ICICI Debit Cards payment made on Amazon</p>
              <button className='invitebtn' id="invitedbtn" onClick={data}>Invite</button>
              <div style={{"display":"flex","marginTop":"10px"}}>
              <p style={{"color":"white","marginLeft":"4px"}}>Edit</p>
              <p style={{"color":"white","marginLeft":"75px"}}>Reminder On</p>
              </div>
          </button>
      </div>
        <hr style={{"color":"7e858e","width":"240px","marginLeft":"280px","marginTop":"50px"}}/>
        <div className='allicons'>
        <img className='schimg' src="https://tse1.mm.bing.net/th?id=OIP.ErGoCbfBMGNUTxc-gsk4gQHaHa&pid=Api&P=0&w=165&h=165" alt=""></img>
        <button className="plusbtn"><img className='plusimg' src="https://static.vecteezy.com/system/resources/previews/000/583/100/original/vector-button-plus-icon.jpg" alt=""></img></button>
        <img className='searchimg' src="https://tse4.mm.bing.net/th?id=OIP.tbUGh7ESa06yleL6X-HvgAAAAA&pid=Api&P=0&w=160&h=160" alt=""></img>
        </div>
      </div>
      <p>{Email}</p>
      <img src={img} alt=""></img>
      
    </div>
  );
}

export default Description;