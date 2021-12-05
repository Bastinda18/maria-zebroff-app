import { useState, useEffect } from 'react';
import GitsItem from './GitsItem';
import axios from 'axios';
import './GitsList.css';

const currentPage = 1;

const GitsList = () => {
	const [ gitsLists, setGitsLists ] = useState([]);
	const [ pageNumber, setPageNumber ] = useState(currentPage);
	const addNewPage = () => {
		setPageNumber(pageNumber + 1);
	};

	//Fetching data from API
	useEffect(
		async () => {
			const { data } = await axios.get(
				`https://api.github.com/gists/public?page=${pageNumber}&per_page=15`
			);

			setGitsLists([ ...gitsLists, ...data ]);
		},
		[ pageNumber ]
	);
	//Implementing Infinitive Smooth Scroll
	useEffect(
		() => {
			const scrolling_function = () => {
				if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 2000) {
					console.log(3);
					addNewPage();
					window.removeEventListener('scroll', scrolling_function);
				}
			};
			window.addEventListener('scroll', scrolling_function);
		},
		[ gitsLists ]
	);

	return (
		<div className='GitsList-wrapper'>
			{gitsLists.map((item, i) => <GitsItem key={item.node_id + i} item={item} />)}
		</div>
	);
};

export default GitsList;
