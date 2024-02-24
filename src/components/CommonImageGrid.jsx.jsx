import React, { useState } from "react";
import ImageModal from "./ImageModal";

function CommonImageGrid({ imgArr }) {
  const [imgModalFlag, setImgModalFlag] = useState(false);
  const [idx, setIdx] = useState(0);

  const imgClickEvent = (idx) => {
    setImgModalFlag(true);
    setIdx(idx);
  };

  return (
    <>
      {
      imgArr.length > 0 && imgArr[0].includes('PECCAMPIMAGES') ? 
      <div className="lg:mx-28  my-5">
        <div className="grid lg:grid-cols-3 gap-3 grid-cols-2 mx-4">
          <div className="flex flex-col gap-3 ">
            <img src="PECCAMPIMAGES/PEC1-min.JPG" 
               onClick={() => {
                imgClickEvent(0);
              }}/>
            <img src="PECCAMPIMAGES/PEC3-min.JPG"
               onClick={() => {
                imgClickEvent(1);
              }} />
          </div>
          {imgArr.map((row, idx) => {
            if(idx == 0 || idx == 1){
              return ;
            }
            return (
              <img
                key={idx}
                src={row}
                onClick={() => {
                  imgClickEvent(idx);
                }}
              />
            );
          })}
        </div>
      </div>
      :
       <div className="lg:mx-28 my-5">
        <div className="grid lg:grid-cols-3 gap-3 grid-cols-2 mx-4">
          {imgArr.map((row, idx) => {
            return (
              <img
                key={idx}
                src={row}
                onClick={() => {
                  imgClickEvent(idx);
                }}
              />
            );
          })}
        </div>
      </div>
      
    }
      {imgModalFlag && (
        <ImageModal
          imgArr={imgArr}
          idx={idx}
          setIdx={setIdx}
          setImgModalFlag={setImgModalFlag}
        />
      )}
    </>
  );
}

export default CommonImageGrid;