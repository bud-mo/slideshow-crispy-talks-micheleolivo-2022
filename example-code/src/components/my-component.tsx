import React, { FC } from 'react';
import useMyComponent from '../hooks/use-my-component';

const MyComponent: FC = () => {
	const { name } = useMyComponent();
	return (
		<div>
			Hello {name}!
		</div>
	);
};

export default MyComponent;
