var s = document.createElement('script');
// s.src = "script.js";
s.innerHTML = "document.addEventListener('keydown', function(event) {" +
    "if (event.keyCode == 81) {  /* Q */" +
        "ball.velY = ball.velY == 0 ? 5 : 0; " +
    "}" +
    "else if (event.keyCode == 69) { /* E */" +
        "ball.velX = ball.velX == 0 ? 5 : 0;" +
    "}" +
    "else if (event.keyCode == 32) { /* Space */" +
        "ball.velX = 0;" +
        "ball.velY = 0;" +
    "}" +
    "else if (event.keyCode == 87) { /* W */" +
        "Score += 10;" +
        "ph = Score / 10;" +
    "}" +
    "else if (event.keyCode == 72) { /* H */ " +
        "localStorage.HighScore = 0;" +
    "}" +
    "else if (event.keyCode == 83) { /* S */" +
        "ball.y += .5;" +
    "}" +
"});";
// window.alert(1);
(document.head || document.documentElement).appendChild(s);

// function f() {
//     document.addEventListener("keydown", function(event) {
//         if (event.keyCode == 87) {
//             ball.velY = ball.velY == 0 ? 5 : 0; 
//         }
//         else if (event.keyCode == 83) {
//             ball.velX = ball.velX == 0 ? 5 : 0; 
//         }
//         else if (event.keyCode == 32) {
//             ball.velX = 0;
//             ball.velY = 0;
//         }
//     });
// }