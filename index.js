#!/usr/bin/env node

import { program } from "commander";
import chalk from "chalk";
import inquirer from "inquirer"; //myderulez :D
import ora from "ora";
import figlet from "figlet";

var isBreakfastEaten = false;
var istThereclothes = false;
var areTheTeethBrushed = false;

program.version("1.0.0").description("myden hasu peli");
program.action(() => {
  console.log(
    chalk.red(figlet.textSync("first day", { horizontalLayout: "full" }))
  );
  inquirer
    .prompt([
      {
        type: "list",
        name: "choice",
        message:
          " you are in bed. its the first day of school, you are going to the seventh grade! :",
        choices: ["wake up", "go back to sleep"],
      },
    ])
    .then((result) => {
      if (result.choice === "go back to sleep") {
        sleepEnd();
      }

      if (result.choice === "wake up") {
        wakeup();
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

async function showSpinner(message) {
  const spinner = ora(`...`).start(); // Start the spinner
  await new Promise((r) => setTimeout(r, 1000));
  spinner.succeed(message);
  return;
}

async function wakeup() {
  await showSpinner("You woke up");
  inquirer
    .prompt([
      {
        type: "list",
        name: "choice",
        message: "Choose what to do next",
        choices: ["eat", "put on clothes", "brush teeth", "leave for school"],
      },
    ])
    .then((result) => {
      if (result.choice === "eat") {
        isBreakfastEaten = true;
        eat();
      }

      if (result.choice === "brush teeth") {
        const spinner = ora(`...`).start(); // Start the spinner
        setTimeout(() => {
          spinner.succeed("your theeth are squeky clean");
        }, 1500);
      }

      if (result.choice === "leave for school") {
        AreThingsDone();
        const spinner = ora(`...`).start(); // Start the spinner
        setTimeout(() => {
          spinner.succeed("you left for school");
        }, 1500);
      }
    });
}

async function eat() {
  await showSpinner("you ate porrige");
  inquirer
    .prompt([
      {
        type: "list",
        name: "choice",
        message: "Choose what to do next",
        choices: ["put on clothes", "brush teeth", "leave for school"],
      },
    ])
    .then((result) => {
      if (result.choice === "leave for school") {
        if(AreThingsDone()) {
          const spinner = ora(`...`).start(); // Start the spinner
          setTimeout(() => {
            spinner.succeed("you left for school");
          }, 1500);
        }    

      }
    });
}

function AreThingsDone() {
  if (istThereclothes === false) {
    const spinner = ora(`...`).start(); // Start the spinner
    setTimeout(() => {
      spinner.fail("you are naked");
    }, 1500);
    return false;
  }
  if (isBreakfastEaten === false) {
    const spinner = ora(`...`).start(); // Start the spinner
    setTimeout(() => {
      spinner.fail("you didn't eat");
    }, 1500);
    return false;
  }
  if (areTheTeethBrushed === false) {
    const spinner = ora(`...`).start(); // Start the spinner
    setTimeout(() => {
      spinner.fail("your breath smells");
    }, 1500);
    return false;
  }
  return true
}
