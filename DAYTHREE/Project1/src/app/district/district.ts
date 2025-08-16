import { Component } from '@angular/core';
import { Card } from "../card/card";

@Component({
  selector: 'app-district',
  imports: [Card],
  templateUrl: './district.html',
  styleUrl: './district.css'
})
export class District {
[x: string]: any;

  district=[
    {
      id:1,
      title:"Idukki",
      description:"",
      image:"https://bestplaces.blog/wp-content/uploads/2025/04/Lush-hills-of-Idukki.jpg.webp"
    },

      {
      id:2,
      title:"Thiruvananthapuram",
      description:"",
      image:"https://www.keralatourism.org/_next/image/?url=http%3A%2F%2F127.0.0.1%2Fktadmin%2Fimg%2Fpages%2Fmobile%2Fthiruvananthapuram-1713788259_cc3e007203a550edfaa7.webp&w=3840&q=75"
    },

        {
      id:3,
      title:"Kasargod",
      description:"",
      image:"https://static2.tripoto.com/media/filter/tst/img/252130/TripDocument/1469029283_1469029261481.jpg"
    },

        {
      id:4,
      title:"Kannur",
      description:"",
      image:"https://dgll.nic.in/sites/default/files/styles/photo_gallery_350_350_/public/2022-11/KANNUR%20LIGHTHOUSE.jpg?itok=TrO4e4D1"
    },

        {
      id:5,
      title:"Kollam",
      description:"",
      image:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/9c/f4/af/worlds-largest-bird-sculpture.jpg?w=600&h=400&s=1"
    },

        {
      id:6,
      title:"Ernakulam",
      description:"",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo2NcrTkzKqlBXYbouIeGLRAeQJVpPoALxwssEd8M8AfLCjO7tFPaaCRLaGabKJs6aKxo&usqp=CAU"
    },

        {
      id:7,
      title:"Kottayam",
      description:"",
      image:"https://www.keralatourism.org/images/microsites/kumarakom/kumarakom-1024x768.jpg"
    },

        {
      id:8,
      title:"Alappuzha",
      description:"",
      image:"https://media.istockphoto.com/id/177447843/photo/house-boat-in-backwaters.jpg?s=612x612&w=0&k=20&c=9RnNr22SKJiNKuOukgfo82TtSgvSLMIZALXNf4m_VPM="
    },

        {
      id:9,
      title:"Thrissur",
      description:"",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAEWZbjZEJ89qJVbiJUBILwmLhAv5qYZzSQg&s"
    },

        {
      id:10,
      title:"Palakkad",
      description:"",
      image:"https://images.unsplash.com/photo-1668048106216-3cf13708088e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFsYWtrYWR8ZW58MHx8MHx8fDA%3D"
    },

        {
      id:11,
      title:"Wayanad",
      description:"",
      image:"https://www.keralatourism.org/images/microsites/wayanad/waynadu-1024x768.jpg"
    },


        {
      id:12,
      title:"Pathanamthitta",
      description:"",
      image:"https://www.dtpcpathanamthitta.com/uploads/ebrochures/images/pathanamthittaebrochure-20230505131306993091.webp"
    },

        {
      id:13,
      title:"Kozhikode",
      description:"",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKt1uY-8pUEZwkCOQVuDO-HWUyKC52F3B3Dg&s"
    },

        {
      id:14,
      title:"Malappuram",
      description:"",
      image:"https://a.travel-assets.com/findyours-php/viewfinder/images/res70/101000/101691-Malappuram-District.jpg"
    },


  ]

}

