const rotateX = document.querySelectorAll('.clickX');
const rotateY = document.querySelectorAll('.clickY');
const Box = document.querySelector('#cube-box');
const content = document.querySelector('.content');
const para_content = [
'Beautiful Forest made with Unity',
'menelik monument found in ethiopia around piassa which is monument built for the famous leader of menelik II',
'Unity park found in ethiopia around 4 kilo',
'Lalibela one of the ancient church found in ethiopia which is one of the 7 wonders',
'inside the deep ocean pleasant view',
'House model taken from game footage',
 ];
window.onload = content.innerHTML = para_content[0];
for(let x = 0;x<rotateX.length;x++){
  rotateX[x].addEventListener('click',()=>{
  remover(x,'X');
}) 
};

for(let y = 0;y<rotateY.length;y++){
  rotateY[y].addEventListener('click',()=>{
  remover(y,'Y');
}) 
};


const remover = (num,dir)=>{
for(let i = 0;i<Box.classList.length;i++){
    Box.classList.remove(Box.classList[i]);
}
Box.classList.add('change'+dir+(num+1))
content_changer('change'+dir+(num+1));
}   

const content_changer = (getClass)=>{
 switch(getClass){
  case 'changeX1':
     content.innerHTML = para_content[0];
     break;
  case 'changeX2':
     content.innerHTML = para_content[1];
     break;
  case 'changeX3':
     content.innerHTML = para_content[2];
     break;
  case 'changeX4':
     content.innerHTML = para_content[3];
     break;
  case 'changeX5':
     content.innerHTML = para_content[0];
     break;
     
  case 'changeY1':
     content.innerHTML = para_content[0];
     break;
  case 'changeY2':
     content.innerHTML = para_content[4];
     break;
  case 'changeY3':
     content.innerHTML = para_content[2];
     break;
  case 'changeY4':
     content.innerHTML = para_content[5];
     break;
  case 'changeY5':
     content.innerHTML = para_content[0];
     break;

 }
}