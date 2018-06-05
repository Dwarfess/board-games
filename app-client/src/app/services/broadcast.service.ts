import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BroadcastService {

    public result = {};
    public searchEvent = new EventEmitter();

    setResult(item) {
        this.searchEvent.emit(item);
    }

    subscriber() {
        return this.searchEvent;
    }
}
