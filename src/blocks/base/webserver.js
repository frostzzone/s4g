import Blockly from "blockly";
import * as BlocklyJS from "blockly/core";

let blockname = 's4g_webserver'

let blockData = {
  "type": "block_type",
  "message0": "Create webserver with text %1",
  "args0": [
    {
      "type": "input_value",
      "name": "texte",
      "check": "String"
    }
  ],
  "inputsInline": true,
  "colour": 55,
  "tooltip": "",
  "helpUrl": ""
}

Blockly.Blocks[blockname] = {
  init: function() {
    this.jsonInit(blockData);
  }
}

BlocklyJS.JavaScript[blockname] = function(block)  {
  var value_texte = Blockly.JavaScript.valueToCode(block, 'texte', Blockly.JavaScript.ORDER_ATOMIC);
  var code = `const http = require(\'http\');\nconst server = http.createServer((req, res) => {\nres.writeHead(200);\nres.end(\'${String(value_texte)}\');\n});\nserver.listen(3000);\n`;
  return code;
}