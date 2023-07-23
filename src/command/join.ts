import { Context, Markup } from "telegraf";

export const JoinMessageReplyText = `
Here, you will have access to real-time updates on new features, trading pairs, and other important news. Join our Storm trade channel now!`

export const FeedbackMessageReplyText = `
Did you encounter a bug or want to leave feedback? Let us know, we'd really appreciate it!`

const ReplyMarkup = Markup.inlineKeyboard([
  {
    text: "Join Chat",
    url: "https://t.me/storm_trade_fam"
  }
])

const ReplyMarkupFeedback = Markup.inlineKeyboard([
  {
    text: "Open form",
    url: "https://forms.gle/RMnd78eNtbTJuovn6"
  }
])

export const feedback = (ctx: Context) => {
  return ctx.reply(FeedbackMessageReplyText, {
    reply_markup: ReplyMarkupFeedback.reply_markup
  })
}

export const join = (ctx: Context) => {
  return ctx.reply(JoinMessageReplyText, {
    reply_markup: ReplyMarkup.reply_markup
  })
}