import * as THREE from 'three'

export const addLight = (scene) => {
  
const pointLight = new THREE.PointLight(0xFFFFFF);
pointLight.position.set(5, 5, 5)

const ambientLight = new THREE.AmbientLight(0xFFFFFF)
scene.add(pointLight, ambientLight)

const lightHelper = new THREE.PointLightHelper(pointLight)
scene.add(lightHelper)
  };