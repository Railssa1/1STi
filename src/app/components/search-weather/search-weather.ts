import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-weather',
  imports: [ReactiveFormsModule],
  templateUrl: './search-weather.html',
  styleUrl: './search-weather.scss'
})
export class SearchWeather implements OnInit {
  formGroup!: FormGroup;

  formBuilder = inject(FormBuilder);

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      search: ['']
    });
  }

  onSearch(): void {
    console.log("Value form", this.formGroup.value);
  }
}
