import * as THREE from 'three'

export const addGrid = (scene) => {
 
const gridHelper = new THREE.GridHelper(200,50)

scene.add(gridHelper)
  };