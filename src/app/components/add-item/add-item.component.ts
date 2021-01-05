import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SwotService } from 'src/app/services/swot/swot.service';
import { Component, OnInit, Input } from '@angular/core';
import { Swot } from 'src/app/models/swot-model/swot';
import { SwotItem } from 'src/app/models/swot-model/swot-item';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  swotItem : SwotItem;
  @Input() parentSwot : Swot;
  
  constructor(private swotService : SwotService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.swotItem = new SwotItem(0, "", "", this.parentSwot.id)
  }

  onSubmit(itemForm: NgForm) {
    // this.swotItem.content = itemForm.content
    console.log(itemForm)
    console.log(itemForm.value)
    console.log(this.swotItem)
    this.swotService.addItem(this.swotItem)
      .subscribe(data => {
        console.log(data);
      });
    this.modalService.dismissAll();
  }

}
