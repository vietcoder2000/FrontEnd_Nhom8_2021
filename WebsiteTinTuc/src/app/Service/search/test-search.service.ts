import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TestSearchService {
  constructor() {}

  searchTerm: BehaviorSubject<string> = new BehaviorSubject<string>('');
}
