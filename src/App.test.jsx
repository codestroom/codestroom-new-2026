import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import App from './App';

function renderAt(path) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>
  );
}

describe('routing', () => {
  it('renders the home page at /, including the strategy mix slider', () => {
    renderAt('/');
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Marketing for absolutely everybody.');
    expect(screen.getByText('Drag to find your marketing mix. No math required.')).toBeInTheDocument();
  });

  it.each([
    ['/services', 'One team, every channel your business needs.'],
    ['/global-reach', 'Local insight, wherever your audience hangs out.'],
    ['/process', 'One engagement, four checkpoints.'],
    ['/work', 'Built for the businesses and people who serve their communities.'],
    ['/contact', "However you'd rather start the conversation."],
  ])('renders %s', (path, heading) => {
    renderAt(path);
    expect(screen.getByText(heading)).toBeInTheDocument();
  });

  it('no longer serves a standalone /blend-lab page', () => {
    renderAt('/blend-lab');
    expect(screen.getByText('This page ghosted us.')).toBeInTheDocument();
  });

  it('renders the 404 page for an unknown route', () => {
    renderAt('/does-not-exist');
    expect(screen.getByText('This page ghosted us.')).toBeInTheDocument();
  });

  it('every header nav link points to a route the app actually renders', () => {
    const home = renderAt('/');
    const nav = home.getByRole('navigation');
    const hrefs = [...nav.querySelectorAll('a[href^="/"]')].map((a) => a.getAttribute('href'));
    expect(hrefs.length).toBeGreaterThan(0);
    home.unmount();

    for (const href of hrefs) {
      const page = renderAt(href);
      expect(page.queryByText('This page ghosted us.')).not.toBeInTheDocument();
      page.unmount();
    }
  });
});
