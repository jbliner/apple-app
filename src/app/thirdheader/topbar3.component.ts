import { Component, Input } from "@angular/core";

@Component({
    selector: "apple-topbar3",
    templateUrl: "topbar3.component.html",
    styleUrls: ["topbar3.component.css"]
})

export class TopBarComponent3{
    product_name: string;
    product_tag: string;
    img: string;

    constructor(){
        this.product_name = "iPhone 13"
        this.product_tag = "Your new superpower."
        this.img = "./assets/iphone13.png"
    
    }
}