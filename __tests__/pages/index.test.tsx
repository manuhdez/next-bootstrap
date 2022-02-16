import { render, screen } from '@testing-library/react';
import Page from '../../pages';

describe("index page", () => {
  test("can see the welcome message", () => {
    render(<Page />);
    const title = screen.getByRole("heading", { name: /welcome/i })
    expect(title).toBeInTheDocument();
  });
})
