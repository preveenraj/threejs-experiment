import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import spaceImage from '../space.jpeg'

var angle = 0;
var radius = 20; 

export const initializeScene = () => {

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});
camera.position.set( -40, 40, 2200 );
camera.lookAt( 40, 40, 0 );
camera.position.setZ(80);

renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight);

renderer.render(scene, camera);

// Set orbit controls
const controls = new OrbitControls( camera, renderer.domElement);

//Add Background
const spaceTexture = new THREE.TextureLoader().load(spaceImage);
scene.background = spaceTexture;



return { scene, camera, renderer, controls };
}


export const animateCamera = (camera) => {
  camera.position.x = radius * Math.cos( angle );  
  camera.position.y = radius * Math.sin( angle );
  angle += 0.01;
camera.updateProjectionMatrix();

};