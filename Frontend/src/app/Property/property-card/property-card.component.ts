import { Component } from "@angular/core";

@Component({
  selector: 'app-property-card', //typescript file name
  //template: '<h1> I am a card</h1>',
  templateUrl: 'property-card.component.html',
  //styles: ['h1 {font-weight: normal;}']
  styleUrls: ['property-card.component.css']
}

)
export class PropertyCardComponent {
  Property: any = {
    "Id": 1,
    "Type" : "House",
    "Address": "123 Main Street"

  }

}
