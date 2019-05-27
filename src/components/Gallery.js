/*import * as React from 'react';
import Masonry from 'react-masonry-component';
import GalleryData from './../JsonData/GalleryData';
 
const masonryOptions = {
    transitionDuration: 0
};
 
const imagesLoadedOptions = { background: '.my-bg-image-el' }
 
class Gallery extends React.Component {
    render() {
        const childElements = GalleryData.map(function(element){
            console.log(element);
           return (
                <li className="image-element-class">
                    <img key={element.newsDate} src={element.newsImage} alt={element.newsTitle} />
                </li>
            );
        });
    
        return (
            <Masonry
                className={'my-gallery-class'} // default ''
                elementType={'ul'} // default 'div'
                options={masonryOptions} // default {}
                disableImagesLoaded={true} // default false
                updateOnEachImageLoad={true} // default false and works only if disableImagesLoaded is false
                imagesLoadedOptions={imagesLoadedOptions} // default {}
            >
                {childElements}
            </Masonry>
        );
    }
}
 
export default Gallery;

*/

import React from 'react'
import Masonry from 'react-masonry-css'
import GalleryData from './../JsonData/GalleryData';

class Gallery extends React.Component{
    render(){
        const breakpointColumnsObj = {
            default: 2,
            1100: 2,
            700: 2,
            500: 1
          };
        const childElements = GalleryData.map(function(element){
            console.log(element);
           return (
                <img key={element.newsid} src={element.newsImage} alt={element.newsTitle} />
            );
        });
        return(
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">
                
                {/* <div>My Element --- 1 </div>
                <div>My Element --- 2 </div>
                <div>My Element --- 3 </div>
                <div>My Element --- 4 </div> */}
                {childElements}
            </Masonry>
        )
    }
}

export default Gallery;