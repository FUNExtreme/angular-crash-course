import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cc-my-component',
  templateUrl: './my-component.component.html'
})
export class MyComponentComponent {

  myVariable = 'This is a variable with a string';

  variableContainingColor = 'red';

  myFunction = (myArgument: string, event: Event) => {
    event.preventDefault();

    console.log(myArgument);
  }

  onOpen = () => {}
  onClose = () => {}

}

