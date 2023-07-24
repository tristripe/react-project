import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('classNames', () => {
    test('Test render Button', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });
});
