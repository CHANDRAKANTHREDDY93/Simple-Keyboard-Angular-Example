import { Component, OnInit, ViewEncapsulation, Renderer2, ElementRef } from '@angular/core';
import Keyboard from "simple-keyboard";

declare const require: any;

let iconObject = require('raw-loader!../../assets/icons/ics-img-ready.svg');

@Component({
  selector: 'app-keyboard',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './keyboard.component.html',
  styleUrls: [
    '../../../node_modules/simple-keyboard/build/css/index.css',
    './keyboard.component.scss']
})
export class KeyboardComponent implements OnInit {

  value = "";
  keyboard: Keyboard;

  constructor(private renderer: Renderer2, private eleRef: ElementRef) {}
  ngOnInit() {

  }

  ngAfterViewInit() {
    this.keyboard = new Keyboard({
      onChange: input => this.onChange(input),
      onKeyPress: button => this.onKeyPress(button),
      display: {
        '{alt}': '.?123',
        '{shift-left}': '	&#x2B06;',
        '{shift}': '	&#x2B06;',
        '{shiftactivated-left}': '&#x2B06;',
        '{shiftactivated}': '	&#x2B06;',
        '{enter}': 'Enter',
        '{bksp}': this.setIcon(),
        '{altright}': '.?123',
        '{downkeyboard}': '	&#x2B07;',
        '{space}': ' ',
        '{default}': 'ABC',
        '{default-right}': 'ABC'
      }
    });
  }

  setIcon() {
    const div = this.renderer.createElement('div');
      const matIcon = this.renderer.createElement('mat-icon');
      //const icon1 = this.renderer.createElement(iconObject);
      this.renderer.appendChild(matIcon, this.renderer.createText('ics-img-ready'));
      this.renderer.addClass(matIcon, 'mat-icon');
      this.renderer.addClass(matIcon, 'material-icons');
      this.renderer.appendChild(div, matIcon);
    //  this.renderer.appendChild(div, icon1);
       this.renderer.appendChild(this.eleRef.nativeElement, div);
      return div.outerHTML;
  }

  onChange = (input: string) => {
    this.value = input;
    console.log("Input changed", input);
  };

  onKeyPress = (button: string) => {
    console.log("Button pressed", button);

    /**
     * If you want to handle the shift and caps lock buttons
     */
    if (button === "{shift}" || button === "{lock}") this.handleShift();
  };

  onInputChange = (event: any) => {
    this.keyboard.setInput(event.target.value);
  };

  handleShift = () => {
    let currentLayout = this.keyboard.options.layoutName;
    let shiftToggle = currentLayout === "default" ? "shift" : "default";

    this.keyboard.setOptions({
      layoutName: shiftToggle
    });
  };

}
