import 'dotenv/config'
import { Telegraf } from 'telegraf'
import { start, trade } from "./command/start";

import { ForBugAndFeedback, JoinMessage } from "./message";
import { feedback, join } from "./command/join";

const TOKEN = process.env.TOKEN!
const bot = new Telegraf(TOKEN);


bot.use(Telegraf.log())

// text messages
bot.hears(ForBugAndFeedback, feedback)
bot.hears(JoinMessage, join);

// commands
bot.command("trade", trade)
bot.start(start)

bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
