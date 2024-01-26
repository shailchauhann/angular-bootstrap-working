import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hovercard',
  templateUrl: './hovercard.component.html',
  styleUrls: ['./hovercard.component.scss']
})
export class HovercardComponent implements OnInit {

  ngOnInit(): void {
    this.setupHovercard();
  }

  setupHovercard() {
    console.clear();

    if (!CSS.supports('anchor-name: --anchor')) {
      /**
       * Run an event listener on the list.
       * Set the bounding properties based on the closest element
       */
      const LIST = document.querySelector('ul') as HTMLElement;
      (LIST.dataset as DOMStringMap)['enhanced'] = 'true';
      let current: HTMLElement | null;

      const UPDATE = ({ x, y }: { x: number; y: number }) => {
        const ARTICLE = document.elementFromPoint(x, y)?.closest('li')?.querySelector('article') as HTMLElement | null;

        if (ARTICLE !== current) {
          current = ARTICLE;

          // Set the bounds
          if (current) {
            const BOUNDS = current.getBoundingClientRect();
            console.info({ BOUNDS });

            LIST.style.setProperty('--top', `${BOUNDS.top}px`);
            LIST.style.setProperty('--right', `${BOUNDS.right}px`);
            LIST.style.setProperty('--bottom', `${BOUNDS.bottom}px`);
            LIST.style.setProperty('--left', `${BOUNDS.left}px`);
            LIST.style.setProperty('--height', `${BOUNDS.height}px`);
            LIST.style.setProperty('--width', `${BOUNDS.width}px`);

            console.info({ ARTICLE });
          }
        }
      };

      LIST.addEventListener('pointermove', UPDATE);
    }
  }
}
