import React from 'react'
import Photo from './../components/Photo'


const PhotoViewer = props => {

    console.log(props.docs +"docs")
    const displayPhotos = () => {
        if (props.docs===undefined||props.docs===null)
        {
           return "";
        }
else{
    return props.docs.map(photo => {
        return <img src={photo.image} key={photo.id} alt={photo.name}/>
    })
}
       

    }
    return (
        <>
        <section>{displayPhotos()}</section>
        </>
    )
    

}



export default PhotoViewer