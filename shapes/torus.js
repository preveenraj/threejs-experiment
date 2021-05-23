import * as THREE from 'three'

let torus;

export const addTorus = (scene) => {
const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshStandardMaterial( { color: 0xFF6347} )
torus = new THREE.Mesh(geometry, material)
scene.add(torus)
}

export const animateTorus = () => {
if(torus) {
  torus.rotation.x += 0.01;
  torus.rotation.y += 0.005;
  torus.rotation.z += 0.01;
}

}
