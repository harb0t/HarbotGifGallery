import './Gallery.css';
import lickyGuy from './gifs/gifLickyGuy.gif';
import sketchMan from './gifs/sketchMan.gif'
import boogieMan from './gifs/boogieMan.gif'


const Gallery = () => {
    return ( 
    <div className = 'galleryCompartments'>
        <img className = 'galleryGif' src={lickyGuy} alt="lickyGuy"/><br/>
        <img className = 'galleryGif' src={sketchMan} alt="sketchMan"/><br/>
        <img className = 'galleryGif' src={boogieMan} alt="boogieMan"/><br/>

    </div>

    );
}

export default Gallery;