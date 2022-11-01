import { BetButton } from "./bet-button.model";

export class BetMatch {

    constructor(
        public id: number,
        public name: string,
        public betButtons: BetButton[]) {
    }
}