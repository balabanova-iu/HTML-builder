const fs = require("fs");
const path = require("path");
const readline = require("readline");
const process = require("process");

console.log("Здравствуйте! Введите, пожалуйста, текст:");

let writeStream = fs.createWriteStream(path.join(__dirname, "text.txt"), {
  encoding: "utf-8",
});

const rl = readline.createInterface({
  input: process.stdin,
});

rl.on("line", function (line) {
  if (line == "exit") {
    console.log("Спасибо, что были с нами!");
    rl.close();
  } else {
    writeStream.write(`${line}\n`);
  }
});

process.on("SIGINT", () => {
  console.log("Спасибо, что были с нами!");
  rl.close();
});
