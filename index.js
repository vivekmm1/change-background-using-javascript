var btn=document.getElementById('btn');
const body=document.querySelector('body');
const color= ['red', 'green', 'blue', 'yellow', 'pink', 'purple'];
btn.addEventListener('click' , change);

function change(e){
    var index=parseInt(Math.random()*color.length);
    body.style.backgroundColor =color[index]

}