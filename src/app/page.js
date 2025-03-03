'use client';

import { Box, Container, Typography } from '@mui/material';
import useHabitStore from './zustand/store';
import AddHabits from './components/add-habits';
import ReenderingHabits from './components/rendering-habits';

export default function Home() {
	const { habits } = useHabitStore();

	return (
		// <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
		//   <h1>Hell Srivasanth !</h1>
		// </div>
		<div>
			<Box>
				<Typography
					variant='h2'
					component='h1'
					gutterBottom
					align='center'
				>
					Habit Tracker
				</Typography>
				<AddHabits />
				<ReenderingHabits />
			</Box>
		</div>
	);
}
