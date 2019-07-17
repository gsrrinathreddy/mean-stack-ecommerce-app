import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  products:any =[
    {
      id:1,
      title:"Mobile",
      desc:"super smart mobile",
      image:"../../../assets/mobile.png"
    },
    {
      id:1,
      title:"Apple Mobile",
      desc:"afordable price mobile",
      image:"../../../assets/apple.jpg"
    },
    {
      id:1,
      title:"Smart Television",
      desc:"super smart TV",
      image:"../../../assets/tv.png"
    },
    {
      id:1,
      title:"AC",
      desc:"super efficient AC",
      image:"../../../assets/ac.jpg"
    },
    {
      id:1,
      title:"Cooler",
      desc:"afordable cooler ",
      image:"../../../assets/cooler.jpg"
    },
    {
      id:1,
      title:"Bag",
      desc:"super Big Bag",
      image:"../../../assets/bag.jpg"
    },
    {
      id:1,
      title:"Water Cooler",
      desc:"Havew nice cool water for drinking",
      image:"../../../assets/water-cooler.jpg"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
