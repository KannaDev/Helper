import {
  ChatInputApplicationCommandData,
  CommandInteraction,
  CommandInteractionOptionResolver,
  GuildMember,
  PermissionResolvable,
} from "discord.js";
import { Helper } from "../structures/Client";

export interface Extendedinteraction extends CommandInteraction {
  member: GuildMember;
}
interface RunOptions {
  client: Helper;
  interaction: Extendedinteraction;
  args: CommandInteractionOptionResolver;
}
type RunFun = (options: RunOptions) => any;
export type CommandType = {
  userPermissions?: PermissionResolvable[];
  run: RunFun;
} & ChatInputApplicationCommandData;
