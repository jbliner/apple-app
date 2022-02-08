import { Component } from "@angular/core";

@Component({
    selector: 'apple-fourth',
    templateUrl: '4thheader.component.html',
    styleUrls: ['4thheader.component.css']

})

export class FourthComponent{
    product_name: string;
    product_tag: string;
    img: string;

    constructor(){
        this.product_name = "WATCH"
        this.product_tag = "Introducing our largest display yet"
        this.img = "./assets/applewatch.png"
    
    }
}