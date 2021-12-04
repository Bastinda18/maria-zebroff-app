import { useState, useEffect } from 'react';
import GitsItem from './GitsItem';
import axios from 'axios';

const currentPage = 1;

const GitsList = () => {
	const [ gitsLists, setGitsLists ] = useState([]);
	const [ pageNumber, setPageNumber ] = useState(currentPage);

	//Fetching data from API
	useEffect(
		async () => {
			const { data } = await axios.get(
				`https://api.github.com/gists/public?page=${pageNumber}&per_page=15`
			);
			console.log(data);
			setGitsLists([ ...gitsLists, ...data ]);
		},
		[ pageNumber ]
	);

	const addNewPage = () => {
		setPageNumber(pageNumber + 1);
	};

	window.onscroll = () => {
		if (window.innerHeight + window.scrollY === document.body.scrollHeight) {
			console.log('2');
			addNewPage();
		}
	};

	return (
		<div className=''>
			{gitsLists.map((item, i) => <GitsItem key={item.node_id + i} item={item} />)}
		</div>
	);
};

export default GitsList;
