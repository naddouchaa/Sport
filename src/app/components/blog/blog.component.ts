import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
blogTab: any=[
{date:"01/02/2000",title:"title1",description:"des1"},
{date:"31/12/2023",title:"title2",description:"des2"},
{date:"01/01/2023",title:"title3",description:"des3"},
{date:"25/08/2023",title:"title4",description:"des4"},
]
  constructor() { }

  ngOnInit() {
  }

}
