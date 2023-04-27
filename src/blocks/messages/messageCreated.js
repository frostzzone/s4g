import Blockly from "blockly";
import * as BlocklyJS from "blockly/core";

let blockname = 's4g_messageCreated'

let blockData = {
  "message0": "When message recived %1 %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "code"
    }
  ],
  "colour": 30,
  "tooltip": "Executes code inside when message recived",
  "helpUrl": ""
}

Blockly.Blocks[blockname] = {
  init: function() {
    this.jsonInit(blockData);
  }
}

BlocklyJS.JavaScript[blockname] = function(block)  {
  var statements_code = Blockly.JavaScript.statementToCode(block, 'code');
  
  var code = `s4g.client.on("messageCreated", (s4gmessage) => {
  ${statements_code}});\n`;
  return code;
}