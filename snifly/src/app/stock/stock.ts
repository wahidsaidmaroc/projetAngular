import { NgFor, NgIf } from "@angular/common";
import { Component } from "@angular/core";

interface stockItem {
    id: number;
    name: string;
    quantity: number;
    price: number;
};

@Component({
    selector: "app-stock",
    templateUrl: "./stock.html",
    styleUrls: ["./stock.scss"],
    imports:[
        NgIf,NgFor
    ]

})



export class StockComponent {

    listStock : stockItem [] = [
        {
            id:1,
            name:"item 1",
            quantity:20,
            price:200.5
        },{
            id:2,
            name:"item 2",
            quantity:30,
            price:300
        },{
            id:3,
            name:"item 3",
            quantity:30,
            price:300
        },{
            id:4,
            name:"item 4",
            quantity:40,
            price:400
        },{
            id:5,
            name:"item 5",
            quantity:50,
            price:500
        },{
            id:6,
            name:"item 6",
            quantity:60,
            price:600
        },
    ];

    constructor(list: stockItem[]) {
        this.listStock = list;
    }
}