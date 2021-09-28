export class Evaluation {
	assist: boolean;
	note: number;
	positiveEvaluation: string;
	negativeEvaluation: string;

	constructor(assist: boolean, note: number, positive: string, negative: string) {
		this.assist = assist
		this.note = note
		this.positiveEvaluation = positive
		this.negativeEvaluation = negative
	}
}
