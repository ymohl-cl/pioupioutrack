const shortNorth = "N"
const shortWest = "O"
const shortSouth = "S"
const shortEst = "E"
const longNorth = "North"
const longWest = "Ouest"
const longSouth = "South"
const longEst = "Est"

export class Spot {
	suid: string;
	id: string;
	number: string;
	name: string;
	subName: string;
	latitude: number ;
	longitude: number;
	altitude: number;
	orientation: string;

	constructor(
	inputSuid: string,
	inputId: string,
	inputNumber: string,
	inputName: string,
	inputSubName: string,
	inputLatitude: number ,
	inputLongitude: number ,
	inputAltitude: number ,
	inputOrientation: string) {
		this.suid = inputSuid
		this.id = inputId
		this.number = inputNumber
		this.name = inputName
		this.subName = inputSubName
		this.latitude = inputLatitude
		this.longitude = inputLongitude
		this.altitude = inputAltitude
		this.orientation = inputOrientation
	}
	copy(source: Spot) {
		this.suid = source.suid
		this.id = source.id
		this.number = source.number
		this.name = source.name
		this.subName = source.subName
		this.latitude = source.latitude
		this.longitude = source.longitude
		this.altitude = source.altitude
		this.orientation = source.orientation
	}
	orientationString(): string {
		let str = ""
		this.orientation = this.orientation.replace(',', ';')
		const orientations = this.orientation.split(';')
		for (const index in orientations) {
			if (str) {
				str += '/'
			}
			switch (orientations[index]) {
				case shortNorth:
					str += longNorth
					break;
				case shortNorth + shortEst:
					str += longNorth + '-' + longEst
					break;
				case shortEst:
					str += longEst
					break;
				case shortSouth + shortEst:
					str += longSouth + '-' + longEst
					break;
				case shortSouth:
					str += longSouth
					break;
				case shortSouth + shortWest:
					str += longSouth + '-' + longWest
					break;
				case shortWest:
					str += longWest
					break;
				case shortNorth + shortWest:
					str += longNorth + '-' + longWest
					break;
				default:
					str += "undefine"
					break;
			}
		}
		return str
	}
}

export function findSpotById(spots: Array<Spot>, suid: string): Spot {
	const s = spots.find(s => s.suid === suid);
	if (s === undefined) {
			return new Spot("", "", "", "", "", 0.0, 0.8, 8, "");
	}
	return s
}
