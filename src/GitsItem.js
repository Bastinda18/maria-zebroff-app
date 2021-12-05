import { useState } from 'react';
import './GitsItem.css';

const GitsItem = ({ item }) => {
	//Handling Fade in Icon
	const [ zintex, setZindex ] = useState(2);
	const [ fade, setFade ] = useState({
		fade: 'fade-out'
	});
	const handleRowClick = () => {
		setZindex(zintex + 1);
		setFade({
			fade: 'fade-in'
		});
		setTimeout(() => {
			setFade({
				fade: 'fade-out'
			});
		}, 1000);
	};
	const files = item.files;
	const firstKeyValue = files[Object.keys(files)[0]];

	return (
		<div className='GitsItem-wrapper' onClick={handleRowClick}>
			<div className='GitsItem-image-wrapper'>
				<img src={item.owner.avatar_url} width='70' height='70' alt={item.node_id} />
			</div>
			<div className='GitsItem-file'>
				{firstKeyValue.filename ? firstKeyValue.filename : 'No files found for this user'}
			</div>
			<div
				className={`float ${fade.fade}`}
				style={{ top: `${window.innerHeight / 2 + window.scrollY}px`, zIndex: `${zintex}` }}
			>
				<img src={item.owner.avatar_url} width='200' height='200' alt={item.node_id} />
			</div>
		</div>
	);
};

export default GitsItem;
