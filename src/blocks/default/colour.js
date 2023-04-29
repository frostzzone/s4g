import Blockly from "blockly";
import * as BlocklyJS from "blockly/core";

const blockName = "s4g_custom_colour";
const defaultColor = "#a5745b";
const blockData = {
  "message0": "colour %1",
  "args0": [
    {
      "type": "field_input",
      "name": "COLOR",
      "text": ""
    }
  ],
  "output": "Colour",
  "tooltip": "",
  "helpUrl": ""
};

Blockly.Blocks[blockName] = {
  init: function () {
    this.jsonInit(blockData);
    var thisBlock = this
    thisBlock.setColour(defaultColor);
  },
  onchange: function () {
    try {
      if (!(this.getFieldValue('COLOR')).length) {
        this.setColour(defaultColor);
      } else {
        this.setColour(this.getFieldValue('COLOR'));
      }
    } catch {
      this.setColour(defaultColor);
    }
  }
};

BlocklyJS.JavaScript[blockName] = function (block) {
  const color = block.getFieldValue("COLOR");
  const code = [`"${color}"`, Blockly.JavaScript.ORDER_ATOMIC];
  return code;
};