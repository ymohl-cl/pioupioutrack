import { InjectionKey } from 'vue';
import { createStore, useStore as baseUseStore, Store } from 'vuex';
import { findSpotById, Spot } from '@/store/spot'
import { Flight, mostPopularSpotId } from '@/store/flight';
import SGPS from '@/scripts/ServiceGPS';
import { User } from "./user";
import { landings, takeOffs, flights } from '@/store/data';
import { Driver } from '@/store/Driver';
import SDevice from '@/scripts/ServiceDevice';
import SStorage from '@/scripts/Storage';

const deviceKey = "device";
const gpsKey = "geolocation";
export let ok = false;

export interface State {
	drivers: Driver;
	user: User;
	flights: Array<Flight>;
	takeOffs: Array<Spot>;
	landings: Array<Spot>;
	driverStorage: SStorage;
}

// define injection key
export const key: InjectionKey<Store<State>> = Symbol()

export function useStore(): Store<State> {
	return baseUseStore(key)
}

export const store = createStore<State>({
	state: {
		drivers: new Driver(),
		user: new User("", "", "", ""),
		flights: flights(),
		takeOffs: takeOffs,
		landings: landings,
		driverStorage: new SStorage(),
	},
	mutations: {
		// ** find a solution to call the following function at the same moment of createStore operation
		init(state: State) {
			state.driverStorage.write(deviceKey, state.drivers.device.data);
			state.driverStorage.write(gpsKey, state.drivers.geolocation.data);
			ok = true;
			console.log(ok);
		},
		// ** end
		addFlight(state: State, newFlight: Flight) {
			newFlight.id = (state.flights.length + 1).toString()
			state.flights.push(newFlight)
		},
		setUser(state: State, newUser: User) {
			state.user = newUser;
		},
		read(state: State) {
			console.log(state.driverStorage.read(deviceKey));
			console.log(state.driverStorage.read(gpsKey));
		}
	},
	getters: {
		device(state: State): SDevice{ 
			return state.drivers.device;
		},
		geolocation(state: State): SGPS {
			return state.drivers.geolocation;
		},
		user(state: State): User {
			return state.user;
		},
		flights(state: State): Array<Flight> {
			return state.flights;
		},
		takeOffs(state: State): Array<Spot> {
			return state.takeOffs;
		},
		takeOff: (state: State) => (suid: string): Spot => {
			return findSpotById(state.takeOffs, suid)
		},
		popularTakeOff(state: State): Spot {
			const ids: Array<string> = []

			for (const f of state.flights) {
				ids.push(f.takeOffId)
			}
			const id = mostPopularSpotId(ids)
			return store.getters.takeOff(id)
		},
		knownTakeOffs(state: State): Array<Spot> {
			const ids = new Array<string>()
			const spots = new Array<Spot>()

			for (const f of state.flights) {
				if (!ids.includes(f.takeOffId)) {
					ids.push(f.takeOffId)
					spots.push(store.getters.takeOff(f.takeOffId))
				}
			}
			return spots
		},
		landings(state: State): Array<Spot> {
			return state.landings;
		},
		landing: (state: State) => (suid: string): Spot => {
			return findSpotById(state.landings, suid)
		},
		popularLanding(state: State): Spot {
			const ids: Array<string> = []

			for (const f of state.flights) {
				ids.push(f.landingId)
			}
			const id = mostPopularSpotId(ids)
			return store.getters.landing(id)
		},
		knownLandings(state: State): Array<Spot> {
			const ids = new Array<string>()
			const spots = new Array<Spot>()

			for (const f of state.flights) {
				if (!ids.includes(f.landingId)) {
					ids.push(f.landingId)
					spots.push(store.getters.landing(f.landingId))
				}
			}
			return spots
		}
	},
})

/*
	device(state: State): SDevice{ 
		return state.drivers.device;

		// state.driverStorage.read(deviceKey).then((json: Promise<any>) => {
		// 	if (json != undefined) {
		// 		state.device.fromJson(json)
		// 		console.log("Defined device : " + state.device.data.model);
		// 	}
		// })
		// console.log("retour fonction device")
		// return state.device.data;

		// const value: any = state.driverStorage.read(deviceKey);
		// if (value !== null) {
		// 	const d: DDevice = value
		// 	console.log("getter device 1 " + d.model);
		// 	console.log("getter device 2 " + d);
		// 	return d;
		// }
		// return {} as DDevice;
	},
	mutations: {
		addSpot(state: State, newSpot: Spot) {
			const s: Spot = {
				id: new Date().toISOString() + state.spots.length.toString,
				name: newSpot.name,
				orientation: newSpot.orientation,
				elevation: newSpot.elevation,
			};
			state.spots.push(s);
		},
		addFlight(state: State, newFlight: Flight) {
			state.flights.push(newFlight)
		}
	},
	actions: {
		addSpot(context: any, newSpot: Spot) {
			context.commit('addMemory', newSpot);
		}
	},
	*/