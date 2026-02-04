
//Populate Gallery with Random Placeholder Images
const galleryItems = document.querySelectorAll('.zoom-inner');
//const src = 'https://lorempixel.com/600/400/city/';
const src = [
"glitch-assets/gameMechanics_staticenemies.jpg?v=1592768834080",
"glitch-assets/gameMechanics_jumping.jpg?1551473692625",
"glitch-assets/gameMechanics_doublejump.jpg?v=1592768831396",
"glitch-assets/gameMechanics_animatedenemies.jpg?v=1592768828722",
"glitch-assets/gameMechanics_patrollingenemies.jpg?v=1592768825863",
"glitch-assets/gameMechanics_followingenemies.jpg?v=1592768820330",
"glitch-assets/gamemechanic_extralives_800.png?1552402556128",
   ];
//console.log(src)

// const gm_description = [
// "Extra lives for your player and a graphic to show how many are left",
//   "Enemies that move around the screen, using the tween keyword",
// "Jump on enemies to zap them",
// "Add a countdown timer to add more challenge to your game",
// "Make player jumps higher if you press jump button longer",
// "Player only gets zapped if enemies touch a middle section",
// "Player health bar goes down when zapped for chalenging games",
//    ];


const gm_book = [
"https://3m-makecode.flossmanuals.net/docs/3_mechanics/addhazard",
"https://3m-makecode.flossmanuals.net/docs/3_mechanics/jumponenemies",
"https://3m-makecode.flossmanuals.net/docs/3_mechanics/doublejump",
"https://3m-makecode.flossmanuals.net/docs/3_mechanics/movingenemiesanimated",
"https://3m-makecode.flossmanuals.net/docs/3_mechanics/movingenemiespatrolling",
"https://3m-makecode.flossmanuals.net/docs/3_mechanics/movingenemiesfollowing",
"https://3m-makecode.flossmanuals.net/docs/3_mechanics/addLives",
   ];

galleryItems.forEach((item,i) => item.style.backgroundImage = `url(${src[i]})`);
//galleryItems.forEach((item,i) => item.setAttribute("title1" , `${gm_description[i]}`));

galleryItems.forEach(function(item,i) {
    item.addEventListener("click", function(event) {
       window.open(`${gm_book[i]}`)
    });
});


const polishItems = document.querySelectorAll('.zoom-inner_2');

//console.log(polishItems)

const polish_src = [
"glitch-assets/game_polish_graphical_effect.jpg?v=1592769469073",
"glitch-assets/game_polish_new_sounds.jpg?1551524948349",
"glitch-assets/game_polish_soundtrack.png?1551473693380",
"glitch-assets/game_polish_storywithmessages.jpg?v=1592769466732",
"glitch-assets/game_polish_animate.jpg?1551523720117",
"glitch-assets/game_polish_makeplayerimmune.jpg?v=1592769463886",
   ];

// const polish_description = [
// "Add new sound effects you have created to your game",
// "Animate your player so it looks like it's running",
// "Add a music soundtrack to play while game is running",
// "Show when your player gets zapped with a dying animation",
// "Screen shakes when player gets zapped for shock value",
// "Create Explosions when something gets zapped",
//    ];



const polish_book = [
"https://3m-makecode.flossmanuals.net/docs/4_polish/simplegraphicaleffects",
"https://3m-makecode.flossmanuals.net/docs/4_polish/soundeffects",
"https://3m-makecode.flossmanuals.net/docs/4_polish/soundtrack",
"https://3m-makecode.flossmanuals.net/docs/4_polish/addmessages",
"https://3m-makecode.flossmanuals.net/docs/4_polish/animateplayer",
"https://3m-makecode.flossmanuals.net/docs/4_polish/makeplayerimmune",
   ];


polishItems.forEach((item,i) => item.style.backgroundImage = `url(${polish_src[i]})`);
//polishItems.forEach((item,i) => item.setAttribute("title1" , `${polish_description[i]}`));


//galleryItems.forEach((item,i) => item.setAttributeNode(att);  = onclick="window.location='link[i]})`);

