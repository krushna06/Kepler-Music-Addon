const {
  CommandInteraction,
  PermissionFlagsBits,
  ApplicationCommandType,
} = require("discord.js");
const KEPLER = require("../../../handlers/Client");
const { Queue } = require("distube");

module.exports = {
  name: "resume",
  description: `Resume the paused song.`,
  userPermissions: PermissionFlagsBits.Connect,
  botPermissions: PermissionFlagsBits.Connect,
  category: "Music",
  cooldown: 5,
  type: ApplicationCommandType.ChatInput,
  inVoiceChannel: true,
  inSameVoiceChannel: true,
  Player: true,
  djOnly: true,

  /**
   *
   * @param {KEPLER} client
   * @param {CommandInteraction} interaction
   * @param {String[]} args
   * @param {Queue} queue
   */
  run: async (client, interaction, args, queue) => {
    // Code
    if (queue.paused) {
      queue.resume();
      client.embed(
        interaction,
        `${client.config.emoji.SUCCESS} Queue Resumed !!`
      );
    } else {
      client.embed(
        interaction,
        `${client.config.emoji.ERROR} Queue already Resumed !!`
      );
    }
  },
};
