import Blockly from "blockly";
import * as BlocklyJS from "blockly/core";

let blockname = 's4g_message_author'

let blockData = {
  "message0": "message author",
  "output": "Author",
  "colour": 30,
  "tooltip": "returns author of message",
  "helpUrl": ""
}

Blockly.Blocks[blockname] = {
  init: function() {
    this.jsonInit(blockData);
  }
}

BlocklyJS.JavaScript[blockname] = function(block)  {
  var code = `s4gmessage.author`;
  return [code, Blockly.JavaScript.ORDER_NONE];
}
