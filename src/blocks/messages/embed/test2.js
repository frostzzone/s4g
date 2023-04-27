import Blockly from "blockly/core";
import * as BlocklyJs from 'blockly/core';

const TYPES = ["Colour", "Number"];
const INPUTS = ['FALSE', 'TRUE']
const COLOR = 60;
const TOOLTIP = "Example border object";
const HELPURL = "www.example.com";

const oneField = ["COLOR", "TITLE", "URL", "DESCRIPTION", "THUMBNAIL", "IMAGE"]
const twoField = ["FOOTER"]
const threeField = ["AUTHOR"]

const oneFieldOptions = ["Color", "Title", "URL", "Description", "Thumbnail", "Image"]
const twoFieldOptions = [["Text", "Icon URL"]]
const threeFieldOptions = [["Name", "Icon URL", "URL"]]

const FIELDS = [null, null, null];
const DROPDOWN = [
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
          "Url",
          "URL"
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

Blockly.Blocks['mySampleBlock'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Test");
    this.setOutput(true, "Border");
    this.setColour(COLOR);
    this.setTooltip(TOOLTIP);
    this.setHelpUrl(HELPURL);
    this.jsonInit({"mutator": "test_mutator"});
    this.input_ = "AUTHOR" //Array(FIELDS.length).fill("FALSE");
  }
};

Blockly.Blocks['test_mutator'] = {
  init: function() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(DROPDOWN), "dropdown");
    this.setColour(COLOR);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

let BORDER_MUTATOR_MIXIN = {
  connections_: {},

  /*
   	Create XML to represent the inputs.
   */
  mutationToDom: function() {
		//console.log(this.input_)
    var container = document.createElement('mutation'),
    field = document.createElement('field');
    field.setAttribute('name', 'dropdown')
    field.innerText = this.input_;
    container.appendChild(field)
    //console.log(`mutationToDom:`);
    //console.log(container);

    /* <field name="DATA_TYPE">UNIX</field> */

    return container;
  },
  /*
   	Parse XML to restore the inputs.
   */
  domToMutation: function(xmlElement) {
    this.input_ = xmlElement.getAttribute('dropdown');
    //console.log(`domToMutation: ${this.input_}`)
    this.updateShape_();
  },
  /*
   	Populate the mutator's dialog with this block's components.
   */
  decompose: function(workspace) {
    var containerBlock = workspace.newBlock('test_mutator');
    containerBlock.setFieldValue(this.input_, 'dropdown');
    
    containerBlock.initSvg();
    return containerBlock;
  },
  /*
  	Reconfigure this block based on the mutator components.
   */
  compose: function(containerBlock) {
    // Get value
    this.input_ = containerBlock.getFieldValue('dropdown');
    this.updateShape_();
    // Reconnect any child blocks 👶
    if(oneField.includes(this.input_)){
      Blockly.Mutator.reconnect(this.connections_[this.input_], this, `${oneFieldOptions[oneField.indexOf(this.input_)]} to`);
    } else if(twoField.includes(this.input_)){
      for (let i = 0; i < twoFieldOptions.length; i++){
        Blockly.Mutator.reconnect(this.connections_[this.input_][i], this, `${twoFieldOptions[twoField.indexOf(this.input_)][i]} to`);
      }
    } else {
      for (let i = 0; i < threeFieldOptions.length; i++){
        Blockly.Mutator.reconnect(this.connections_[this.input_][i], this, `${threeFieldOptions[threeField.indexOf(this.input_)][i]} to`);
      }
    }
  },
  /*
   Store connections to any child blocks 👶
   */
  saveConnections: function(containerBlock) {
    if(oneField.includes(this.input_)){
      var input = this.getInput(oneFieldOptions[oneField.indexOf(this.input_)])
      this.connections_[this.input_] = input && input.connection.targetConnection
    } else if(twoField.includes(this.input_)){
      for (let i = 0; i < twoFieldOptions.length; i++){
        var input = this.getInput(twoFieldOptions[twoField.indexOf(this.input_)][i])
        this.connections_[this.input_][i] = input && input.connection.targetConnection
      }
    } else {
      for (let i = 0; i < threeFieldOptions.length; i++){
        var input = this.getInput(threeFieldOptions[threeField.indexOf(this.input_)][i+1])
        this.connections_[this.input_][i] = input && input.connection.targetConnection
      }
    }
  },
  /*
   	Modify this block to have the correct number of inputs
   */
  updateShape_: function() {
    // Delete everything
    /*// Delete everything
    FIELDS.forEach(element => {
        if (this.getInput(element)) {
            this.removeInput(element);
        }
    });
    // Rebuild block
    this.appendValueInput(FIELDS[i])
      .setCheck(TYPES[i])
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(FIELDS[i]);*/
  }
};

Blockly.Extensions.registerMutator('test_mutator', BORDER_MUTATOR_MIXIN, null, [""]);