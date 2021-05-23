import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

export const initializeScene = () => {

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

camera.position.setZ(30);

renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight);

renderer.render(scene, camera);

// Set orbit controls
const controls = new OrbitControls( camera, renderer.domElement);

//Add Background
const spaceTexture = new THREE.TextureLoader().load('space.jpeg');
scene.background = spaceTexture;



return { scene, camera, renderer, controls };
}