import { useState } from 'react';

const GitsItem = ({ item }) => {
	const files = item.files;
	const firstKeyValue = files[Object.keys(files)[0]];

	return (
		<div className=''>
			<div className=''>
				<img src={item.owner.avatar_url} width='100' height='100' alt={item.node_id} />
			</div>
			<div className=''>{firstKeyValue.filename}</div>
		</div>
	);
};

export default GitsItem;
