import { Evaluation } from "@/store/evaluation";

export class Flight {
	id: string;
	duration: number;

	takeOffId: string;
	landingId: string;
	takeOffEvaluation: Evaluation = new Evaluation(false, 0, "", "");
	landingEvaluation: Evaluation = new Evaluation(false, 0, "", "");
	flightEvaluation: Evaluation = new Evaluation(false, 0, "", "");

	constructor(duration: number) {
		this.id = ""
		this.duration = duration
		this.takeOffId = ""
		this.landingId = ""
	}
}

export function mostPopularSpotId(spotIds: Array<string>): string {
	const count = new Map<string, number>()
	for (const id of spotIds) {
		if (!count.has(id)) {
			count.set(id, 1)
			continue
		}
		let actual = count.get(id)
		if (actual === undefined) {
			actual = 0
		}
		count.set(id, actual + 1)
	}

	let most = 0
	let save = ""
	for (const [id, nb] of count.entries()) {
		if (nb > most) {
			most = nb
			save = id
		}
	}
	return save
}