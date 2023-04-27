import Blockly from "blockly";
import * as BlocklyJS from "blockly/core";

let blockname = 's4g_ready'

let blockData = {
  "message0": "When the bot is connected %1 %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "code"
    }
  ],
  "colour": 55,
  "tooltip": "Executes code inside when bot is connected",
  "helpUrl": ""
}

Blockly.Blocks[blockname] = {
  init: function() {
    this.jsonInit(blockData);
  }
}

BlocklyJS.JavaScript[blockname] = function(block)  {
  var statements_code = Blockly.JavaScript.statementToCode(block, 'code');
  
  var code = `s4g.client.on("ready", () => {
  ${statements_code}});\n`;
  return code;
}