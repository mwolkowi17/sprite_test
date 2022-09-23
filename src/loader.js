import { GLTFLoader } from '../node_modules/three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';
import { scene } from './index.js';

const gltfLoader2 = new GLTFLoader()

    gltfLoader2.load('./zawor_kulowy_three_kula3_korpus.glb', (gltf) => {
      const root = gltf.scene;
      
      scene.add(root); //co zrobic z tym?
      
     
      

     
    })