polishItems.forEach(function(item,i) {
    item.addEventListener("click", function(event) {
       window.open(`${polish_book[i]}`)
    });
});


const spaceItems = document.querySelectorAll('.zoom-inner_3');

//console.log(polishItems)

const space_src = [
"glitch-assets/gameSpace_leveldesign.jpg?v=1592769886123",
"glitch-assets/gameSpace_moreLevels.jpg?1553025336947",
"glitch-assets/gameSpace_gameSize.jpg?1553025336727",
  "glitch-assets/gameSpace_background_image.jpg?1553025336829",
"glitch-assets/gameSpace_keysDoors.jpg?1553025337108",
   ];

// const space_description = [
// "Add your own background image to set the scene",
// "Add more levels to your game to increase the challenge",
// "Increase the size of your game so that it scrolls when player moves",
// "Resize your player and other sprites in your game",
// "Create a Game Over screen when your player gets zapped",
// "Make players to collect keys to open doors to progress",
// "Created an animated opening scene to give starting info",
//    ];


const space_book = [
"https://3m-makecode.flossmanuals.net/docs/5_space/changeleveldesign",
"https://3m-makecode.flossmanuals.net/docs/5_space/addlevels",
"https://3m-makecode.flossmanuals.net/docs/5_space/changelevelshape",
"https://3m-makecode.flossmanuals.net/docs/5_space/changebackgroundimage",
"https://3m-makecode.flossmanuals.net/docs/5_space/keyanddoor",

   ];


spaceItems.forEach((item,i) => item.style.backgroundImage = `url(${space_src[i]})`);
//spaceItems.forEach((item,i) => item.setAttribute("title1" , `${space_description[i]}`));

//galleryItems.forEach((item,i) => item.setAttributeNode(att);  = onclick="window.location='link[i]})`);

spaceItems.forEach(function(item,i) {
    item.addEventListener("click", function(event) {
       window.open(`${space_book[i]}`)
    });
});


const challengeItems = document.querySelectorAll('.zoom-inner_4');

//console.log(polishItems)

const challenge_src = [
"glitch-assets/gameChallenge_gainpoints.jpg?v=1592766950711",
"glitch-assets/gameChallenge_countdown.jpg?v=1592766953452",
"glitch-assets/gameChallenge_collectallfood.jpg?v=1592766946782",
"glitch-assets/gameChallenge_poweruphigherjump.jpg?v=1592766944082",
"glitch-assets/gameChallenge_powerupspeed.jpg?v=1592766941055",
"glitch-assets/gameChallenge_doublingenemies.jpg?v=1592766936864",
   ];

// const challenge_description = [
// "Add your own background image to set the scene",
// "Add more levels to your game to increase the challenge",
// "Increase the size of your game so that it scrolls when player moves",
// "Resize your player and other sprites in your game",
// "Create a Game Over screen when your player gets zapped",
// "Make players to collect keys to open doors to progress",
// "Created an animated opening scene to give starting info",
//    ];


const challenge_book = [
"https://3m-makecode.flossmanuals.net/docs/6_challenge/collectpoints",
"https://3m-makecode.flossmanuals.net/docs/6_challenge/addtimer",
"https://3m-makecode.flossmanuals.net/docs/6_challenge/collectallfood",
"https://3m-makecode.flossmanuals.net/docs/6_challenge/powerupjump",
"https://3m-makecode.flossmanuals.net/docs/6_challenge/powerupspeed",
"https://3m-makecode.flossmanuals.net/docs/6_challenge/randomdoublingenemies",
   ];


challengeItems.forEach((item,i) => item.style.backgroundImage = `url(${challenge_src[i]})`);
//challengeItems.forEach((item,i) => item.setAttribute("title1" , `${challenge_description[i]}`));

//galleryItems.forEach((item,i) => item.setAttributeNode(att);  = onclick="window.location='link[i]})`);

challengeItems.forEach(function(item,i) {
    item.addEventListener("click", function(event) {
       window.open(`${challenge_book[i]}`)
    });
});
