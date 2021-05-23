import * as THREE from 'three'
import moonImage from '../moon.jpeg'
import normalImage from '../normal.jpeg'

export const addMoon = (scene) => {

const moonTexture = new THREE.TextureLoader().load(moonImage);
const normalTexture = new THREE.TextureLoader().load(normalImage);

  const geometry = new THREE.SphereGeometry(3, 32, 32);
  const material = new THREE.MeshStandardMaterial( { map: moonTexture, normalMap: normalTexture } )
  const moon = new THREE.Mesh(geometry, material);
  moon.position.x = 10;
  moon.position.y = 20;
  moon.position.z = -30;
  scene.add(moon);
}
