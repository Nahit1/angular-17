import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [CommonModule],
  template: `<div class="grid grid-cols-2 gap-5 mt-3">
    <div
      class="w-[450px] h-44 border bg-slate-400 rounded p-3 flex flex-col"
    ></div>
    <div
      class="w-[450px] h-44 border bg-slate-400 rounded p-3 flex flex-col"
    ></div>
    <div
      class="w-[450px] h-44 border bg-slate-400 rounded p-3 flex flex-col"
    ></div>
    <div
      class="w-[450px] h-44 border bg-slate-400 rounded p-3 flex flex-col"
    ></div>
    <div
      class="w-[450px] h-44 border bg-slate-400 rounded p-3 flex flex-col"
    ></div>
    <div
      class="w-[450px] h-44 border bg-slate-400 rounded p-3 flex flex-col"
    ></div>
    <div
      class="w-[450px] h-44 border bg-slate-400 rounded p-3 flex flex-col"
    ></div>
    <div
      class="w-[450px] h-44 border bg-slate-400 rounded p-3 flex flex-col"
    ></div>
  </div>`,
})
export class LoadingComponent {}
