import React from "react";
const SwiperSlide = ({ obj, key, clickskill, spellUrl }) => {
  console.log(obj, key, "aa");
  return (
    <div className="skillbox02" onClick={() => clickskill(key)} key={key}>
      <img src={`${spellUrl}${obj.image.full}`}></img>
      <p>{obj.name}</p>
    </div>
  );
};

export default SwiperSlide;
