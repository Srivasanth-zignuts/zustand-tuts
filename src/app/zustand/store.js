import { create } from 'zustand';
import {devtools} from 'zustand/middleware'

// store basically we can say is a customhook
const useHabitStore = create(devtools((set, get) => {
	return {
		habits: [],  //initial state
		addhabit: (name, frequncy) => //add function
			set((state) => {
				return {
					habits: [
						...state.habits,
						{
							id: state.habits.length + 1,
							name,
							frequncy,
							completedDates: [],
							createdAt: new Date().toISOString(),
						},
					],
				};
			}),

	};
}));

export default useHabitStore;
