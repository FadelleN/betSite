import { BetButton } from "./bet-button.model";

export class BetMatch {

    constructor(
        public name: string,
        public betButtons: BetButton[]) {
    }
}