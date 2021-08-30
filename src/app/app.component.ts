import { Component, OnInit } from '@angular/core';

function getStyle(obj: any, name: any) {
  if (obj.currentStyle) {
    return obj.currentStyle[name];
  } else {
    return getComputedStyle(obj, null)[name];
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  data: any[] = [];

  ngOnInit() {
    this.event();
    let i = 0;
    while (i < 18) {
      this.data.push(Math.random());
      i++;
    }
  }

  event() {
    let div = document.querySelector('section') as unknown as HTMLElement;
    let width: number, height: number;
    let x: number, y: number;
    window.addEventListener(
      'mousemove',
      (ev) => {
        x = ev.clientX - width / 2;
        y = ev.clientY - height / 2;
      },
      false
    );
    setInterval(() => {
      width = document.documentElement.clientWidth;
      height = document.documentElement.clientHeight;
      let left = parseInt(getStyle(div, 'left'));
      let top = parseInt(getStyle(div, 'top'));
      div && ( div.style.left = left + ( - x / 5 - left ) * 0.05 + 'px' );
      div && ( div.style.top = top + ( - y / 5 - top ) * 0.05 + 'px' )
    })
  }
}
