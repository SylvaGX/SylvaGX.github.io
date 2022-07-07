import THREE from "https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js";

if ( WebGL.isWebGLAvailable() ) {

	// Initiate function or other initializations here

    

} else {

	const warning = WebGL.getWebGLErrorMessage();
	document.getElementById( 'body' ).appendChild( warning );

}