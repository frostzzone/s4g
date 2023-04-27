import Blockly from "blockly";
import * as BlocklyJS from "blockly/core";

let blockname = "s4g_embed_set"

let blockData = {
  "type": "s4g_embed_set",
  "message0": "set embed %1 to %2 %3",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "set",
      "options": [
        [
          "Author",
          "AUTHOR"
        ],
        [
          "Color",
          "COLOR"
        ],
        [
          "Title",
          "TITLE"
        ],
        [
          "Description",
          "DESCRIPTION"
        ],
        [
          "Footer",
          "FOOTER"
        ],
        [
          "Tumbnail",
          "THUMBNAIL"
        ],
        [
          "Image",
          "IMAGE"
        ]
      ]
    },
    {
      "type": "input_value",
      "name": "option"
    },
    {
      "type": "input_value",
      "name": "option2"
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
  },
  //testing
  onchange: function () {
    let option = this.getFieldValue('set');
    //console.log(this.getInput('option'))
    if(option == 'TITLE'){
    this.removeInput('option', true)
    }
  }
}

BlocklyJS.JavaScript[blockname] = function(block) {
  var set = block.getFieldValue('set');
  var to = Blockly.JavaScript.valueToCode(block, 'option', Blockly.JavaScript.ORDER_ATOMIC)
  // TODO: Assemble JavaScript into code variable.
  var code = `//ok`;
  return code;
};