import React, { useState, useEffect } from 'react';
import { Typography, Button } from "@material-tailwind/react";
import Select from 'react-select';
import WeekCalendar from './WeekCalendar';
import { useNavigate } from 'react-router-dom';

function SignUpComplete() {
  const navigate = useNavigate();


const handleClick = () =>{
  navigate('/')
}

  return (
    <>
      <div className='flex justify-center mb-10 mt-5 flex-col items-center pretendard'>
       <div className='complete flex flex-col items-center text-center card p-10 mt-40 mb-40 rounded-xl drop-shadow-xl'>
         <span className='h1'>신청이 완료되었습니다!</span>
         <span className='h3'>Your application has been completed.</span>
         <button className="next-icon min-w-[200px] mt-10" onClick={handleClick}>
            <span> Go to main page </span>
            <span className="material-symbols-outlined icon-self">send</span>
          </button>
       </div>
      </div>

    </>
  );
}

export default SignUpComplete;
