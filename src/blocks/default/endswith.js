import Blockly from "blockly";
import * as BlocklyJS from "blockly/core";

let blockname = 's4g_endswith'

let blockData = {
  "message0": "%1 ends with %2",
  "args0": [
    {
      "type": "input_value",
      "name": "a",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "b",
      "check": "String"
    }
  ],
  "inputsInline": true,
  "output": "Boolean",
  "colour": 150,
  "tooltip": "",
  "helpUrl": ""
}

Blockly.Blocks[blockname] = {
  init: function() {
    this.jsonInit(blockData);
  }
}

BlocklyJS.JavaScript[blockname] = function(block)  {
  var value_a = Blockly.JavaScript.valueToCode(block, 'a', Blockly.JavaScript.ORDER_ATOMIC);
  var value_b = Blockly.JavaScript.valueToCode(block, 'b', Blockly.JavaScript.ORDER_ATOMIC);
  
  var code = `(String(${value_a}) || '').endsWith(String(${value_b}) || '');`;
  return [code, Blockly.JavaScript.ORDER_NONE];
}
