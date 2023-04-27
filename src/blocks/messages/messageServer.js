import Blockly from "blockly";
import * as BlocklyJS from "blockly/core";

let blockname = 's4g_message_server'

let blockData = {
  "message0": "message server",
  "output": "Server",
  "colour": 30,
  "tooltip": "returns server of message",
  "helpUrl": ""
}

Blockly.Blocks[blockname] = {
  init: function() {
    this.jsonInit(blockData);
  }
}

BlocklyJS.JavaScript[blockname] = function(block)  {
  var code = `s4gmessage.server`;
  return [code, Blockly.JavaScript.ORDER_NONE];
}
