import { fireEvent, render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import AboutPage from './AboutPage';

function renderPage() {
  return render(
    <MemoryRouter>
      <AboutPage />
    </MemoryRouter>
  );
}

describe('AboutPage', () => {
  it('renders every section of the page', () => {
    renderPage();
    expect(
      screen.getByRole('heading', { level: 1, name: 'Hello. We are Codestroom.' })
    ).toBeInTheDocument();
    for (const kicker of [
      'Numbers we are weirdly proud of',
      'The origin story',
      'What we actually believe',
      'The humans',
      'House rules',
      'Radical honesty corner',
    ]) {
      expect(screen.getByText(kicker)).toBeInTheDocument();
    }
  });

  it('expands and collapses a house rule', () => {
    renderPage();

    // the first rule starts open so the section never looks empty
    const first = screen.getByRole('button', { name: /No meetings before 10am/ });
    const second = screen.getByRole('button', { name: /Nothing ships on a Friday evening/ });
    expect(first).toHaveAttribute('aria-expanded', 'true');
    expect(second).toHaveAttribute('aria-expanded', 'false');

    fireEvent.click(second);
    expect(first).toHaveAttribute('aria-expanded', 'false');
    expect(second).toHaveAttribute('aria-expanded', 'true');

    fireEvent.click(second);
    expect(second).toHaveAttribute('aria-expanded', 'false');
  });

  it('counts presses of the deliberately pointless button', () => {
    renderPage();

    fireEvent.click(screen.getByRole('button', { name: 'Do not press this' }));
    expect(screen.getByText('pressed 1 time this visit')).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: /You pressed it/ }));
    expect(screen.getByText('pressed 2 times this visit')).toBeInTheDocument();
  });

  it('gives every value card a flippable back face', () => {
    renderPage();
    const cards = screen.getAllByRole('button', { name: /^Flip card: / });
    expect(cards).toHaveLength(6);
    cards.forEach((card) => {
      expect(within(card).getByText('Translation')).toBeInTheDocument();
    });
  });
});
