import { GLTFLoader } from '../node_modules/three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';
import { OrbitControls } from '../node_modules/three/examples/jsm/controls/OrbitControls';
import { light2, light3, light4 } from './direct_light.js';
import {cube} from './box.js'

require("./loader.js");

export const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
document.body.appendChild(renderer.domElement);

scene.background = new THREE.Color(0x000000);

scene.add(light2);
scene.add(light2.target);
scene.add(light3);
scene.add(light3.target);
scene.add(light4);
scene.add(light4.target);
//scene.add(cube);

camera.position.z = 5;
const controls = new OrbitControls(camera, renderer.domElement);
controls.update();

console.log('begin')

const animate = function () {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.02;
    cube.rotation.y += 0.01;


    renderer.render(scene, camera);
}

animate();