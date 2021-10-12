import { InjectionKey } from 'vue';
import { createStore, useStore as baseUseStore, Store } from 'vuex';
import { findSpotById, Spot } from '@/store/spot'
import { Flight, mostPopularSpotId } from '@/store/flight';
import { landings, takeOffs, flights } from '@/store/data';
import { User } from './user';
import SDevice, { DDevice } from '@/scripts/SDevice';
import SStorage from '@/scripts/Storage';

const deviceKey = "device"

export interface State {
	device: SDevice;
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
		device: new SDevice(),
		user: new User("", "","", ""),
		flights: flights(),
		takeOffs: takeOffs,
		landings: landings,
		driverStorage: new SStorage(),
	},
	mutations: {
		// ** find a solution to call the following functions at the same moment of createStore operation
		init(state: State){
			state.driverStorage.write(deviceKey, state.device)
		},
		// ** end
		addFlight(state: State, newFlight: Flight) {
			newFlight.id = (state.flights.length + 1).toString()
			state.flights.push(newFlight)
		},
		setUser(state: State, newUser: User) {
			state.user = newUser
		},
	},
	getters: {
		device(state: State): DDevice {
			const d = state.driverStorage.read(deviceKey)
			return d;
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