function roll(){
    // window.alert("I'm an alert") == alert("I'm an alert!")
    // EVERYTHING belongs to the window
    // .log on an html thing will show you html
    // .dir on an html thing will you the html as a js object
    //  document is an object that belongs to the window which houses the html
    var rand1 = Math.ceil(Math.random() * 6);
    var rand2 = Math.ceil(Math.random() * 6);
    var score = rand1 + rand2;
    // the dice imaes are dN.gif
    // we have two random numbers for the N
    // first ... get the dice html thing
    var dice = document.getElementById("dice");
    var die1 = dice.children[0];
    var die2 = dice.children[1];
    die1.src = `dragon-assets/d${rand1}.gif`;
    die2.src = `dragon-assets/d${rand2}.gif`;

    if (score > 8){
        console.log("you won");
        var dragon = document.getElementById("dragon");
        dragon.children[0].src = `dragon-assets/slainDragon.jpg`;
        dragon.children[0].style.height = "200px";
        dragon.children[0].style.width = "200px";
        } else {
        console.log("you lost");
    }
};

document.getElementById("rollButton").addEventListener("click", roll);