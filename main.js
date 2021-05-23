import './style.css'

import * as THREE from 'three'

import { addTorus, animateTorus } from './shapes/torus';
import { addLight } from './utils/light';
import { animateCamera, initializeScene } from './utils/init';
import { addStar } from './shapes/stars';
import { addText } from './shapes/text';
import { addGrid } from './utils/grid';


const { scene, camera, renderer, controls } = initializeScene();

// addTorus(scene);
addLight(scene);
// addGrid(scene);
//Add 200 stars in random positions
Array(200).fill().forEach(() => addStar(scene));

addText(scene);


function animate() {
  requestAnimationFrame( animate );
  animateTorus();
  animateCamera(camera);
  controls.update();
  renderer.render(scene, camera);

}

animate();