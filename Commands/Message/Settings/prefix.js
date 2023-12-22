const { Message, PermissionFlagsBits } = require("discord.js");
const KEPLER = require("../../../handlers/Client");
const { Queue } = require("distube");
const { PREFIX } = require("../../../settings/config");

module.exports = {
  name: "prefix",
  aliases: ["prefix", "setprefix"],
  description: `change prefix of current server`,
  userPermissions: PermissionFlagsBits.ManageGuild,
  botPermissions: PermissionFlagsBits.ManageGuild,
  category: "Settings",
  cooldown: 5,
  inVoiceChannel: false,
  inSameVoiceChannel: false,
  Player: false,
  djOnly: false,

  /**
   *
   * @param {KEPLER} client
   * @param {Message} message
   * @param {String[]} args
   * @param {String} prefix
   * @param {Queue} queue
   */
  run: async (client, message, args, prefix, queue) => {
    // Code
    let options = args[0];
    switch (options) {
      case "set":
        {
          let nPrefix = args[1];
          if (!nPrefix) {
            return client.embed(
              message,
              ``
            );
          } else {
            await client.music.set(`${message.guildId}.prefix`, nPrefix);
            client.embed(
              message,
              ``
            );
          }
        }
        break;
      case "reset":
        {
          await client.music.set(`${message.guildId}.prefix`, PREFIX);
          client.embed(
            message,
            ``
          );
        }
        break;

      default:
        {
          client.embed(
            message,
            ``
          );
        }
        break;
    }
  },
};
