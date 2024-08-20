let content=document.getElementsByClassName("content");
let content1=document.getElementsByClassName("content1");
let content2=document.getElementsByClassName("content2");
let content3=document.getElementsByClassName("content3");
// let btn1=document.getElementsByClassName("btn1");
// let btn2=document.getElementsByClassName("btn2");
// let btn3=document.getElementsByClassName("btn3");


function display(btn) {
    if(btn == "btn1"){
        let elements = document.getElementsByClassName("content2");
        for(let i = 0; i < elements.length; i++) {
            elements[i].style.backgroundColor = 'black';
        }
    }
}

