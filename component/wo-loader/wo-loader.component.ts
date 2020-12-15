import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'wo-loader',
  templateUrl: './wo-loader.component.html',
  styleUrls: ['./wo-loader.component.scss']
})
export class WoLoaderComponent implements OnInit {

  @Input() isLoading = false;
  @Input() size = 1;
  @Input() message: string | undefined;

  constructor() {}

  ngOnInit() {}

}
