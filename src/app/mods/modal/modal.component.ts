import { Component, OnInit, ElementRef, OnDestroy, Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit , OnDestroy {

 @Output() closeevent = new EventEmitter();

  constructor(private el: ElementRef) {
    console.log(el.nativeElement);
  }

  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement);
  }

  ngOnDestroy() {
    console.log('Leaving Modal');
    this.el.nativeElement.remove();
  }

  onClickModalClose() {
    this.closeevent.emit();
  }
}
