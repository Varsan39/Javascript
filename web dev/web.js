const canvas=document.querySelector('canvas')
const c=canvas.getContext('2d')
canvas.width=innerWidth
canvas.height=innerHeight

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
animate()