import Blockly from "blockly";
import * as BlocklyJS from "blockly/core";

let blockname = "s4g_create_embed"

let blockData = {
  "type": "s4g_create_embed",
  "message0": "Create an embed with name %1 Then %2",
  "args0": [
    {
      "type": "input_value",
      "name": "embedName"
    },
    {
      "type": "input_statement",
      "name": "Blocks"
    }
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
  }
}

BlocklyJS.JavaScript[blockname] = function(block) {
  var embedname = Blockly.JavaScript.valueToCode(block, 'embedName', Blockly.JavaScript.ORDER_ATOMIC).replace(/ /g, "_");
  var then = Blockly.JavaScript.statementToCode(block, 'Blocks').replace(/asdhjVeryrandomstringtoreplaceas784g\./g, name2 + ".");
  // TODO: Assemble JavaScript into code variable.
  var code = `var ${embedname} = new s4d.guilded.Embed()\n${then}`;
  return code;
};