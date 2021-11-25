mustacheX=0;
mustacheY=0;

function preload() {
  img=loadImage("https://i.postimg.cc/rsypXq4M/mustache-11563112496btuk1vqglh.png")
}
function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}
function modelLoaded() {
  console.log('PoseNet Is Initialized');
}
function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("nose x = " + mustacheX);
    console.log("nose y = " + mustacheY);
  }}
function draw() {
  image(video, 0, 0, 300, 300);
  image(img, mustacheX-15, mustacheY, 30, 30);
}
function take_snapshot(){    
  save('myFilterImage.png');
}