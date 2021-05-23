import * as THREE from 'three'

export const addStar = (scene) => {
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const material = new THREE.MeshStandardMaterial( { color: 0xFFFFFF } )
  const star = new THREE.Mesh(geometry, material);
  
  const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread( 100 ) );
  star.position.set(x, y, z);
  
  scene.add(star);
}
