import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.scss']
})
export class Home2Component implements OnInit {

  ngOnInit(): void {
    // Add your JavaScript code here
    this.setupScrollEvents();
  }

  setupScrollEvents() {
    var header = document.getElementById('myHeader');
    var page = document.getElementById('page');
    var openMenuButton = document.getElementById('openmenu');

    window.addEventListener('scroll', () => {
      page?.classList.remove('menuopen');
      if (window.scrollY >= 100) {
        header?.classList.add('sticky');
      } else {
        header?.classList.remove('sticky');
      }
    });

    // Event listener to remove the sticky class when the button is clicked
    openMenuButton?.addEventListener('click', () => {
      header?.classList.remove('sticky');
      page?.classList.add('menuopen');
    });

    var links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
      link.addEventListener('click', (event) => {
        // Prevent the default action
        event.preventDefault();

        // Get the target element
        var targetId = (event.target as HTMLAnchorElement).getAttribute('href');
        var targetElement = document.querySelector(targetId!);

        // Smooth scroll to target
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }
}
