import Blockly from "blockly";
import * as BlocklyJS from "blockly/core";

let blockname = 's4g_process_env'

let blockData = {
  "message0": "process.env. %1",
  "args0": [
    {
      "type": "input_value",
      "name": "text",
      "check": "String"
    }
  ],
  "output": "String",
  "colour": 55,
  "tooltip": "Gets env value",
  "helpUrl": ""
}

Blockly.Blocks[blockname] = {
  init: function() {
    this.jsonInit(blockData);
  }
}

BlocklyJS.JavaScript[blockname] = function(block)  {
  var value_text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);
  
  var code = `process.env[String(${value_text})];`;
  return code;
}