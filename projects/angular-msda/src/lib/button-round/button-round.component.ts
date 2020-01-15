import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';



@Component({
  selector: 'msda-button-round',
  templateUrl: './button-round.component.html',
  styleUrls: ['./button-round.component.scss']
})
export class ButtonRoundComponent implements OnInit, AfterViewInit {
  @Input() type = 'button';
  @Input() bgColor: string;
  @Input() disabled = false;

  @Input() height: number = 40;
  @Input() width: number = 40;

  @Output() click: EventEmitter<any> = new EventEmitter();

  @ViewChild('msdaButton')
  private _msdaButtonRef;


  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this._msdaButtonRef.nativeElement.style.width = `${this.height}px`;
    this._msdaButtonRef.nativeElement.style.height = `${this.width}px`;
  }


  onClick(e: Event) {
    e.stopPropagation();
    this.click.emit(e);
  }
}
