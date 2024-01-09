const {
  CommandInteraction,
  PermissionFlagsBits,
  ApplicationCommandType,
} = require("discord.js");
const KEPLER = require("../../../handlers/Client");
const { Queue } = require("distube");

module.exports = {
  name: "replay",
  description: `Replay the current song.`,
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
    queue.seek(0);
    client.embed(
      interaction,
      `${client.config.emoji.SUCCESS} Replaying Track !!`
    );
  },
};
