import { Component, Input, OnInit } from '@angular/core';
import { AccordionItem } from '../../models/accordion-item.interface'

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {

  @Input() public items: AccordionItem[] = [];

  public toggle(item: AccordionItem): void {
    item.isExpanded = !item.isExpanded;
  }

  constructor() {
    console.log(this.items)
  }

  ngOnInit(): void {
    console.log(this.items)
  }

}