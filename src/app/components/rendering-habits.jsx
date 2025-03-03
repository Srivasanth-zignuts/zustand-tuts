'use client';
import React from 'react';
import useHabitStore from '../zustand/store';
import { Box, Button, Paper, Typography } from '@mui/material';
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Grid } from '@mui/system';

const ReenderingHabits = () => {
	const { habits } = useHabitStore();
	const today = new Date().toISOString().split('T')[0];

	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 4 }}>
			{habits.map((habit) => (
				<Paper
					key={habit.id}
					elevation={2}
					sx={{ p: 2 }}
				>
					<Grid
						container
						alignItems='center'
					>
						<Grid
							xs={12}
							sm={6}
						>
							<Typography variant='h6'>{habit.name}</Typography>
							<Typography
								variant='body2'
								color='text.secondary'
							>
								{habit.frequency}
							</Typography>
						</Grid>
						<Grid
							xs={12}
							sm={6}
						>
							<Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1}}>
								<Button
									variant='outlined'
									color={
										habit.completedDates.includes(today) ? 'success' : 'primary'
									}
									onClick={() => toggleHabit(habit.id, today)}
									startIcon={<CheckCircleIcon/>}
								>
									{habit.completedDates.includes(today)
										? 'Completed'
										: 'Mark Complete'}
								</Button>
								<Button
									variant='outlined'
									color='error'
									onClick={() => removeHabit(habit.id)}
									startIcon={<DeleteIcon />}
								>
									Remove
								</Button>
							</Box>
						</Grid>
					</Grid>
					{/* <Box sx={{ mt: 2 }}>
						<Typography variant='body2'>
							Current Streak: {getStreak(habit)} days
						</Typography>
						<LinearProgress
							variant='determinate'
							value={(getStreak(habit) / 30) * 100}
							sx={{ mt: 1 }}
						/>
					</Box> */}
				</Paper>
			))}
		</Box>
	);
};

export default ReenderingHabits;
