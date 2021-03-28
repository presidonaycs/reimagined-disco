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
        return <Photo path={photo.filePath} key={photo.id}/>
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