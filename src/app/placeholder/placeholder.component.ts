import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-placeholder',
  standalone: true,
  imports: [CommonModule],
  template: `<div
    class="w-full h-screen border border-slate-700 rounded p-3 flex flex-col mt-2"
  >
    Product Area
  </div>`,
})
export class PlaceholderComponent {}
