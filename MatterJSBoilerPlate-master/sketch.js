const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var mangoe1;
var platform;
var bird, slingShot;



function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    mangoe1 = new Mangoes(600,200);
    
}

function draw(){
    background("white");
    Engine.update(engine);

}

