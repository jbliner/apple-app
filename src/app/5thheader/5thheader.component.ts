import { Component } from "@angular/core";

@Component({
    selector: 'apple-grids',
    templateUrl: '5thheader.component.html',
    styleUrls: ['5thheader.component.css']
})
export class FifthComponent{
    card1_image1: string;
    card1_tag1: string;
    card1_tag2: string
    card1_title1: string;


    card2_image1: string;
    card2_tag1: string;
    card2_tag2: string;
    card2_title1: string;
    card2_title2: string;

    constructor(){
        this.card1_image1 = "./assets/valentines.png"
        this.card1_tag1 = "Last-minute gift?"
        this.card1_tag2 = "You're just in time."
        this.card1_title1 = "Valentine's Day"



        this.card2_image1 = "./assets/shotoniphone.jpeg"
        this.card2_tag1 = "Submit your best macro"
        this.card2_tag2 = "photos by February 16."
        this.card2_title1 = "Shot on iPhone"
        this.card2_title2 = "call for entries."

    }
}

