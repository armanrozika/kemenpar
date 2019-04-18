let l1 = document.querySelector('.l-1');
let l1polygon = document.querySelectorAll('.l-1 polygon');
let l1path = document.querySelectorAll('.l-1 path');

let lhov = document.querySelectorAll('.l-hov');

const elPolygon = [document.querySelectorAll('.l-1 polygon'), document.querySelectorAll('.l-2 polygon'), document.querySelectorAll('.l-3 polygon'), document.querySelectorAll('.l-4 polygon'), document.querySelectorAll('.l-5 polygon'), document.querySelectorAll('.l-6 polygon')]

const elPath = [document.querySelectorAll('.l-1 path'), document.querySelectorAll('.l-2 path'), document.querySelectorAll('.l-3 path'), document.querySelectorAll('.l-4 path'), document.querySelectorAll('.l-5 path'), document.querySelectorAll('.l-6 path')]


const showMapDetails = (polygon, path) => {
    if(polygon != undefined){
            for(let i=0; i<polygon.length; i++){
            polygon[i].style.fill = '#fff'
        }
    }

    if(path != undefined){
            for(let i=0; i<path.length; i++){
            path[i].style.fill = '#fff'
        }
    }
}

const mapOut = (polygon, path) => {
    if(polygon != undefined){
            for(let i=0; i<polygon.length; i++){
            polygon[i].style.fill = 'transparent'
        }
    }

    if(path != undefined){
            for(let i=0; i<path.length; i++){
            path[i].style.fill = 'transparent'
        }
    }
}


for(let i=0; i<lhov.length; i++){
    lhov[i].addEventListener('mouseenter', ()=>{
        showMapDetails(elPolygon[i], elPath[i]);
    })

    lhov[i].addEventListener('mouseleave', ()=>{
        mapOut(elPolygon[i], elPath[i]);
    })
}

let navbar = document.querySelector('.navbar');
let menuwrapper = document.querySelector('.menu-wrapper');
let navlogo = document.querySelector('.nav-logo');

window.addEventListener('DOMContentLoaded', ()=>{
    window.addEventListener('scroll', ()=>{
        if(window.scrollY > 180){
            menuwrapper.style.paddingBottom = '50px'
            navbar.classList.add('fixed')
            let fixed = document.querySelector('.fixed');
            fixed.style.top = '0'
            navlogo.style.display = 'inline-block'
        }else{
            menuwrapper.style.paddingBottom = '0'
            navbar.classList.remove('fixed');
            navlogo.style.display = 'none'
        }
    })
})


