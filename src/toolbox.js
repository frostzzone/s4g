export default (favorites) => {
    return `<xml xmlns="https://developers.google.com/blockly/xml" id="toolbox" style="display: none">
    <category name="Logic" categorystyle="logic_category">
        <block type="controls_if"></block>
        <block type="logic_compare"></block>
        <block type="logic_operation"></block>
        <block type="logic_negate"></block>
        <block type="logic_boolean"></block>
        <block type="logic_null"></block>
        <block type="logic_ternary"></block>
      </category>
      <category name="Loops" categorystyle="loop_category">
        <block type="controls_repeat_ext">
          <value name="TIMES">
            <shadow type="math_number">
              <field name="NUM">10</field>
            </shadow>
          </value>
        </block>
        <block type="controls_whileUntil"></block>
        <block type="controls_for">
          <value name="FROM">
            <shadow type="math_number">
              <field name="NUM">1</field>
            </shadow>
          </value>
          <value name="TO">
            <shadow type="math_number">
              <field name="NUM">10</field>
            </shadow>
          </value>
          <value name="BY">
            <shadow type="math_number">
              <field name="NUM">1</field>
            </shadow>
          </value>
        </block>
        <block type="controls_forEach"></block>
        <block type="controls_flow_statements"></block>
      </category>
      <category name="Math" categorystyle="math_category">
        <block type="math_number" gap="32">
          <field name="NUM">123</field>
        </block>
        <block type="math_arithmetic">
          <value name="A">
            <shadow type="math_number">
              <field name="NUM">1</field>
            </shadow>
          </value>
          <value name="B">
            <shadow type="math_number">
              <field name="NUM">1</field>
            </shadow>
          </value>
        </block>
        <block type="math_single">
          <value name="NUM">
            <shadow type="math_number">
              <field name="NUM">9</field>
            </shadow>
          </value>
        </block>
        <block type="math_trig">
          <value name="NUM">
            <shadow type="math_number">
              <field name="NUM">45</field>
            </shadow>
          </value>
        </block>
        <block type="math_constant"></block>
        <block type="math_number_property">
          <value name="NUMBER_TO_CHECK">
            <shadow type="math_number">
              <field name="NUM">0</field>
            </shadow>
          </value>
        </block>
        <block type="math_round">
          <value name="NUM">
            <shadow type="math_number">
              <field name="NUM">3.1</field>
            </shadow>
          </value>
        </block>
        <block type="math_on_list"></block>
        <block type="math_modulo">
          <value name="DIVIDEND">
            <shadow type="math_number">
              <field name="NUM">64</field>
            </shadow>
          </value>
          <value name="DIVISOR">
            <shadow type="math_number">
              <field name="NUM">10</field>
            </shadow>
          </value>
        </block>
        <block type="math_constrain">
          <value name="VALUE">
            <shadow type="math_number">
              <field name="NUM">50</field>
            </shadow>
          </value>
          <value name="LOW">
            <shadow type="math_number">
              <field name="NUM">1</field>
            </shadow>
          </value>
          <value name="HIGH">
            <shadow type="math_number">
              <field name="NUM">100</field>
            </shadow>
          </value>
        </block>
        <block type="math_random_int">
          <value name="FROM">
            <shadow type="math_number">
              <field name="NUM">1</field>
            </shadow>
          </value>
          <value name="TO">
            <shadow type="math_number">
              <field name="NUM">100</field>
            </shadow>
          </value>
        </block>
        <block type="math_random_float"></block>
        <block type="math_atan2">
          <value name="X">
            <shadow type="math_number">
              <field name="NUM">1</field>
            </shadow>
          </value>
          <value name="Y">
            <shadow type="math_number">
              <field name="NUM">1</field>
            </shadow>
          </value>
        </block>
      </category>
      <category name="Text" categorystyle="text_category">
        <block type="text"></block>
        <block type="text_multiline"></block>
        <block type="text_join"></block>
        <block type="text_append">
          <value name="TEXT">
            <shadow type="text"></shadow>
          </value>
        </block>
        <block type="text_length">
          <value name="VALUE">
            <shadow type="text">
              <field name="TEXT">abc</field>
            </shadow>
          </value>
        </block>
        <block type="text_isEmpty">
          <value name="VALUE">
            <shadow type="text">
              <field name="TEXT"></field>
            </shadow>
          </value>
        </block>
        <block type="s4g_includes">
          <value name="a">
            <shadow type="text">
              <field name="TEXT">abc</field>
            </shadow>
          </value>
          <value name="b">
            <shadow type="text">
              <field name="TEXT">b</field>
            </shadow>
          </value>
        </block>
        <block type="s4g_startswith">
          <value name="a">
            <shadow type="text">
              <field name="TEXT">abc</field>
            </shadow>
          </value>
          <value name="b">
            <shadow type="text">
              <field name="TEXT">b</field>
            </shadow>
          </value>
        </block>
        <block type="s4g_endswith">
          <value name="a">
            <shadow type="text">
              <field name="TEXT">abc</field>
            </shadow>
          </value>
          <value name="b">
            <shadow type="text">
              <field name="TEXT">c</field>
            </shadow>
          </value>
        </block>
        <block type="text_indexOf">
          <value name="VALUE">
            <block type="variables_get">
              <field name="VAR">text</field>
            </block>
          </value>
          <value name="FIND">
            <shadow type="text">
              <field name="TEXT">abc</field>
            </shadow>
          </value>
        </block>
        <block type="text_charAt">
          <value name="VALUE">
            <block type="variables_get">
              <field name="VAR">text</field>
            </block>
          </value>
        </block>
        <block type="text_getSubstring">
          <value name="STRING">
            <block type="variables_get">
              <field name="VAR">text</field>
            </block>
          </value>
        </block>
        <block type="text_changeCase">
          <value name="TEXT">
            <shadow type="text">
              <field name="TEXT">abc</field>
            </shadow>
          </value>
        </block>
        <block type="text_trim">
          <value name="TEXT">
            <shadow type="text">
              <field name="TEXT">abc</field>
            </shadow>
          </value>
        </block>
        <block type="text_count">
          <value name="SUB">
            <shadow type="text"></shadow>
          </value>
          <value name="TEXT">
            <shadow type="text"></shadow>
          </value>
        </block>
        <block type="text_replace">
          <value name="FROM">
            <shadow type="text"></shadow>
          </value>
          <value name="TO">
            <shadow type="text"></shadow>
          </value>
          <value name="TEXT">
            <shadow type="text"></shadow>
          </value>
        </block>
        <block type="text_reverse">
          <value name="TEXT">
            <shadow type="text"></shadow>
          </value>
      </block>
        <label text="Input/Output:" web-class="ioLabel"></label>
        <block type="text_print">
          <value name="TEXT">
            <shadow type="text">
              <field name="TEXT">abc</field>
            </shadow>
          </value>
        </block>
        <block type="text_prompt_ext">
          <value name="TEXT">
            <shadow type="text">
              <field name="TEXT">abc</field>
            </shadow>
          </value>
        </block>
      </category>
      <category name="Lists" categorystyle="list_category">
        <block type="lists_create_with">
          <mutation items="0"></mutation>
        </block>
        <block type="lists_create_with"></block>
        <block type="lists_repeat">
          <value name="NUM">
            <shadow type="math_number">
              <field name="NUM">5</field>
            </shadow>
          </value>
        </block>
        <block type="lists_length"></block>
        <block type="lists_isEmpty"></block>
        <block type="lists_indexOf">
          <value name="VALUE">
            <block type="variables_get">
              <field name="VAR">list</field>
            </block>
          </value>
        </block>
        <block type="lists_getIndex">
          <value name="VALUE">
            <block type="variables_get">
              <field name="VAR">list</field>
            </block>
          </value>
        </block>
        <block type="lists_setIndex">
          <value name="LIST">
            <block type="variables_get">
              <field name="VAR">list</field>
            </block>
          </value>
        </block>
        <block type="lists_getSublist">
          <value name="LIST">
            <block type="variables_get">
              <field name="VAR">list</field>
            </block>
          </value>
        </block>
        <block type="lists_split">
          <value name="DELIM">
            <shadow type="text">
              <field name="TEXT">,</field>
            </shadow>
          </value>
        </block>
        <block type="lists_sort"></block>
        <block type="lists_reverse"></block>
      </category>
      <category name="Colour" categorystyle="colour_category">
        <block type="colour_picker"></block>
        <block type="s4g_custom_colour"/>
        <block type="colour_random"></block>
        <block type="colour_rgb">
          <value name="RED">
            <shadow type="math_number">
              <field name="NUM">100</field>
            </shadow>
          </value>
          <value name="GREEN">
            <shadow type="math_number">
              <field name="NUM">50</field>
            </shadow>
          </value>
          <value name="BLUE">
            <shadow type="math_number">
              <field name="NUM">0</field>
            </shadow>
          </value>
        </block>
        <block type="colour_blend">
          <value name="COLOUR1">
            <shadow type="colour_picker">
              <field name="COLOUR">#ff0000</field>
            </shadow>
          </value>
          <value name="COLOUR2">
            <shadow type="colour_picker">
              <field name="COLOUR">#3333ff</field>
            </shadow>
          </value>
          <value name="RATIO">
            <shadow type="math_number">
              <field name="NUM">0.5</field>
            </shadow>
          </value>
        </block>
      </category>
      <sep></sep>
      <category name="Variables" categorystyle="variable_category" custom="VARIABLE">
      </category>
      <category name="Functions" categorystyle="procedure_category"
custom="PROCEDURE"></category>
      <sep></sep>
      <category name="Base" colour="55" expanded="true">
        <label text="Mandatory blocks"/>
        <block type="s4g_login">
          <value name="token">
            <shadow type="text">
              <field name="TEXT">Bot token here</field>
            </shadow>
          </value>
        </block>
        <label text="Repl"/>
        <block type="s4g_process_env">
          <value name="text">
            <shadow type="text">
              <field name="TEXT">token</field>
            </shadow>
          </value>
        </block>
        <block type="s4g_webserver">
          <value name="texte">
            <shadow type="text">
              <field name="TEXT">This website was created to keep a s4g bot on</field>
            </shadow>
          </value>
        </block>
        <label text="Base blocks"/>
        <block type="s4g_ready"/>
      </category>
      <category name="Messages" colour="30" expanded="true">
        <label text="Detect messages"/>
        <block type="s4g_messageCreated"/>
        <label text="Message info"/>
        <block type="s4g_message_content"/>
        <block type="s4g_message_author"/>
        <block type="s4g_message_channel"/>
        <block type="s4g_message_server"/>
        <label text="Respond to messages"/>
        <block type="s4g_reply">
          <value name="text">
            <shadow type="text">
              <field name="TEXT">Hello!</field>
            </shadow>
          </value>
        </block>
        <block type="s4g_send">
          <value name="text">
            <shadow type="text">
              <field name="TEXT">Hello!</field>
            </shadow>
          </value>
        </block>
        <block type="s4g_delete"/>
      </category>
      <category name="Embeds" colour="120">
        <block type="s4g_create_embed">
          <value name="embedName">
            <shadow type="text">
              <field name="TEXT">myembed</field>
            </shadow>
          </value>
        </block>
        <block type="s4g_embed_set_color">
          <value name="option">
            <shadow type="colour_picker"/>
          </value>
        </block>
        <block type="s4g_embed_set_author">
          <mutation xmlns="http://www.w3.org/1999/xhtml" pfp="FALSE" url="FALSE"></mutation>
          <value name="Author">
            <shadow type="text">
              <field name="TEXT"></field>
            </shadow>
          </value>
        </block>
      </category>
    </xml>`
}