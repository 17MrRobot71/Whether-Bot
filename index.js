const token = '6115581967:AAHIC2ud7CsSlhApW_cN5r1AD9qWlBHA-PA';

const { Telegraf } = require('telegraf');
const { message } = require('telegraf/filters');
const axios = require('axios');
const bot = new Telegraf(token);
bot.start((ctx) =>  ctx.reply('Welcome, write /help'));
bot.help((ctx) => ctx.reply('Give your IP'));
bot.on('message', async (ctx)=>{

if(ctx.message.location){
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${ctx.message.location.latitude}&lon=${ctx.message.location.longitude}&appid=d67555f5f8266dfbe6b48163dadc9795`
  

  console.log(ctx.message.location);
  const response = await axios.get(url);
console.log(response);
ctx.reply('City' + `${response.data.name}` );


ctx.reply( 'Temp:' + `${response.data.main.temp}`+'F');
}
 

})
bot.launch();


process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));