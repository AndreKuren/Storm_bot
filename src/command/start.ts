import { Context, Markup, } from "telegraf";
import { ForBugAndFeedback, JoinMessage } from "../message";


const StartKeyboard = Markup.keyboard([
  [
    {
      text: "⚡️ Trade now",
      web_app: {
        url: `https://stormtrade.dev/trade/ATOM_USDT`
      }
    },

    {
      text: "📈 Portfolio",
      web_app: {
        url: `https://stormtrade.dev/portfolio`
      }
    },
  ],
  [
    {
      text: "🛎️ Last Position Actions",
      web_app: {
        url: `https://stormtrade.dev/trade/ATOM_USDT`
      }
    },

    {
      text: "💰 Get test USDT",
      web_app: {
        url: `https://stormtrade.dev/giver`
      }
    },
  ],
  [
    {
      text: ForBugAndFeedback,
    },
    {
      text: JoinMessage,
    },
  ]
])

export const trade = (ctx: Context) => {
  return ctx.reply(
    'Welcome to Storm Trade testnet! 👋 \n' +
    'Connect testnet TON wallet, get USDT by Faucet👇 and start your trade! ⚡️',
    {
      reply_markup: StartKeyboard
        .resize(false)
        .oneTime(true)
        .reply_markup
    },
  )
}

export const start = (ctx: Context) => {
  return ctx.reply(
    'Welcome to Storm Trade testnet! 👋 \n' +
    'Connect testnet TON wallet, get USDT by Faucet👇 and start your trade! ⚡️',
    {
      reply_markup: StartKeyboard
        .resize(false)
        .oneTime()

        .reply_markup
    },
  )
}