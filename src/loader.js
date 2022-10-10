import { GLTFLoader } from '../node_modules/three/examples/jsm/loaders/GLTFLoader';
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
      sceneobjects[15].position.set(800,positionA.y,0)

      
      // var tween = new TWEEN.Tween(sceneobjects[6].rotation)
      //             .to({x: -Math.PI/2, y: 0, z: 0}, 1000)
      //             .start()

      function close(){
        new TWEEN.Tween(sceneobjects[6].rotation)
                  .to({x: -Math.PI/2, y: 0, z: 0}, 1000)
                  .start()
      }

      function open(){
        new TWEEN.Tween(sceneobjects[6].rotation)
                  .to({x: Math.PI/2, y: 0, z: 0}, 1000)
                  .start()
      }
     
      let closebutton = document.getElementById("close_button");
      closebutton.addEventListener("click", function () {
       close();
      }, false)

      let openbutton = document.getElementById("start_button");
      openbutton.addEventListener("click", function () {
        open();
       }, false)
      // tween.onUpdate(function (object) {
      //       console.log(object.y)
      //     })
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

    