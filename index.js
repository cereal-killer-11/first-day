#!/usr/bin/env node

import { program } from "commander";
import chalk from "chalk";
import inquirer from "inquirer";
import ora from "ora";
import figlet from "figlet";
import { after } from "node:test";

program.version("1.0.0").description("myden hasu peli");
// testi
program.action(() => {
  console.log(
    chalk.red(figlet.textSync("first day", { horizontalLayout: "full" }))
  );
  inquirer
    .prompt([
      {
        type: "list",
        name: "choice",
        message: " you are in bed. its the first day of school, you are going to the seventh grade! :",
        choices: ["wake up", "go back to sleep",],
      },
    ])
    .then((result) => {
      if (result.choice === "go back to sleep") {
        sleepEnd()
      }

        if (result.choice === "wake up") {
          wakeup()
        }
      


    });
});

program.parse(process.argv);



function sleepEnd() {
  const spinner = ora(`...`).start(); // Start the spinner

  setTimeout(() => {
    spinner.fail("you were late to school END");
  }, 1500); 
}


function wakeup() {
  const spinner = ora(`...`).start(); // Start the spinner

  setTimeout(() => {
    spinner.succeed("you wake up");
  }, 1500); 
} 