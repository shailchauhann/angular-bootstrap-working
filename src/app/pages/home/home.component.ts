import { Component, AfterViewInit } from '@angular/core';

declare const $: any; // Declare $ as any to avoid TypeScript errors

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {

  ngAfterViewInit() {
    // Your provided functions go here
    this.scrollBanner();
    this.setupPageCursors();
    this.setupScrollBackToTop();
    this.setupCaseStudyImages();
  }

  private scrollBanner() {
    $(document).on('scroll', () => {
      const scrollPos = $(document).scrollTop();
      $('.parallax-fade-top').css({
        'top': (scrollPos / 2) + 'px',
        'opacity': 1 - (scrollPos / 700)
      });
      // ... (continue with the rest of the scrollBanner function)
    });
  }

  private setupPageCursors() {
    document.getElementsByTagName("body")[0].addEventListener("mousemove", (n: MouseEvent) => {
      // ... (continue with the rest of the setupPageCursors function)
    });
    // ... (continue with the rest of the setupPageCursors function)
  }

  private setupScrollBackToTop() {
    const offset = 300;
    const duration = 400;

    $(window).on('scroll', () => {
      if ($(window).scrollTop() > offset) {
        $('.scroll-to-top').addClass('active-arrow');
      } else {
        $('.scroll-to-top').removeClass('active-arrow');
      }
    });

    $('.scroll-to-top').on('click', (event: any) => {
      event.preventDefault();
      $('html, body').animate({ scrollTop: 0 }, duration);
      return false;
    });
  }

  private setupCaseStudyImages() {
    // ... (continue with the rest of the setupCaseStudyImages function)
  }
}
