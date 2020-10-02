const Discord = require('discord.js');
const client = new Discord.Client();
'use strict';
let https = require('https');

let response_handler = function (response) {
    let body = '';
    response.on('data', function (d) {
        body += d;
    });
    response.on('end', function () {
        let imageResults = JSON.parse(body);
        if (imageResults.value.length > 0) {
            // let firstImageResult = imageResults.value[0];
            // console.log(`Image result count: ${imageResults.value.length}`);
            // console.log(`First image insightsToken: ${firstImageResult.imageInsightsToken}`);
            // console.log(`First image thumbnail url: ${firstImageResult.thumbnailUrl}`);
            // console.log(`First image web search url: ${firstImageResult.webSearchUrl}`);
            const channel = client.channels.cache.get(msg.channel);
            channel.send(imageResults[0].thumbnailUrl);
        }
        else {
            console.log("Couldn't find image results!");
}



    });
    response.on('error', function (e) {
        console.log('Error: ' + e.message);
    });
};

function getImage(image, channel){
    let request_params = {
        method : 'GET',
        hostname : host,
        path : path + '?q=' + encodeURIComponent(search),
        headers : {
            'Ocp-Apim-Subscription-Key' : subscriptionKey,
        }
    };

    console.log(request_params.path);

    let req = https.request(request_params, response_handler);
    req.end();
}

client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
 });

client.on('message', msg => {
 if (msg.content.includes("!gi")) {
    var temp = msg.content.split("!gi ")
    var temp = getImage(temp, msg.channel);
    
 };
 });

client.login('YOUR KEY HERE');