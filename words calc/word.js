// const textarea =document.querySelector('#textarea')
// textarea.addEventListener("keyup", e =>{
//     let scheight=e.target.scrollHeight;
//     textarea.style.height=`${scheight}px`;
// });

// function calculate(){

// let input=document.getElementById('textarea').value
//  let str1=input.trim()
// let result=str2.length
// let split=input.split(' ');
// let num=0;
// for(let i=0;i<split.length;i++){
    
//     if(split[i]!="")
//     {
//         num+=1
//     }
    
// }
// 
// }

function calculate(){
  let input =document.getElementById("textarea").value
//   let input1=input.trim()
  let input3=input.split(/\s+/)
  let input4=input3.length
  if(input4>1)
  document.getElementById('result').innerHTML=input4
  else
  document.getElementById('result').innerHTML='0'
}