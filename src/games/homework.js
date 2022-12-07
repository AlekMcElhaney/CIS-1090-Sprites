
//This setup function is called once
//So you can set everything up.
function setup(sprites) {


    //Make sprite zero a little person at 0,0
    sprites[0].image = "🧍🏿";
    sprites[0].x = 10;
    sprites[0].y = 10;


    sprites[1].image = "🥛";
    sprites[1].y = 0;
    sprites[1].x = 300;



}


/**
 * Game function called every frame
 * @param sprites   Array of sprite objects
 * @param t         Time since start of game
 * @param dt        Time since last frame
 * @param up        Is up pressed?
 * @param down      "
 * @param left      "
 * @param right     "
 * @param space     "
 * @returns The current score
 */
function frame(sprites, t, dt, up, down, left, right, space) {


    //Pressing right or left?
    //Move the man.
    if (right) {
        sprites[0].x += dt * 500;
        sprites[0].flipH = true; //And flipH his sprite if he is going right
    } else if (left) {
        sprites[0].x -= dt * 500;
        sprites[0].flipH = false;
    }

    //If you try to run past the ends of the screen
    //it stips you
    if (sprites[0].x < 0)
        sprites[0].x = 0;
    if (sprites[0].x > 750)
        sprites[0].x = 750;

    if (left || right) {
        //Otherwise swap between two poses
       sprites[0].image = (Math.round(t * 10) % 2) ? "🧍🏿" : "🕺🏾";
    } else {
        //Staying still? Use still person
        sprites[0].image = "🧍🏿";
    }
}

export default {
    name: "King Shaka Day",
    instructions: "Left and Right arrows to move, Up to jump, Space to restart.",
    icon: "🥳",
    background: {
        //A more complicated background
        "background-color": "skyblue",
        "background-image": "linear-gradient(#424299, skyblue)",
        "border-bottom": "50px solid green"
    },
    frame,
    setup,
};