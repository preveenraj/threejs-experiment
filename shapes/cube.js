import * as THREE from 'three'
import prevImage from '../preveenraj.png'

export const addCube = (scene) => {
  const prevTexture = new THREE.TextureLoader().load(prevImage);
  const prev = new THREE.Mesh(
    new THREE.BoxGeometry(20, 20, 20),
    new THREE.MeshBasicMaterial( { map: prevTexture })
  );
  prev.position.x = 0;
  prev.position.y = -20;
  scene.add(prev)
}
