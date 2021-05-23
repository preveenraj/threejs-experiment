import * as THREE from 'three'
import '../helvetiker_regular.typeface.json';
const loader = new THREE.FontLoader();

export const addText = (scene) => {
  loader.load( 'helvetiker_regular.typeface.json', function ( font ) {
    const geometry = new THREE.TextGeometry( 'Preveen Raj', {
      font: font,
      size: 8,
      height: 2,
      curveSegments: 12,
      bevelEnabled: false,
      bevelThickness: 1,
      bevelSize: 0.5,
      bevelOffset: 0,
      bevelSegments: 3
    } );
    const material = new THREE.MeshStandardMaterial( { color: 0x2980b9} )
  const text = new THREE.Mesh(geometry, material)
  text.position.set(-30, 0, 0);

  scene.add(text)
  } );
};