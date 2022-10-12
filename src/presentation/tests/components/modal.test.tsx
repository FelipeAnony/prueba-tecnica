/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Modal } from '@/presentation/components';

const closeFn = jest.fn(() => {});

const renderSut = () =>
  render(
    <Modal closeModalFn={closeFn}>
      <>children</>
    </Modal>
  );

describe('Modal component', () => {
  it('Should render appropiately without any error', () => {
    renderSut();
    expect(screen.getByText(/children/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /x/i })).toBeInTheDocument();
  });

  it('Should calls closeFn when user clicks on x button or clicks out of the modal', async () => {
    renderSut();
    await userEvent.click(screen.getByRole('button', { name: /x/i }));
    await userEvent.click(screen.getByTestId('modalOutContainer'));
    expect(closeFn).toBeCalledTimes(2);
  });
});
