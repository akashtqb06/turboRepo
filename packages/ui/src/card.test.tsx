import { render, screen } from '@testing-library/react';
import { Card } from './card';
import '@testing-library/jest-dom'; // Ensure jest-dom is imported

jest.mock('../src/card.module.css', () => ({
    titleh1: 'mocked-titleh1-class',
    content: 'mocked-content-class',
    titleSpan:'mocked-titleSpace-class',
  }));

describe('Card Component', () => {
  it('should render title with arrow symbol', () => {
    const title = 'Test Title ->';
    const href = '/test-url';
    const children = 'This is a test description.';

    render(<Card title={title} href={href}>{children}</Card>);

    // Use a regex to match "Test Title ->" with flexibility for the <span> between
    const titleElement = screen.getByText(/Test Title\s*->/); // Matches "Test Title ->" with any amount of spaces in between

    expect(titleElement).toBeInTheDocument();
  });

  it('should render description', () => {
    const title = 'Test Title ->';
    const href = '/test-url';
    const children = 'This is a test description.';

    render(<Card title={title} href={href}>{children}</Card>);

    const descriptionElement = screen.getByText(children);

    expect(descriptionElement).toBeInTheDocument();
  });
  it('applies styles correctly', () => {
    const title = 'Test Title ->';
    const href = '/test-url';
    const children = 'This is a test description.';
    render(<Card title={title} href={href}>{children}</Card>);

    const titleElement = screen.getByText(/Test Title\s*->/);
    const descriptionElement = screen.getByText(children);
    screen.debug();
    // Validate class names
    expect(titleElement).toHaveClass('mocked-titleh1-class');
    expect(descriptionElement).toHaveClass('mocked-content-class');
  });
});
