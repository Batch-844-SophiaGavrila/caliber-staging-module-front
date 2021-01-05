import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, Input, OnInit } from '@angular/core';
import { Swot } from 'src/app/models/swot-model/swot';
import { SwotItem } from 'src/app/models/swot-model/swot-item';
import { ActivatedRoute } from '@angular/router';
import { SwotService } from 'src/app/services/swot/swot.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.css']
})
export class UpdateItemComponent implements OnInit {

  swot : Swot = new Swot();
  swotItem : SwotItem = new SwotItem(0,"","");
  myImage: string = "assets/img/swot1.png";
  @Input() passedSwotItem: SwotItem;

  constructor(private route: ActivatedRoute,
              private swotService: SwotService,
              private modalService: NgbModal) { }

  ngOnInit(): void {
    console.log(this.passedSwotItem);
    this.swotItem = this.passedSwotItem;
  }

  
  onSubmit(itemForm: NgForm) {
    console.log(itemForm)
    console.log(itemForm.value)
    console.log(this.swotItem)
    this.swotService.updateItem(this.swotItem)
      .subscribe(data => {
        console.log(data);
      });
    this.modalService.dismissAll();
  }

}
