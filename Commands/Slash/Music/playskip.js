const {
  CommandInteraction,
  PermissionFlagsBits,
  ApplicationCommandType,
  ApplicationCommandOptionType,
} = require("discord.js");
const KEPLER = require("../../../handlers/Client");
const { Queue } = require("distube");

module.exports = {
  name: "playskip",
  description: `Skip the current song and play new one.`,
  userPermissions: PermissionFlagsBits.Connect,
  botPermissions: PermissionFlagsBits.Connect,
  category: "Music",
  cooldown: 5,
  type: ApplicationCommandType.ChatInput,
  inVoiceChannel: true,
  inSameVoiceChannel: true,
  Player: false,
  djOnly: false,
  options: [
    {
      name: "song",
      description: `song Name/Link`,
      type: ApplicationCommandOptionType.String,
      required: true,
    },
  ],

  /**
   *
   * @param {KEPLER} client
   * @param {CommandInteraction} interaction
   * @param {String[]} args
   * @param {Queue} queue
   */
  run: async (client, interaction, args, queue) => {
    // Code
    let song = interaction.options.getString("song");
    let { channel } = interaction.member.voice;
    client.distube.play(channel, song, {
      member: interaction.member,
      textChannel: interaction.channel,
      skip: true,
    });
    interaction.followUp({
      content: `Searching \`${song}\``,
      ephemeral: true,
    });
  },
};
