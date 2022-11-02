import { Injectable } from '@angular/core';
import { BetInput } from '../models/bet-input.models';

@Injectable({
  providedIn: 'root'
})
export class BetInputService {

  betInput: BetInput = { bet: 0 }
}