import Blockly from "blockly";
import * as BlocklyJS from "blockly/core";

let blockname = 's4g_message_channel'

let blockData = {
  "message0": "message channel",
  "output": "Channel",
  "colour": 30,
  "tooltip": "returns channel of message",
  "helpUrl": ""
}

Blockly.Blocks[blockname] = {
  init: function() {
    this.jsonInit(blockData);
  }
}

BlocklyJS.JavaScript[blockname] = function(block)  {
  var code = `s4gmessage.channel`;
  return [code, Blockly.JavaScript.ORDER_NONE];
}
