function setup()
{
    canvas = createCanvas(450, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(550, 500);
    video.hide();
}

function draw()
{
    image(video, 0, 0, 450, 400);

    fill(252, 173, 3);
    stroke(252, 173, 3);
    circle(25, 25, 50);
    circle(425, 25, 50);
    circle(425, 375, 50);
    circle(25, 375, 50);


    fill(16, 118, 125);
    stroke(16, 118, 125);
    rect(12, 50, 30, 90, 13);
    rect(11, 260, 30, 90, 13);
    rect(410, 50, 30, 90, 13);
    rect(410, 260, 30, 90, 13);
    rect(50, 10, 90, 30, 13);
    rect(50, 365, 90, 30, 13);
    rect(310, 10, 90, 30, 13);
    rect(310, 365, 90, 30, 13);
}

function take_snap()
{
    save("pic.png")
}