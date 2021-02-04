const VkBot = require('node-vk-bot-api');
const bot = new VkBot('VK_GROUP_TOKEN');
bot.on((ctx) => {
    var out = ""
    ctx.message.attachments.forEach(e => {
        if(e.type == 'audio') {
            var url = "https://ikysu.tk/i/?i="+new Buffer(JSON.stringify({"artist":e.audio.artist, "title":e.audio.title, "url":e.audio.url})).toString('base64') // Сразу скачивает, не открывая плеер (index.php)
            out += "\n\n"+e.audio.artist+" - "+e.audio.title+"\n"+url
        }
    });
    bot.sendMessage(ctx.message.peer_id, out)
});
bot.startPolling();
