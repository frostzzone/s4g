import Blockly from "blockly";
import * as BlocklyJS from "blockly/core";

let blockname = 's4g_message_content'

let blockData = {
  "message0": "message content",
  "output": "String",
  "colour": 30,
  "tooltip": "returns content of message",
  "helpUrl": ""
}

Blockly.Blocks[blockname] = {
  init: function() {
    this.jsonInit(blockData);
  }
}

BlocklyJS.JavaScript[blockname] = function(block)  {
  var code = `s4gmessage.content`;
  return [code, Blockly.JavaScript.ORDER_NONE];
}
