import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Textfield from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const Search = (props) => {
	const [searchString, setSearchString] = useState('');
	let setSearchParams = () => {};

	let navigate = useNavigate();

	function handleChange(event) {
		setSearchString(event.target.value);
	}

	function handleSubmit(event) {
		event.preventDefault();
		setSearchParams(searchString);
		navigate(`/results?query=${searchString}`);
	}
	return (
		<div className='weather-search'>
			<Grid
				container
				direction='column'
				spacing={0}
				justifyContent='center'
				alignItems='center'
				style={{ minHeight: '60vh' }}
			>
				<Card
					sx={{
						maxWidth: 300,
						minWidth: 300,
						background: 'rgba( 255, 255, 255, 0.35 )',
						boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
						backdropFilter: 'blur( 5.5px )',
						borderRadius: '10px',
						border: '1px solid rgba( 255, 255, 255, 0.18 )',
					}}
				>
					<CardContent>
						<Typography
							variant='body1'
							style={{ paddingTop: '1rem', paddingBottom: '1.5rem' }}
						>
							Search for a City or Postal Code:
						</Typography>

						<form autoComplete='off' onSubmit={handleSubmit}>
							<Textfield
								id='outlined-name'
								label='City'
								onChange={handleChange}
							/>
							<p></p>
							<Button
								variant='contained'
								type='submit'
								size='large'
								disableElevation
								style={{
									backgroundColor: 'rgba( 72, 85, 40, 0.7 )',
									border: '1px solid rgba( 72, 85, 40, 0.7 )',
									backdropFilter: 'blur(30px)',
									color: 'rgba(255,255,255,0.8)',
								}}
							>
								Search
							</Button>
						</form>
					</CardContent>
				</Card>
			</Grid>
		</div>
	);
};

export default Search;
