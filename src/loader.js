import { GLTFLoader } from '../node_modules/three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';
import { scene } from './index.js';

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
      console.log(sceneobjects);
      
     
      

     
    })