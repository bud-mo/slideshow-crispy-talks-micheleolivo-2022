import { vi } from 'vitest';
import { render, screen } from '../utils/test-utils';
import MyComponent from './my-component';

vi.mock('../hooks/use-my-component', () => {
	return {
		default: vi.fn().mockImplementation(() => ({ name: 'Buddy' })),
	};
});

describe('MyComponent', async () => {
	it('Should render the name', () => {
		render(
			<MyComponent />,
		);
		expect(screen.getByText(/Hello Buddy!/)).toBeInTheDocument();
	});
});
