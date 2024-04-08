import process from "node:process";
import figlet from "figlet";
import chalk from "chalk";
import { cac } from "cac";

interface FindMe {
  title: string;
  url: string;
}

const findMe: FindMe[] = [
  { title: "Home", url: "https://keke.cc" },
  { title: "GitHub", url: "https://github.com/Bernankez" },
];

function resolveArgs() {
  const cli = cac("bernankez");
  cli.version("4.2.0").help();
  const result = cli.parse(process.argv);
  return result.options;
}

function main() {
  console.log(chalk.redBright(figlet.textSync("Bernankez", "Puffy")));
  const maxLength = findMe.reduce((prev, cur) => prev.title.length > cur.title.length ? prev : cur).title.length;
  findMe.forEach((item) => {
    console.log(chalk.redBright(`${item.title}:${"".padStart(maxLength - item.title.length, " ")}`), chalk.underline(item.url));
  });
  console.log("");
}

function bernankez() {
  const args = resolveArgs();
  if (!args.help && !args.version) {
    main();
  }
}

bernankez();
