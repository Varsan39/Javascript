let todocontainer=document.getElementById("todo-container")
const nameinput=document.getElementById("input-todo")
const timeinput=document.getElementById("input-time")
const dateinput=document.getElementById("input-date")
const btninput=document.getElementById("add-btn")
let tasks=[];

btninput.addEventListener('click',()=>
{
    const task={
        name:nameinput.value,
        time:timeinput.value,
        date:dateinput.value,
        btn:btninput.value
    }
    if (task.name === "") {
    alert("Enter the task Name!");
    return;
  }
    tasks.push(task)
    addtask(task)
    nameinput.value=''
    timeinput.value=''
    dateinput.value=''
})
function addtask(task){
    const list=document.getElementById("addedtask")
    
    let div=document.createElement('div')
    div.id="newtask-container"
const displaytime=task.time||'00:00'
const displaydate=task.date||'00/00/00'
div.innerHTML=`
<span>${task.name}</span>
<span id="date">${displaydate} date</span>
<span id="time">${displaytime} time</span>
<button onclick="edittask('${task.name}','${displaydate}','${displaytime}')">EDIT</button>
<button onclick="removetask('${task.name}',this.parentNode)">REMOVE</button>`;
list.appendChild(div)


}
function removetask(taskname,container)
{
 let index=tasks.findIndex(task=>task.name===taskname)
 if(index>-1){
    tasks.splice(index,1)
    container.remove(); 
    animate() 
 }
}

function edittask(tn,td,tt){
    const Editmodal=document.getElementById("editask")
    const Editname=document.getElementById("editname")
    const Edittime=document.getElementById("edittime")
    const Editdate=document.getElementById("editdate")

    Editname.value=tn;
    Edittime.value=tt;
    Editdate.value=td;

    Editmodal.style.display="block"
    const savebtn=document.getElementById("save")
    savebtn.onclick=function(){
        const newname=Editname.value;
        const newtime=Edittime.value;
        const newdate=Editdate.value;
        
        const updatename=document.querySelector("#addedtask span")
        const updatedate=document.querySelector("#date")
        const updatetime=document.querySelector("#time")
        updatedate.textContent=`${newdate} date`
        updatename.textContent=newname
        updatetime.textContent=`${newtime} time`
       
        console.log(`New name:${newname},New time:${newtime},New date:${newdate}`)
        
        Editmodal.style.display="none"
    }
    const cancelbtn=document.getElementById("cancel")
    cancelbtn.onclick=function(){
        Editmodal.style.display="none"
    }
}
const canvas=document.querySelector('canvas')
const c=canvas.getContext('2d')


const gravity=0.5

class Player
{
    constructor(){
        this.position={
            x:100,
            y:100
        }
        this.velocity={
            x:0,
            y:1
        }
        this.width=80
        this.height=30
    }
    draw()
    {
        c.fillStyle='black'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)

        c.fillStyle='white'
        c.font='13px Arial'
        c.fillText("CoMpLeTeD",this.position.x+5,this.position.y+20)
    }
    update()
    {
        this.draw()
        this.position.y+=this.velocity.y;
        if(this.position.y+this.height+this.velocity.y<=canvas.height)
        this.velocity.y+=gravity
        else
        this.velocity.y=0
        
    }

}

const player=new Player()


function animate(){
    requestAnimationFrame(animate)
    c.clearRect(0,0,canvas.width,canvas.height)
    player.update()
}
