import { Command } from "commander";
import greet from "./commands/greet";
import fetchData from "./commands/fetch";
import readFile from "./commands/read";

const program = new Command();

program
  .name("ninja-utility")
  .description("A powerful ninja command-line tool 🥷")
  .version("1.0.0");

program
  .command("greet")
  .description("Display a greeting message")
  .argument("[name]", "Name to greet")
  .action(greet);

program
  .command("fetch")
  .description("Fetch data from a public API")
  .action(fetchData);

program
  .command("read")
  .description("Read a file")
  .argument("<filepath>", "Path to the file")
  .action(readFile);

program.parse(process.argv);