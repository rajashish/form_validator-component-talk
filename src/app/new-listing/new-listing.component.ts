import { Component, OnInit, ViewChild , Input} from '@angular/core';
import { Http } from '@angular/http';
import { NewServiceService } from './../services/new-service.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-new-listing',
  templateUrl: './new-listing.component.html',
  styleUrls: ['./new-listing.component.css']
})
export class NewListingComponent implements OnInit {
  list_data: Array<any>=[];
  
  constructor(private newService : NewServiceService) { }

  ngOnInit() {

    this.newService.newSubject.subscribe(data =>this.list_data.push(data));
    console.log(this.list_data);
  }

}
