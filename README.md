# 💾  Kepler Music Addon
This is a simple Discord music addon which uses [discord.js](https://discord.js.org/#/).

The addon has some handy built-in features which are described in the next section.

*Note: This supports slash commands as well as prefix but will soon be migrated so slash only.*

## 🎛 Features
- [Dynamic event handler](/handlers/handler.js)
- [Command handler](handlers/functions.js)
- [Distube events](handlers/DistubeEvents.js)
- [Database handler](handlers/Database.js)
- and more...

Everything is described in its respective folder inside the `/` folder which contains all the addon's code. 

## Requirements, Installation & Usage:

- Should atleast have `node v16` or higher.
- Install the packages using `npm i`.
- Rename `env.example` & fill in the credentials in `.env`.
- You can customize the addon through `settings/config.js`.
- Start the addon using `node index.js`.


## command.example.js
```js
// chat input slash commands
const { CommandInteraction, ApplicationCommandType } = require("discord.js");
const GLORY = require("../../../handlers/Client");
const { Queue } = require("distube");

module.exports = {
  name: "",
  description: ``,
  userPermissions: [],
  botPermissions: [],
  category: "",
  cooldown: 10,
  type: ApplicationCommandType.ChatInput,
  inVoiceChannel: false,
  inSameVoiceChannel: false,
  Player: false,
  djOnly: false,

  /**
   *
   * @param {GLORY} client
   * @param {CommandInteraction} interaction
   * @param {String[]} args
   * @param {Queue} queue
   */
  run: async (client, interaction, args, queue) => {
    // Code
  },
};

// message input slash commands
const {
  ContextMenuCommandInteraction,
  ApplicationCommandType,
} = require("discord.js");
const GLORY = require("../../../handlers/Client");

module.exports = {
  name: "",
  category: "",
  type: ApplicationCommandType.Message,
  /**
   *
   * @param {GLORY} client
   * @param {ContextMenuCommandInteraction} interaction
   */
  run: async (client, interaction) => {
    // Code
  },
};

// user slash commands

const {
  ContextMenuCommandInteraction,
  ApplicationCommandType,
} = require("discord.js");
const GLORY = require("../../../handlers/Client");

module.exports = {
  name: "",
  category: "",
  type: ApplicationCommandType.User,
  /**
   *
   * @param {GLORY} client
   * @param {ContextMenuCommandInteraction} interaction
   */
  run: async (client, interaction) => {
    // Code
  },
};

// message commands
const { Message } = require("discord.js");
const GLORY = require("../../../handlers/Client");
const { Queue } = require("distube");

module.exports = {
  name: "",
  aliases: [],
  description: ``,
  userPermissions: [],
  botPermissions: [],
  category: "",
  cooldown: 10,
  inVoiceChannel: false,
  inSameVoiceChannel: false,
  Player: false,
  djOnly: false,

  /**
   *
   * @param {GLORY} client
   * @param {Message} message
   * @param {String[]} args
   * @param {String} prefix
   * @param {Queue} queue
   */
  run: async (client, message, args, prefix, queue) => {
    // Code
  },
};
```
## ❗ Disclaimer
I don't provide any coding assistance, here are some useful Discord servers for that:
- [Discord.js](https://discord.gg/bRCvFy9)
- [Discord.js-light](https://discord.gg/BpeedKh)
- [Discord API](https://discord.gg/discord-api)
- [Programmer humor](https://discord.gg/yFJDGVT6eq)