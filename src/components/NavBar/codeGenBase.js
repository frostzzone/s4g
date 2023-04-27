export default (code) => {
  //logic here
  let blockImports = '';
  let preBlockly = '';
  
  return `(async() => {
  // Default Imports
  const process = require('process');

  // Block Imports
  ${blockImports}
  
  // Define s4g Componets
  let s4g = {
    guilded: require("guilded.js"),
    client: null,
    isOnline: false
  };

  // Crash handler
  process.on('uncaughtException', function (err) {
  if(err.context == "[WS] Gateway Error" && !s4g.isOnline){
    console.log('A problem occured with the bot, Did you provide a valid bot token?');
  } else {
    console.log('Error!');
    console.log(err);
  }
  });

  // Preblockly Code
  
  // Blockly Code
  ${code}${(code.includes('s4g.client.login()')) ? `  
  // Default On Ready Event
  s4g.client.on('ready', () => {
    s4d.isOnline = true;
    console.log(\`Bot is successfully logged in as \${client.user.name}\`);
  });`:''}
  })();`
}