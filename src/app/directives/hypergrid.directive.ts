import {
    Directive,
    Input,
    ViewChild,
    ElementRef,
    AfterViewInit,
    EventEmitter,
    Output,
} from '@angular/core';

declare var fin: any;


@Directive({
  selector: '[hypergrid]'
})
export class HypergridDirective implements AfterViewInit  {
  myGrid: any

  @Input() data: any = [];
  @Input() options: any = {};

  // @Output() onAuthenticated: EventEmitter<any> = new EventEmitter();

  elt: ElementRef;
  constructor(_elt: ElementRef) {
    this.elt = _elt;
  }

  ngAfterViewInit() {

    this.myGrid = new fin.Hypergrid(this.elt.nativeElement, this.options);
    this.myGrid.setData(this.data);

  }

  ngOnChanges(changes) {
    if (changes.data && this.myGrid) {
      console.log('data changed: ' + this.data);
      this.myGrid.setData(this.data);
      // this.myGrid.setData(this.data);

    }
  }
}
