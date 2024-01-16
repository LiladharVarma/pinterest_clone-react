import React, { useState, useEffect } from "react";
import Images from "./Images";
import Card from "./Card";


const  ImagesContainer = (props) => {
  const [clicked, setClicked] = useState("");
  // const [isVisible, setVisible] = useState(false);
  const [data, setData] = useState([]);
  const [apiAvailable , setApiAvailable] = useState(0) ; 



  const accessKey = `TTlrYf7j3lfKBuBmgctsRelhEH80a-MzXtopjt8F5T8`;
  let url = `https://api.unsplash.com/photos/random?client_id=${accessKey}&count=30`;

  // if (props.isClicked === true) {
  //   url = `https://api.unsplash.com/photosphotos?query= ${props.searchFor}client_id=${accessKey}&count=30`;
  // }

  useEffect(() => {
    fetch(url)
      .then((response) =>{ 
        
        setApiAvailable(response.status);
        return response.json();
      })
      .then((result) => {
        console.log(result);
        console.log(result[0].urls.raw);
        setData(result);
      });
  });

  function showImage(event) {
    //    console.log(event);
    console.log(event.target);
    const url = event.target.src;

    setClicked(url);

    console.log(clicked);
    // setVisible(true);
  }

  return (
    <div className="gallary">
       {apiAvailable === 200 ? data.map((photo, index) => (
        <Card
          key={index}
          id={index}
          url={photo.urls.regular}
          alt={`random no  ${index + 1}`}
        />
      )) :Images.map((image, index) => {
        return (
          <Card
            url={image.url}
            key={index}
            id={index}
            zoom={clicked}
            onChecked={showImage}
          />
        );
      }) }
      {/* {isVisible && (
        <div className="pop-up">
          <img src={clicked} alt="Pop up Image" />
          <button
            onClick={() => {
              setVisible(false);
            }}
          >
            Cross
          </button>
        </div>
      )} */}

    </div>
  );
}

export default ImagesContainer;
