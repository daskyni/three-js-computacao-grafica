import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';

const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    25,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

const orbit = new OrbitControls(camera, renderer.domElement);

// posicao inicial da camera
camera.position.set(30, 30, 30);
orbit.update();

// cria cubo
const boxGeometry = new THREE.BoxGeometry();
const boxMaterial = new THREE.MeshBasicMaterial({color: 0xFF0000});
const box = new THREE.Mesh(boxGeometry, boxMaterial);
scene.add(box);

// cria esfera
const sphereGeometry = new THREE.SphereGeometry();
const sphereMaterial = new THREE.MeshBasicMaterial({color: 0x00FF00});
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
scene.add(sphere);

// cria cone
const coneGeometry = new THREE.ConeGeometry();
const coneMaterial = new THREE.MeshBasicMaterial({color: 0x0000FF});
const cone = new THREE.Mesh(coneGeometry, coneMaterial);
scene.add(cone);

// cria plano
const planeGeometry = new THREE.PlaneGeometry(30, 30);
const planeMaterial = new THREE.MeshBasicMaterial({
    color: 0xAAAAAA,
    side: THREE.DoubleSide
});
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
scene.add(plane);
plane.rotation.x = -0.5 * Math.PI;

// grid
const gridHelper = new THREE.GridHelper(30);
scene.add(gridHelper);

// translacao do cubo
box.position.x = 2;
box.position.y = 2;
box.position.z = 7;

// translacao da esfera
sphere.position.x = 7;
sphere.position.y = 2;
sphere.position.z = 1;

// translacao do cone
cone.position.x = 1;
cone.position.y = 2;
cone.position.z = 1;

// rotacao do cubo
box.rotation.x = 5;

// rotacao do cone
cone.rotation.x = 5;

// escala do cubo
box.scale.x = 2;
box.scale.y = 2;
box.scale.z = 2;

// escala da esfera
sphere.scale.x = 2;
sphere.scale.y = 2;
sphere.scale.z = 2;

// escala do cone
cone.scale.y = 3;

function animate(){
    renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);