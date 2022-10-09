import { GLTFLoader } from '../node_modules/three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';
import { scene } from './index.js';
import { renderer } from './index.js';
import { camera } from './index.js';
import { TWEEN } from '../node_modules/three/examples/jsm/libs/tween.module.min'

const gltfLoader2 = new GLTFLoader()

    gltfLoader2.load('./sprite1.gltf', (gltf) => {
      const root = gltf.scene;
      
      scene.add(root); //co zrobic z tym?
      
      const sceneobjects = [];

      gltf.scene.traverse(function (child) {
        if (child.isMesh) {
          const m = child;
          m.castShadow = true;
          sceneobjects.push(m);
          //originalMaterials[m.name] = (m).material;
        }
      });
      let positionA={y:1}
      sceneobjects[6].position.set(0,positionA.y,0)

      // var tween = new TWEEN.Tween(positionA)
      // .to({y:4}, 500)
      
      //      .easing(TWEEN.Easing.Cubic.Out)
      //      .onUpdate(() => render())
      //      .start()
      var tween = new TWEEN.Tween(sceneobjects[6].position)
                  .to({x: 0, y: 4, z: 0}, 1000)
                  .start()
      tween.onUpdate(function (object) {
            console.log(object.y)
          })
      console.log(sceneobjects);
      
      for(let a=0;a<=17;a++){
       if (sceneobjects[a].parent.name==="kula1"){
         console.log(a)
       }
      
        };
        //console.log(sceneobjects[a].name)
      
        root.position.set(7,6,6)
      
    
      

     
    })

    function render() {
      renderer.render(scene, camera)
  }

    