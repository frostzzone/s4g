import Blockly from "blockly";
import * as BlocklyJS from "blockly/core";

let blockname = 's4g_delete'

let blockData = {
  "message0": "Delete the message",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 30,
  "tooltip": "Deleted the message",
  "helpUrl": ""
}

Blockly.Blocks[blockname] = {
  init: function() {
    this.jsonInit(blockData);
  }
}

BlocklyJS.JavaScript[blockname] = function(block)  {  
  var code = `s4gmessage.delete();\n`;
  return code;
}