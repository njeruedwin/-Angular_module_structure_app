import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'custom-pipe',
  templateUrl: './custompipe.component.html',
})
export class CustomPipeComponent {
  title: string = 'This is the custom pipe component';
  subtitle: string =
    'In this lesson created a pipe that tranforms digits from Fahrenheit to celcius and vice versa';
  celcius: number;
  fahrenheit: number;
}
