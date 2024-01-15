
import React from "react"
import exploreImageData from "./exploreImageData"
import ExploreCard from "./ExploreCard"

function ExploreHome(){
    function createCard(singleImage){

        return (
            <ExploreCard
            
            id = {singleImage.id}
            url = {singleImage.url}
            title = {singleImage.title}
            description = {singleImage.description}
            
             />
        )

    }

    return (
    <div className="explore-home">

        {exploreImageData.map(createCard)}


    </div>)
}

export default ExploreHome;