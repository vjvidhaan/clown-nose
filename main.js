
noseX=0;
noseY=0;

function preload(){
clown_nose = loadImage("https://i.postimg.cc/kgPVS05W/clown-nose-png-banner-free-zoya-nail-polish-11562929643cbk7y27xbe-removebg-preview.png")
}

function setup(){
  canvas = createCanvas(300,300);
  canvas.center();
  video=createCapture(VIDEO)
  video.size(300,300);
  video.hide();
  poseNet = ml5.poseNet(video,modelLoaded);
  poseNet.on('pose', gotPoses);

}



function gotPoses(results){
  if(results.length > 0){
console.log(results);
 noseX = results[0].pose.nose.x;
 noseY = results[0].pose.nose.y;
console.log("nose x =" +nosX);
console.log("nose y ="+noseY );
}
}





function modelLoaded(){
  console.log("poseNet loaded!");
}


function draw(){
image(video, 0, 0, 300, 300);

image(clown_nose, noseX, noseY, 30, 30);
}

function takeSnapshot(){
    save("filter.jpg");
}
