import { useState, useMemo } from 'react';

type UseMyComponentReturnType = {
	name: string|undefined;
};

export default function useMyComponent(): UseMyComponentReturnType {
	const [name, setName] = useState(undefined);
	// Call an awesome API
	return useMemo(() => ({ name }), [name]);
}
