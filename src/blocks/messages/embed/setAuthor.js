import Blockly from "blockly/core";
import * as BlocklyJS from "blockly/core";

const blockname = "s4g_embed_set_author"

const NAMES = ["Set pfp", "Set URL (requires pfp)"]
const FIELDS = ["PFP", "URL"];
const TYPES = ["String", "String"];
const INPUTS = ['FALSE', 'FALSE']
const COLOR = 120;
const TOOLTIP = "Make Embed";

Blockly.Blocks[blockname] = {
  init: function() {
    this.appendValueInput("Author")
        .setCheck("String")
        .appendField("Set embed author");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(COLOR);
    this.setTooltip(TOOLTIP);
    this.jsonInit({"mutator": "test_mutator"});
    this.inputs_ = Array.from(INPUTS) //Array(FIELDS.length).fill("FALSE");
  }
};

Blockly.Blocks['test_mutator'] = {
  init: function() {
    for (let i = 0; i < FIELDS.length; i++) {
      this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(NAMES[i])
        .appendField(new Blockly.FieldCheckbox(INPUTS[i]), FIELDS[i]);
    }
    this.setColour(COLOR);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

let BORDER_MUTATOR_MIXIN = {
  connections_: Array(FIELDS.length).fill(null),

  /*
   	Create XML to represent the inputs.
   */
  mutationToDom: function() {
		//console.log(this.inputs_)
    var container = document.createElement('mutation');
    for (let i = 0; i < this.inputs_.length; i++) {
      if (this.inputs_[i] == 'TRUE') {
        container.setAttribute(FIELDS[i], this.inputs_[i]);
      }
    }
    return container;
  },
  /*
   	Parse XML to restore the inputs.
   */
  domToMutation: function(xmlElement) {
    for (let i = 0; i < this.inputs_.length; i++) {
      this.inputs_[i] = xmlElement.getAttribute(FIELDS[i].toLowerCase());
    }
    this.updateShape_();
  },
  /*
   	Populate the mutator's dialog with this block's components.
   */
  decompose: function(workspace) {
    var containerBlock = workspace.newBlock('test_mutator');
    for (let i = 0; i < this.inputs_.length; i++) {
      containerBlock.setFieldValue(this.inputs_[i], FIELDS[i]);
    }
    containerBlock.initSvg();
    return containerBlock;
  },
  /*
  	Reconfigure this block based on the mutator components.
   */
  compose: function(containerBlock) {
    // Get check box values
    for (let i = 0; i < this.inputs_.length; i++) {
      this.inputs_[i] = containerBlock.getFieldValue(FIELDS[i]);
    }
    this.updateShape_();
    // Reconnect any child blocks 👶
    for (let i = 0; i < FIELDS.length; i++) {
      if (this.getInput(FIELDS[i])) {
        Blockly.Mutator.reconnect(this.connections_[i], this, FIELDS[i]);
      }
    }
  },
  /*
   Store connections to any child blocks 👶
   */
  saveConnections: function(containerBlock) {
    for (let i = 0; i < this.inputs_.length; i++) {
      var input = this.getInput(FIELDS[i]);
      if (input) {
        this.connections_[i] = input && input.connection.targetConnection;
      }
    }
  },
  /*
   	Modify this block to have the correct number of inputs
   */
  updateShape_: function() {
    // Delete everything
    FIELDS.forEach(element => {
        if (this.getInput(element)) {
            this.removeInput(element);
        }
    });
    // Rebuild block
    for (let i = 0; i < this.inputs_.length; i++) {
      if (this.inputs_[i] == "TRUE") {
        this.appendValueInput(FIELDS[i])
          .setCheck(TYPES[i])
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField(NAMES[i]);
      }
    }
  }
};

Blockly.Extensions.registerMutator('test_mutator', BORDER_MUTATOR_MIXIN, null, [""]);

BlocklyJS.JavaScript[blockname] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = `asdhjVeryrandomstringtoreplaceas784g.setAuthor(${Blockly.JavaScript.valueToCode(block, "Author", Blockly.JavaScript.ORDER_ATOMIC)||`''`},${Blockly.JavaScript.valueToCode(block, "PFP", Blockly.JavaScript.ORDER_ATOMIC)||`''`},${Blockly.JavaScript.valueToCode(block, "URL", Blockly.JavaScript.ORDER_ATOMIC)||`''`})`;
  return code;
};