import { useState, useMemo } from 'react';

type UseMyComponentReturnType = {
	name: string|undefined;
};

export default function useMyComponent(defaultName?: string): UseMyComponentReturnType {
	const [name, setName] = useState(defaultName);
	// Call an awesome API
	return useMemo(() => ({ name }), [name]);
}
