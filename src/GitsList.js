import { useState, useEffect } from 'react';
import GitsItem from './GitsItem';
import axios from 'axios';

const GitsList = () => {
	const [ gitsLists, setGitsLists ] = useState([]);

	//Fetching data from API
	useEffect(async () => {
		const { data } = await axios.get('https://api.github.com/gists/public');
		console.log(data);
		setGitsLists(data);
	}, []);

	return (
		<div className='StudentList-wrapper'>
			{gitsLists.map((item) => <GitsItem key={item.node_id} item={item} />)}
		</div>
	);
};

export default GitsList;
