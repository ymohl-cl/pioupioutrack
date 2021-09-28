import { Spot } from '@/store/spot'
import { Flight } from '@/store/flight';
import { Evaluation } from '@/store/evaluation';

export const takeOffs: Array<Spot> = [
	new Spot(
		"25",
		"12003",
		"12D003A",
		"MILLAU - PUNCHO D'AGAST",
		"PUNCHO D'AGAST OUEST",
		44.11,
		3.1008,
		807,
		"O",
	),
	new Spot(
		"27",
		"12003",
		"12D003B",
		"MILLAU - PUNCHO D\\'AGAST",
		"PUNCHO D\\'AGAST SUD",
		44.1103,
		3.1036,
		838,
		"S"
	),
	new Spot(
		"13564",
		"12003",
		"12D003C",
		"MILLAU - PUNCHO D'AGAST",
		"deco nord/ouest",
		44.1109,
		3.1023,
		883,
		"N;NO"
	),
	new Spot(
		"21",
		"12001",
		"12D001A",
		"MILLAU BRUNAS",
		"Brunas",
		44.0732,
		3.0642,
		736,
		"N,NO",
	)
]

export const landings: Array<Spot> = [
	new Spot(
		"26",
		"12003",
		"12A003A",
		"MILLAU - PUNCHO D\\'AGAST",
		"",
		44.1169,
		3.0886,
		360,
		"N,S",
	),
	new Spot(
		"1011",
		"12003",
		"12A003B",
		"MILLAU - PUNCHO D'AGAST",
		"",
		44.1108,
		3.08611,
		358,
		"N,S",
	),
	new Spot(
		"22",
		"12001",
		"12A001A",
		"MILLAU",
		"Brunas",
		44.0797,
		3.0556,
		466,
		"NO",
	)
]

export const flights = (): Array<Flight> => {
	const val: Array<Flight> = []
	let f = new Flight(8)
	f.id = "0001"
	f.takeOffId = "21"
	f.landingId = "26"
	f.takeOffEvaluation = new Evaluation(true, 4, "bonne tempo", "3 essaies")
	f.landingEvaluation = new Evaluation(true, 3.5, "bel arrondis face au vent", "trop court")
	f.flightEvaluation = new Evaluation(true, 3.5, "Bonne sensations", "exercice long a realiser")
	val.push(f)

	f = new Flight(7)
	f.id = "0002"
	f.takeOffId = "21"
	f.landingId = "22"
	f.takeOffEvaluation = new Evaluation(false, 4, "vent ideal", "2 essaies")
	f.landingEvaluation = new Evaluation(true, 3.5, "sur la cible", "usage du pomping")
	f.flightEvaluation = new Evaluation(true, 3.5, "Balade", "pas d'exo")
	val.push(f)

	return val
}