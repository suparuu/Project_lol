import React from 'react'


const ImageGallery = ({obj,key,splashUrl,clickskin,cmpEnname}) => {
    console.log(obj,key,'갤러리')
  return (
    <div key={key}>
    <img src={`${splashUrl}${cmpEnname.current}_${obj.num}.jpg`} onClick={() => clickskin(key)}></img>
     </div>
  )
}

export default ImageGallery