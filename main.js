import './style.css'

import * as THREE from 'three'

import { addTorus, animateTorus } from './shapes/torus';
import { addLight } from './utils/light';
import { animateCamera, initializeScene } from './utils/init';
import { addStar } from './shapes/stars';
import { addText } from './shapes/text';
import { addGrid } from './utils/grid';
import { addMoon } from './shapes/moon';


const { scene, camera, renderer, controls } = initializeScene();

// addTorus(scene);
addLight(scene);
addGrid(scene);
//Add 200 stars in random positions
Array(200).fill().forEach(() => addStar(scene));

addText(scene);
addMoon(scene);

const prevTexture = new THREE.TextureLoader().load('preveenraj.png');
const prev = new THREE.Mesh(
  new THREE.BoxGeometry(20, 20, 20),
  new THREE.MeshBasicMaterial( { map: prevTexture })
);
prev.position.x = 0;
prev.position.y = -20;
scene.add(prev)






function animate() {
  requestAnimationFrame( animate );
  animateTorus();
  animateCamera(camera);
  controls.update();
  renderer.render(scene, camera);
}
animate();
