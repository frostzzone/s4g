import Blockly from "blockly";
import * as BlocklyJS from "blockly/core";

let blockname = "s4g_embed_set_color"

let blockData = {
  "type": "s4g_embed_set_color",
  "message0": "Set embed color to %1",
  "args0": [
    {
      "type": "input_value",
      "name": "option",
      "check": "Colour"
    },
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 120,
  "tooltip": "Make embed",
  "helpUrl": ""
}

Blockly.Blocks[blockname] = {
  init: function() {
    this.jsonInit(blockData);
  },
}

BlocklyJS.JavaScript[blockname] = function(block) {
  var set = block.getFieldValue('option');
  // TODO: Assemble JavaScript into code variable.
  var code = `asdhjVeryrandomstringtoreplaceas784g.setColor(${set})`;
  return code;
};