#!/usr/bin/env node

import { program } from "commander";
import chalk from "chalk";
import inquirer from "inquirer";
import ora from "ora";
import figlet from "figlet";
import { after } from "node:test";

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
        message: " you are in bed. its the first day of school, you are going to the seventh grade! :",
        choices: ["wake up", "slep",],
      },
    ])
    .then((result) => {
      const spinner = ora(`kalkuloidaan anseria...`).start(); // Start the spinner

      setTimeout(() => {
        spinner.succeed(chalk.green("Ok!"));
      }, 3000);
    });
});

program.parse(process.argv);