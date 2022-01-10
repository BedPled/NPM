const RandomTextGenerator = require("random-text-generator");

let randomTextGenerator = new RandomTextGenerator();

const usernames = [
    "pupa", "lupa", "za", "biba", "boba", "a", "mogus", "chiki", "bumbony",
    "chill", "relax", "flex", "display", "Alexander", "Boris", "Andrew", "Egor"
];

for (const item of usernames) { randomTextGenerator.learn(item) }
const newUsernamesLearn = new Set()

for (let i = 0; i < usernames.length**10; ++i) { newUsernamesLearn.add(randomTextGenerator.generate()) }

newUsernamesLearn.forEach(item => {
    console.log(item)
} )
