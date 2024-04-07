import React, { useState, useEffect } from 'react';
import { Typography, Button } from "@material-tailwind/react";
import Select from 'react-select';
import WeekCalendar from './WeekCalendar';
import { useNavigate } from 'react-router-dom';
import { postApply } from '../helpers/fakebackend_helper';

function SignUpFormMondayHoopLab() {
  const [currentStep, setCurrentStep] = useState(1);
  const [containerHeight, setContainerHeight] = useState('auto');
  const [isVisible, setIsVisible] = useState(false);
  const [lang, setLang] = useState('kor')
  const navigate = useNavigate();
 // 입력 값을 하나의 상태 객체에서 관리합니다.
 const [formData, setFormData] = useState({
  name: '',
  age: '나이(연도)',
  gender: '',
  tel: ''
});

useEffect(() => {
  switch (currentStep) {
    case 1:
      setContainerHeight('400px'); // StepOne의 높이에 맞게 조정
      break;
    case 2:
      setContainerHeight('1000px'); // StepOne + StepTwo의 높이에 맞게 조정
      break;
    case 3:
      setContainerHeight('1800px'); // 모든 Step의 높이에 맞게 조정
      break;
    default:
      setContainerHeight('500px'); // 기본값
  }
}, [currentStep]);


// 현재 연도를 기준으로 만들어진 셀렉트 박스 옵션을 생성합니다.
const currentYear = new Date().getFullYear();
const generateYearOptions = () => {
  const currentYear = new Date().getFullYear();
  const options = [];

  for (let year = currentYear; year >= currentYear - 100; year--) {
    options.push({ value: year, label: year });
  }

  return options;
};
const yearOptions = generateYearOptions();


// 입력 값 변경을 처리하는 함수
const handleChange = (e) => {
  if(e.name == 'age'){
    setFormData(prevFormData => ({
      ...prevFormData,
      age: e.value
    }));
    return;
  }
  const { name, value, type } = e.target;
  setFormData(prevFormData => ({
    ...prevFormData,
    [name]: type === 'tel' ? value.replace(/\D/g, '') : value
  }));
};

  // 폼을 천천히 나타나게 하는 CSS 스타일
  const formStyle = {
    transition: 'opacity 1s ease-in-out',
    opacity: isVisible ? 1 : 0,
    maxHeight: isVisible ? '1000px' : '0', // 최대 높이를 조정하여 스르륵 나타나는 효과를 줍니다.
    overflow: 'hidden',
  };

  // 단계별 컴포넌트 예시입니다. 실제 구현에 맞게 조정하세요.

const StepProgressBar = ({ currentStep }) => {
  return (
    <div className="flex justify-center items-center space-x-4 mb-4">
      {[1, 2, 3].map((step, index, array) => (
        <React.Fragment key={step}>
          <div
            className={`rounded-full ${currentStep >= step ? 'bg-gray-800' : 'bg-gray-200'} w-4 h-4`}
          />
          {index < array.length - 1 && (
            <div
              className="flex-auto border-t-2 transition-width duration-500 ease-in-out"
              style={{
                borderColor: currentStep > step ? 'rgb(59 130 246)' : 'rgb(209 213 219)', // 파란색 혹은 회색
              }}
            ></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const [selectedPackage, setSelectedPackage] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const [selectedId2, setSelectedId2] = useState(null);

  const packages = [
    { id: 'dropin', name:'Drop in pricing',description: '1 session ($35.00/session, total of $35.00)',times: '1 session', priceper:'$35.00 / session', total: '$35.00',originPrice:'$40.00', discountPrice:'$35.00' },
    { id: 'package1', name:'Package I',description: '4 sessions / 주 1회 ($30.00/session, total of $120.00)',times: '4 sessions', priceper:'$30.00 / session', total: '$120.00',originPrice:'$160.00', discountPrice:'$120.00' },
    { id: 'package2', name:'Package II',description: '8 sessions / 주 1회 ($27.50/session, total of $220.00)',times: '8 sessions', priceper:'$27.50 / session', total: '$220.00' ,originPrice:'$320.00', discountPrice:'$220.00'  },
    { id: 'package3', name:'Package III',description: '12 sessions / 주 1회 ($25.00/session, total of $300.00 + any extra session)',times: '(12+@) sessions', priceper:'$25.00 / session', total: '$300.00 + @',originPrice:'$480.00', discountPrice:'$300.00'   },
  ];

  const handleSelectPackage = (id) => {
    setSelectedPackage(id);
  };

const handleSubmit = ()=>{
  const data = {
    ...formData,
    package:selectedPackage,
    firstClass:selectedId,
    secondClass:selectedId2,
  }
  console.log(data)
  const response = postApply(data).then(()=>{
    // navigate('/signupform/complete')
  })
  // navigate('/signupform/complete')
}


  return (
    <>
      <div className='flex justify-center mb-10 mt-5 flex-col items-center pretendard'>
        <div className='readme-text-div w-[700px] flex justify-center  flex-col '> 
        <div className='flex justify-between'>
            <span className='italic'>sign-up / personal training</span>
            <div className="form-check form-switch">
              <input type="checkbox" className="form-check-input checkbox" id="checkbox_1" onChange={()=>{setLang(lang=='kor'?'eng':'kor')}}/>
              <label className="form-check-label" for="checkbox_1">{lang}</label>
            </div>
        </div>
         
        {
          lang == 'kor'?
          <React.Fragment>
          <Typography as="h2" variant="h2" className='text-center mb-5 mt-5 pretendard'>신청하시기 전에 꼭 읽어주세요!</Typography>
        <div className='readme-text pretendard'>
          <div>
            <span>저희 그룹 스킬 트레이닝 클래스에 관심 주셔서 감사합니다!
            아래 내용을 통해 저희 프로그램에 대해 안내드립니다.
            모든 세션은 90분으로 농구의 기본 기초부터 실제 경기에 적용할 수 있는 고급 스킬까지 다룰 예정입니다.
            저희 프로그램은 더 많은 수업을 선택하시면 할인 받을 수 있는 패키지로 제공됩니다 (정확한 가격은 아래 내용 참고 바랍니다).
            </span>
          </div>
          <div className='summary mt-8'>
            <p>ㆍ 4주로 구성된 주 1회 코스</p>
            <p>ㆍ 한 그룹에 3~6명 참여</p>
            <p>ㆍ 메인트레이너: 임원준 코치 <span className='desc'>(프로그램 중 2회는 이승준 코치와 임원준 코치가 함께 지도 예정)</span></p>
            <p>ㆍ 진행 체육관: Higher Basketball 체육관</p>
            <p className='ml-6'>    - 3개의 후프가 있는 하프 코트 체육관</p>
            <p className='ml-6'>    - 주소: 서대문구 연희동 81-14</p>
          </div>
          <div className='cancel-info-div'>
            <p>※ 취소안내</p>
            <span>
            수업 날짜에 참여가 어려우실 경우 <span className='red'>수업 시간 24시간 이전</span>에 알려주시면 신청하신 
            <span className='red'>4회 수업 기준으로 1회는 수업 횟수에서 차감 없이 취소가 가능</span>합니다 
            (12세션 = 3번 휴강 가능).
          또는 같은 주에 진행되는 다른 수업 참여로 보강 수업이 가능합니다. 
          다만 정원이 찼을 경우 보강 수업이 어려운 점 양해 부탁드립니다.
            </span>
          </div>
          <div className='contact-info-div'>
            <p>※ 일대일 트레이닝 안내</p>
            <span>
              인스타 DM <span className='blue'>@im_wonjun</span> 혹은 010-4608-7511 메세지 주시길 바랍니다.
            </span>
          </div>
        </div>
        </React.Fragment>
        :
        <React.Fragment>
  <Typography as="h2" variant="h2" className='text-center mb-5 mt-5 pretendard'>Please Read Before Applying!</Typography>
  <div className='readme-text pretendard'>
    <div>
      <span>Thank you for your interest in our group skill training classes! Below, we provide information about our program. All sessions will last 90 minutes and cover basic basketball fundamentals to advanced skills applicable in real games. Our program is offered in packages where you can receive discounts if you select more classes (please see details below for exact pricing).</span>
    </div>
    <div className='summary mt-8'>
      <p>ㆍ 4-week course, once a week</p>
      <p>ㆍ 3-6 participants per group</p>
      <p>ㆍ Head Trainer: Coach Im Wonjun <span className='desc'>(During the program, Coach Lee Seungjun and Coach Im Wonjun will co-instruct in two sessions)</span></p>
      <p>ㆍ Venue: Higher Basketball Gym</p>
      <p className='ml-6'>    - Half-court gym with 3 hoops</p>
      <p className='ml-6'>    - Address: 81-14, Yeonhui-dong, Seodaemun-gu</p>
    </div>
    <div className='cancel-info-div'>
      <p>※ Cancellation Policy</p>
      <span>
        If you find it difficult to attend the class on the scheduled date, please notify us <span className='red'>at least 24 hours before the class</span>. You can cancel <span className='red'>one session out of four without deduction from the total number of sessions</span> you applied for (e.g., 12 sessions = 3 absences allowed). Alternatively, you may make up for the missed session by attending another class held in the same week. However, please understand that it may not be possible to make up for the missed session if the class is already full.
      </span>
    </div>
    <div className='contact-info-div'>
      <p>※ One-on-One Training Inquiry</p>
      <span>
        Please DM on Instagram <span className='blue'>@im_wonjun</span> or message 010-4608-7511.
      </span>
    </div>
  </div>
</React.Fragment>
        }
      </div>

      <div className='flex justify-center mt-10'>
        <StepProgressBar currentStep={currentStep} />
      </div>
      <div className='flex  step-container flex-col' style={{ height: containerHeight, overflow: 'visible', transition: 'height 0.5s ease' }}>
      <div className={`step-content show`}>
              <div className='flex flex-col items-center  space-y-6 my-8 w-[700px] h-[300px]'>
              <Typography as="h2" variant="h2" className='text-2xl font-bold mb-4'>신청 정보</Typography>
              <form className='signup-form flex flex-col items-center space-y-4 w-full'>
                <input
                  className=' input input-bordered w-full h-12 px-4'
                  placeholder="이름"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                />
                 <Select
                    options={yearOptions}
                    className="year-select w-full"
                    placeholder="나이(연도) 선택"
                    isSearchable={true} // 검색 가능하게 설정
                    name="age"
                    value={{label:formData.age,value:formData.age}}
                    onChange={(e)=>{handleChange({name:'age',value:e.value})}}
                    styles={
                      {
                        border:'2px solid red',
                        color:'red'
                      }
                    }
                  />
                <div className='flex w-full items-center space-x-4'>
                  <label className='flex items-center space-x-2'>
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      checked={formData.gender === 'male'}
                      onChange={handleChange}
                      className='radio radio-primary'
                    />
                    <span>남성</span>
                  </label>
                  <label className='flex items-center space-x-2'>
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      checked={formData.gender === 'female'}
                      onChange={handleChange}
                      className='radio radio-primary'
                    />
                    <span>여성</span>
                  </label>
                </div>
                <input
                  className='input input-bordered w-full h-12 px-4'
                  placeholder="전화번호(숫자만 입력해주세요)"
                  name="tel"
                  type="tel"
                  pattern="[0-9]*"
                  value={formData.tel}
                  onChange={handleChange}
                />
              </form>
            </div>
        </div>
        <div className={`step-content ${currentStep === 2 ||currentStep === 3 ? 'show' : ''}`}>
          <div className='flex flex-col items-center justify-center items-center space-y-6 my-8 w-[1000px]'>
            <Typography as="h2" variant="h2" className='text-2xl font-bold mb-4'>패키지 선택</Typography>
              <div className='flex '>
                {packages.map((pkg) => (
                  <div className={`${selectedPackage === pkg.id ? 'active' : ''} ${selectedPackage !== null && selectedPackage !== pkg.id ? 'inactive' : ''} pakage-item flex-col flex items-center`}>
                  <div
                    style={{position:'relative'}}
                    key={pkg.id}
                    className={`w-full `}
                    onClick={() => handleSelectPackage(pkg.id)}
                  >
                   {pkg.id === 'package3' && 
                   <div className='recommend-icon-div'>
                    <span className='recommend-icon'>추천</span>
                   </div>
                    }
                   <div className={`pakage-title-div ${pkg.id !== 'package3' ? 'mt-6':''}`}>
                    <span className={`font-bold pakage-title`}>{pkg.name}</span>
                    </div>
                    <div className={`price-div`}>
                      <span className='price-item origin-price'>{pkg.originPrice}</span>
                      <span className='price-item discount-price'>{pkg.discountPrice}</span>
                    </div>
                    <div className={`pakage-info-div`}>
                      <div className='pakage-info-item'>
                        <span className='info-title'></span>
                        <span className='info-value'>{pkg.times}</span>
                      </div>
                      <div className='pakage-info-item'>
                        <span className='info-title'></span>
                        <span className='info-value'>{pkg.priceper}</span>
                      </div>
                      <div className='pakage-info-item'>
                        <span className='info-title'>Total</span>
                        <span className='info-value'>{pkg.total}</span>
                      </div>
                    </div>
                  </div>
                  </div>
                ))}
            </div>
          </div>  
        </div>
        <div className={`step-content ${currentStep === 3 ? 'show' : ''}`}>
          <div className='flex flex-col items-center justify-center space-y-6 my-2 w-[700px]'>
            <Typography as="h2" variant="h2" className='text-2xl font-bold mb-4'>클래스 시간 선택</Typography>
            <span className='w-full class-title '>희망 1순위 선택</span>
            <WeekCalendar selectedId={selectedId} setSelectedId={setSelectedId}/>
            <span className='w-full class-title'>희망 2순위 선택</span>
            <WeekCalendar selectedId={selectedId2} setSelectedId={setSelectedId2}/>
            <div className='flex flex-col   space-y-1 my-8 w-[700px] h-[200px]'>
              <span>질문 있으시면 @im_wonjun DM 으로 문의 해주세요 :)</span>
              <span>If you have any questions you can DM @im_wonjun :)</span>
              <input
                className='input input-bordered w-full h-12 px-4'
                placeholder="comment"
                name="comment"
                type="text"
                value={formData.comment}
                onChange={handleChange}
              />
            </div>
          </div>
          
        </div>
        
      </div>

      <div className='w-[100px] '>
        <div className="flex justify-between mt-4">
        
          {currentStep < 3 ? (
            <button className="next-icon" onClick={nextStep}>
             <span> Next </span>
             <span className="material-symbols-outlined">arrow_downward_alt</span>
            </button>
          ) : (
            <button className="next-icon" onClick={handleSubmit}>
              <span> Submit </span><span className="material-symbols-outlined icon-self">send</span>
            </button>
          )}
        </div>
      </div>

      </div>

    </>
  );
}

export default SignUpFormMondayHoopLab;
