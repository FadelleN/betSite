import { Injectable } from '@angular/core';
import { BetMatch } from '../models/bet-match.model';

@Injectable({
  providedIn: 'root'
})
export class BetMatchService {

  betMatchs: BetMatch[] = [
    {
      id: 1,
      name: "Nice - FC Lorient",
      betButtons: [
        {
          id: 1,
          town: "Nice",
          odd: 1.24,
          clicked: false
        },
        {
          id: 2,
          town: "Draw",
          odd: 2.18,
          clicked: false
        },
        {
          id: 3,
          town: "FC Lorient",
          odd: 2.57,
          clicked: false
        },
      ]
    },
    {
      id: 2,
      name: "Paris SG - Lyon",
      betButtons: [
        {
          id: 1,
          town: "Paris SG",
          odd: 1.12,
          clicked: false
        },
        {
          id: 2,
          town: "Draw",
          odd: 2.5,
          clicked: false
        },
        {
          id: 3,
          town: "Lyon",
          odd: 3.62,
          clicked: false
        },
      ]
    },
    {
      id: 3,
      name: "Marseille - Montpellier",
      betButtons: [
        {
          id: 1,
          town: "Marseille",
          odd: 1.77,
          clicked: false
        },
        {
          id: 2,
          town: "Draw",
          odd: 2.51,
          clicked: false
        },
        {
          id: 3,
          town: "Montpellier",
          odd: 2.9,
          clicked: false
        }
      ]
    }
  ]
}