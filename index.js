import inquirer from "inquirer";
let para = await inquirer.prompt({
    type: "input",
    name: "Paragraph",
    message: "Enter your paragraph!",
});
let answer = para.Paragraph.trim().split(" ");
console.log(answer);
console.log(answer.length);
