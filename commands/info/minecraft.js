const util = require('minecraft-server-util');
 
module.exports = {
    name: 'mcserver',
    description: 'get information about a minecraft server',
    execute(client, message, args, Discord){
        if(!args[0]) return message.channel.send('Please enter a minecraft server ip');
        if(!args[1]) return message.channel.send('Please enter a minecraft server port');
 
        util.status(args[0], {port: parseInt(args[1])}).then((response) =>{
            console.log(response);
            const embed = new Discord.MessageEmbed()
            .setColor('#2F3136')
            .setTitle('Mc server status')
            .setURL('https://discord.com/api/oauth2/authorize?client_id=950623217914101761&permissions=8&scope=bot')
            .setDescription('Click on the title For Inviting me!✅')
            .addFields(
                {name: 'Server IP', value: response.host},
                {name: 'Online Players', value: response.onlinePlayers},
                {name: 'Max Players', value: response.maxPlayers},
                {name: 'Version', value: response.version}
            )
            .setFooter('HYPER MC BOT');
 
            message.channel.send(embed);
        })
        .catch ((error) =>{
            message.channel.send('there was an error finding this server');
            throw error;
        })
    }
}