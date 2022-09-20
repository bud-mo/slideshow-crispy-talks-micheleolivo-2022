import { renderHook } from '@testing-library/react-hooks';
import useMyComponent from './use-my-component';

describe('useMyComponent', () => {
	it('Should return an empty name', () => {
		const { result } = renderHook(() => useMyComponent());
		expect(result.current).toStrictEqual({
			name: undefined
		});
	});
});
