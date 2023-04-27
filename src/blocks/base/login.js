import Blockly from "blockly";
import * as BlocklyJS from "blockly/core";

let blockname = 's4g_login'

let blockData = {
  "message0": "Login to Guilded with token %1",
  "args0": [
    {
      "type": "input_value",
      "name": "token",
      "check": "String"
    }
  ],
  "colour": 55,
  "tooltip": "Connect to your guilded bot",
  "helpUrl": ""
}

Blockly.Blocks[blockname] = {
  init: function() {
    this.jsonInit(blockData);
  }
}

BlocklyJS.JavaScript[blockname] = function(block)  {
  var value_token = Blockly.JavaScript.valueToCode(block, 'token', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `//Create new client
  s4g.client = new Client({token: String(${value_token})});
  s4g.client.login()\n`;
  return code;
}