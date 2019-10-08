//Uses Three JS Library
let scene = new THREE.Scene();

let camera = 
    new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
camera.position.z = 5;

var renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setClearColor('#e5e5e5');
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth/ window.innerHeight;

    camera.updateProjectionMatrix();
})

var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();

var geometryBox = new THREE.BoxGeometry( 1, 1, 1);
var materialBox = new THREE.MeshLambertMaterial( {color: 0xF7F7F7});
var meshBox = new THREE.Mesh(geometryBox, materialBox);
meshBox.position.set(-2, 0, 0);
meshBox.name = "Github";
scene.add(meshBox);

var geometrySphere = new THREE.SphereGeometry( 0.8, 25, 25);
var materialSphere = new THREE.MeshLambertMaterial( {color: 0xF7F7F7});
var meshSphere = new THREE.Mesh(geometrySphere, materialSphere);
meshSphere.position.set(0, 0, 0);
meshSphere.name = "Games";
scene.add(meshSphere);

var geometryPyramid = new THREE.TetrahedronGeometry(1);
var materialPyramid = new THREE.MeshLambertMaterial( {color: 0xF7F7F7});
var meshPyramid = new THREE.Mesh(geometryPyramid, materialPyramid);
meshPyramid.position.set(2, 0, 0);
meshPyramid.name = "Websites";
scene.add(meshPyramid);

var light1 = new THREE.PointLight(0xFFFFFF, 1, 1000);
light1.position.set(0,0,0);
scene.add(light1);

var light2 = new THREE.PointLight(0xFFFFFF, 2, 1000);
light2.position.set(0,0,25);
scene.add(light2);

var render = function(){
    requestAnimationFrame(render);
    rotateObject(meshBox);
    rotateObject(meshSphere);
    rotateObject(meshPyramid);
    renderer.render(scene, camera);
}

render();

var intersected = false;
var intersectedObject;

//windows events to watch for
window.addEventListener('click', onClick);
window.addEventListener('mousemove', onMouseMove);

function rotateObject(object)
{
    object.rotation.x += 0.01;
    object.rotation.y += 0.01;
    object.rotation.z += 0.01;
}

function onClick(event)
{
    //event.preventDefault();

    if(intersected)
    {
        var elements = document.getElementsByClassName('projSection');
        for(var i = 0; i < elements.length; i++)
        {
            elements[i].classList.remove('visible');
        }

        var idElement = document.getElementById(intersectedObject);
        if(idElement !== null)
            idElement.classList.add('visible');
    }
}

function onMouseMove(event){
    event.preventDefault();

    mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
    mouse.y = - ( (event.clientY + window.pageYOffset) / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);

    var intersects = raycaster.intersectObjects(scene.children, true);
    if(intersects.length > 0)
    {
        intersected = true;
        for( let i = 0; i < intersects.length; i++)
        {
            intersects[i].object.material.color.set(0x63f2a8);
            intersectedObject = intersects[i].object.name;
        } 
    }   
    else{
        intersected = false;
        intersectedObject = null;
        meshBox.material.color.set(0xF7F7F7);
        meshSphere.material.color.set(0xF7F7F7);
        meshPyramid.material.color.set(0xF7F7F7);
    }
}