import React, { FC } from 'react';
import useMyComponent from '../hooks/use-my-component';

type MyComponentTypes = {
	defaultName?: string;
};

const MyComponent: FC<MyComponentTypes> = ({ defaultName }) => {
	const { name } = useMyComponent(defaultName);
	return (
		<div>
			Hello {name}!
		</div>
	);
};

export default MyComponent;
