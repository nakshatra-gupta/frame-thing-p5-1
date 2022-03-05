function preload()
{

}

function setup()
{
canvas = createCanvas(350, 300);
canvas.center();
}

function draw()
{
fill(10,20, 80);
rect(0, 0, 30, 350 , 20);
rect(320, 0, 30 , 350, 20);
rect(0, 0, 350, 30, 20);
rect(0, 270, 350, 30, 20);
}
