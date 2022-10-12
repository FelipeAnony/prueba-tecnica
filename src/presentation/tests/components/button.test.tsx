/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Button } from '@/presentation/components';

const onClick = jest.fn(() => {});

const renderSut = () => {
  render(<Button onClick={onClick}>children</Button>);
};

describe('Button component', () => {
  beforeEach(() => renderSut());

  it('Should render appropiately without any error', () => {
    expect(screen.getByText('children')).toBeInTheDocument();
  });

  it('Should call onClick function when user clicks', async () => {
    await userEvent.click(screen.getByRole('button'));
    expect(onClick).toBeCalled();
  });
});
