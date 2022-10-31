import { Injectable } from '@angular/core';
import { BetButton } from '../models/bet-button.model';
import { BetMatch } from '../models/bet-match.model';

@Injectable({
    providedIn: 'root'
})
export class BetMatchService {

    betMatchs: BetMatch[] = [
        {
            name: "Nice - FC Lorient",
            betButtons: [
                {
                    town: "Nice",
                    odd: 1.24
                },
                {
                    town: "Draw",
                    odd: 2.18
                },
                {
                    town: "FC Lorient",
                    odd: 2.57
                },
            ]
        },
        {
            name: "Paris SG - Lyon",
            betButtons: [
                {
                    town: "Paris SG",
                    odd: 1.12
                },
                {
                    town: "Draw",
                    odd: 2.5
                },
                {
                    town: "Lyon",
                    odd: 3.62
                },
            ]
        },
        {
            name: "Marseille - Montpellier",
            betButtons: [
                {
                    town: "Marseille",
                    odd: 1.77
                },
                {
                    town: "Draw",
                    odd: 2.51
                },
                {
                    town: "Montpellier",
                    odd: 2.9
                }
            ]
        }
    ]
}