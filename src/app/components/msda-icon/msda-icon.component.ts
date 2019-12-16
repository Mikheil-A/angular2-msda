import {Component, Input, OnInit} from '@angular/core';
import {MarkdownService} from 'ngx-markdown';
import {HttpClient} from '@angular/common/http';



@Component({
  selector: 'app-msda-icon',
  templateUrl: './msda-icon.component.html',
  styleUrls: ['./msda-icon.component.scss']
})
export class MsdaIconComponent implements OnInit {
  icons;
  query: string = '';
  svgData;

  constructor(private markdownService: MarkdownService, private _http: HttpClient) {
  }


  ngOnInit() {
    // Get local SVG file and convert it to an array of objects
    this._http.get('/assets/icons.svg', {responseType: 'text'})
      .subscribe(text => {
          this.svgData = text;

          // Parsing SVG and return SVGDocument
          const parser = new DOMParser();
          const doc = parser.parseFromString(this.svgData, 'image/svg+xml');
          const symbols = Array.from(doc.querySelectorAll('symbol'));

          const arr = [];

          for (let i = 0; i < symbols.length; i++) {
            arr.push({
              name: symbols[i].id,
              width: 48,
              height: 48,
              color: 'black'
            });
          }
          this.icons = arr.filter(obj => obj.name !== 'square' && obj.name !== 'circle');
        }
      );
  }

  onError(event) {
    console.log(event);
  }

  onLoad(event) {
    console.log(event);
  }

  remove() {
    this.query = '';
  }
}
