function setup() {
canvas = createCanvas(screen_width, screen_height-150)
canvas.position();
video = createCapture(VIDEO);
video.size(475, 500);
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function gotPoses (results)
{
if(results.length > 0)
{
    console.log(results);
}
}

function modelLoaded ()
{
console.log("PoseNet model has been loaded.");
}



   