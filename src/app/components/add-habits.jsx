import {
	Box,
	FormLabel,
	MenuItem,
	Select,
	TextField,
	Button,
} from '@mui/material';
import React, { useState } from 'react';
import useHabitStore from '../zustand/store';

const AddHabits = () => {
	const [name, setName] = useState('');
	const [frequency, setFrequency] = useState('daily');

    const {habit, addhabit} = useHabitStore();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(name.trimEnd()){
            addhabit(name, frequency)
            setName("");
        }
    }

    // console.log(habit);

	return (
		<form onSubmit={handleSubmit}>
			<Box>
				<TextField
					label='Habit name'
					value={name}
					onChange={(e) => setName(e.target.value)}
					fullWidth
					placeholder='Enter habit name'
				/>
				<FormLabel htmlFor='frequncy' >
                Select Frequency
				</FormLabel>
				<Select
					defaultValue={frequency}
					id='frequncy'
					name='frequnecy'
                    style={{margin: "20px"}}
                    onChange={(e) => setFrequency(e.target.value)}
				>
					<MenuItem value={'daily'}>Daily</MenuItem>
					<MenuItem value={'weekly'}>Weekly</MenuItem>
				</Select>
				<Button
					sx={{ ml: 1 }}
					type='submit'
                    color='primary'
                    varient="contained"
                    
				>
					Add Habit
				</Button>
			</Box>
		</form>
	);
};

export default AddHabits;
