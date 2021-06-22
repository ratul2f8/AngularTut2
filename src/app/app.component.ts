import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  password = '';
  useSymbols = true;
  useLetters = true;
  useNumbers = true;
  length = 5;
  onChangeLength(event: Event) {
    let parsedValue = parseInt((<HTMLInputElement>event.target).value);
    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }
  toggleUseNumbers() {
    this.useNumbers = !this.useNumbers;
  }
  toggleUseSymbols() {
    this.useSymbols = !this.useSymbols;
  }
  toggleUseLetters() {
    this.useLetters = !this.useLetters;
  }
  onButtonClick() {
    let validCharacters = '';
    let possibleNumbers = '0123456789';
    let possibleSymbols = '$%^&*+/*-_';
    let possibleLetters = 'abcdefghijklmnopqrstuvwxyz';
    if (this.useLetters) {
      validCharacters += possibleLetters;
    }
    if (this.useNumbers) {
      validCharacters += possibleNumbers;
    }
    if (this.useSymbols) {
      validCharacters += possibleSymbols;
    }
    //shufle
    validCharacters = validCharacters
      .split('')
      .sort(() => Math.random() - 0.5)
      .join('');
    if (this.length > validCharacters.length) {
      this.password = validCharacters;
    } else {
      this.password = validCharacters.substring(0, this.length);
    }
  }
}
