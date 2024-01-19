import React, {useEffect} from "react";

function ImageModal({imgArr, idx, setIdx, setImgModalFlag}) {
    const prevImg = () =>{
        setIdx(idx - 1)
    }
    const nextImg = () =>{
        setIdx(idx + 1)
    }
    const closeModal = () => {
        const modal = document.querySelector(".modal");
        modal.style.animation = "fadeOut 1s ease-in-out";
    
        // 애니메이션 완료 후 모달을 숨기기
        setTimeout(() => {
          setImgModalFlag(false);
        }, 900); // 애니메이션 지속 시간과 일치하게 설정
      };
    useEffect(() => {
        // 모달이 마운트될 때 클릭 이벤트 리스너를 추가
        const modal = document.querySelector(".modal");
        const handleOutsideClick = (e) => {
          if (e.target === modal) {
            closeModal(); // 모달을 닫음
          }
        };
        modal.addEventListener("click", handleOutsideClick);
    
        // 언마운트 시 클릭 이벤트 리스너를 제거
        return () => {
          modal.removeEventListener("click", handleOutsideClick);
        };
      }, []);
    
  return ( 
    
    <>
        <div className="modal" style={{display: 'flex'}} >
            <div className="image-container">
                {/* <span className="number-tag"></span> */}
                <img id="modalImage" src={imgArr[idx]} />
            </div>
                <a className={idx == 0 ? `prev deactive` : `prev active`} onClick={()=>{idx != 0 && prevImg();}}>❮</a>
                <a className={idx == imgArr.length - 1 ? `next deactive` : `next active`} onClick={()=>{idx != imgArr.length - 1 && nextImg();}}>❯</a>
        </div>
    </>
  );
}

export default ImageModal;
