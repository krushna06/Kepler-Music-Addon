require("dotenv").config();
const fs = require("fs");
const KEPLER = require("./handlers/Client");
const { TOKEN } = require("./settings/config");

const client = new KEPLER();

module.exports = client;

// Function to register slash commands
const registerCommands = async () => {
  const slashCommandsFolder = "./Commands/Slash";

  // Read all files in the Slash Commands folder
  const commandFiles = fs.readdirSync(slashCommandsFolder).filter(file => file.endsWith(".js"));

  for (const file of commandFiles) {
    try {
      const command = require(`${slashCommandsFolder}/${file}`);
      client.commands.set(command.name, command);

      // Register the command globally
      await client.application.commands.create(command.data);
      console.log(`Slash command ${command.name} registered.`);
    } catch (error) {
      console.error(`Error registering slash command from file ${file}:`, error);
    }
  }
};

client.once("ready", async () => {
  console.log(`Logged in as ${client.user.tag}`);
  
  // Register slash commands when the bot is ready
  await registerCommands();
});

client.start(TOKEN);

process.on("unhandledRejection", (reason, p) => {
  console.log(" [Error_Handling] :: Unhandled Rejection/Catch");
  console.log(reason, p);
});

process.on("uncaughtException", (err, origin) => {
  console.log(" [Error_Handling] :: Uncaught Exception/Catch");
  console.log(err, origin);
});

process.on("uncaughtExceptionMonitor", (err, origin) => {
  console.log(" [Error_Handling] :: Uncaught Exception/Catch (MONITOR)");
  console.log(err, origin);
});
