import React, { useState } from 'react';

function WeekDaysCalendar({selectedId,setSelectedId}) {
  // const [selectedId, setSelectedId] = useState(null);
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const classInfo = [
    {
      id: 'Thu 18:30 Lv2',
      day: 'Thu',
      time: '18:30',
      name: 'Lv2'
    },
    {
      id: 'Thu 20:00 Lv1',
      day: 'Thu',
      time: '20:00',
      name: 'Lv1'
    },
    {
      id: 'Sun 18:30 Lv2',
      day: 'Sun',
      time: '18:30',
      name: 'Lv2'
    },
    {
      id: 'Sun 20:00 Lv1',
      day: 'Sun',
      time: '20:00',
      name: 'Lv1'
    },
    {
      id: 'Sun 21:30 Lv2',
      day: 'Sun',
      time: '21:30',
      name: 'Lv2'
    },
  ]
  const handleSelectId = (id) => {
    setSelectedId(id);
  };

  return (
     <div className='pretendard flex flex-col items-center justify-center w-[700px]' style={{marginTop:'10px'}}>
      <div className='flex text-center border border-gray-200 rounded-lg'>
        {weekDays.map((day, dayIndex) => {
          let isClassExist = false
          let isDone = false
          return (
          <React.Fragment key={dayIndex}>
            <div className=''>
            <div className={`day-item ${day === 'Sun' && 'sunday-text'} ${day === 'Sat' && 'saturday-text'} `} >
            <span>{day}</span>  
            </div> {/* 요일 표시 */}
            <div className='flex flex-col'>
            {classInfo.filter(row => row.day === day).map((row, index) => {
              isClassExist = true
              return (
              <div
              style={{position:'relative'}}
                key={index}
                className={`class-item ${row.name === 'Lv1' ? 'red' : ' blue'} ${day === 'Sat' && 'saturday-border'} ${selectedId === row.id ? 'active' : ''} `}
                onClick={() => handleSelectId(row.id)}
              >
                <div className='level-item-div'>
                  <span className={`level-item ${row.name === 'Lv1' ? 'red' : ' blue'}`}>{row.name}</span>
                </div>
                <div>
                 <span className='time-item'>{row.time}</span>
                </div>
               
              </div>
            )
        }
            )}
            {classInfo.filter(row => row.day !== day && !isClassExist).map((row, index) => {
              if(isDone) return;
              isDone = true
              return (
              <div
              style={{position:'relative'}}
                key={index}
                className={`class-item    ${day === 'Sat' && 'saturday-border'} default `}
              >
              </div>
            )
            })}
            </div>
            </div>
          </React.Fragment>
        )
      }
        )}
      </div>
    </div>
  );
}

export default WeekDaysCalendar;