import Blockly from "blockly";
import * as BlocklyJS from "blockly/core";

let blockname = 's4g_reply'

let blockData = {
  "message0": "Reply with %1",
  "args0": [
    {
      "type": "input_value",
      "name": "text",
      "check": "String"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 30,
  "tooltip": "Reply with a message",
  "helpUrl": ""
}

Blockly.Blocks[blockname] = {
  init: function() {
    this.jsonInit(blockData);
  }
}

BlocklyJS.JavaScript[blockname] = function(block)  {
  var value_text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);
  
  var code = `s4gmessage.reply(String(${value_text}));\n`;
  return code;
}