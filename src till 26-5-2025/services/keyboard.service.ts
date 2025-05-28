import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KeyboardService {

  constructor() {
    this.initializeKeyboardEvents();
  }

  initializeKeyboardEvents() {
    window.addEventListener('keyboardDidShow', (event: any) => {
      const keyboardHeight = event.keyboardHeight;
      console.log('Keyboard height:', keyboardHeight);

      // Adjust UI (e.g., scroll active input into view)
      this.scrollActiveInputIntoView(keyboardHeight);
    });

    window.addEventListener('keyboardDidHide', () => {
      console.log('Keyboard hidden');
    });
  }

  scrollActiveInputIntoView(keyboardHeight: number) {
    const activeElement = document.activeElement as HTMLElement;
    if (activeElement) {
      const rect = activeElement.getBoundingClientRect();
      const offset = rect.top + window.scrollY - keyboardHeight - 20; // Adjust based on your layout
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  }
}
