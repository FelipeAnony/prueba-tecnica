/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';

import PrivateRoute from '.';

const renderSut = (auth = true) =>
  render(
    <PrivateRoute auth={auth} redirectOnFailTo="/login">
      <>children</>
    </PrivateRoute>
  );

describe('PrivateRoute component', () => {
  it('Should render children if auth is true', () => {
    renderSut();
    expect(screen.getByText(/children/i)).toBeInTheDocument();
  });
});
