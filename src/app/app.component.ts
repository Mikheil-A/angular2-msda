import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    public component = 'Components';

    constructor(private router: Router) { }

    changePage(url: string) {
        this.router.navigate(['/component/' + url]);
        this.component = url;
    }

}
