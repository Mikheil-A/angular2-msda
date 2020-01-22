import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-msda-grid',
  templateUrl: './msda-grid.component.html',
  styleUrls: ['./msda-grid.component.scss']
})
export class MsdaGridComponent implements OnInit {

  ELEMENT_DATA = [
    {date: '11.02.2017', announcement: 'შენობა-ნაგებობის ექსპლუატაციაში მიღება (პირველადი მიმართვა)', status: 'შუალეუდრი პასუხი', stage: 'ქმედების მოლოდინში', actionDate: '11.02.2017'},
    {date: '11.02.2017', announcement: 'ჯარიმაა გადასახდელი', status: 'შუალეუდრი პასუხი', stage: 'ქმედების მოლოდინში', actionDate: '11.02.2017'},
    {date: '11.02.2017', announcement: 'საჟარო ინფორმაციის გამოთხოვა', status: 'შუალეუდრი პასუხი', stage: 'ქმედების მოლოდინში', actionDate: '11.02.2017'},
    {date: '11.02.2017', announcement: 'ავარიული შენობა ნაგებობის გამაგრება', status: '---', stage: 'ქმედების მოლოდინში', actionDate: '11.02.2017'},
    {date: '11.02.2017', announcement: 'შენობა-ნაგებობის ექსპლუატაციაში მიღება (პირველადი მიმართვა)', status: 'შუალეუდრი პასუხი', stage: 'ქმედების მოლოდინში', actionDate: '11.02.2017'},
    {date: '11.02.2017', announcement: 'სპორტული პროექტის', status: 'სერვისის საფასური', stage: 'ქმედების მოლოდინში', actionDate: '11.02.2017'},
    {date: '11.02.2017', announcement: 'შენობა-ნაგებობის ექსპლუატაციაში მიღება (პირველადი მიმართვა)', status: 'შუალეუდრი პასუხი', stage: 'ქმედების მოლოდინში', actionDate: '11.02.2017'}
  ];


  constructor() { }

  ngOnInit() {
  }

}
