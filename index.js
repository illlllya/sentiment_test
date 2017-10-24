var sentiment = require('sentiment');

var string = "Loving you is something I just can't stop. There is no controlling my heart. It has yearned for you for so long, the only song I sing is of you. In every cell of my body; in every corner of my being my love for you fills me.";

var r1 = sentiment(string);

console.log(string + '\n');
console.dir(r1); 