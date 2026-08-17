import { fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import ContactForm from './ContactForm';

function fillAndSubmit() {
  fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'Test User' } });
  fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'test@example.com' } });
  fireEvent.change(screen.getByLabelText('What are you looking for?'), {
    target: { value: 'Paid Advertising' },
  });
  fireEvent.change(screen.getByLabelText('Your query'), { target: { value: 'Hello there' } });
  fireEvent.click(screen.getByRole('button', { name: /send message/i }));
}

describe('ContactForm', () => {
  beforeEach(() => {
    vi.stubGlobal('fetch', vi.fn());
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('renders the name, email, phone, service and query fields', () => {
    render(<ContactForm />);
    expect(screen.getByLabelText('Name')).toBeRequired();
    expect(screen.getByLabelText('Email')).toBeRequired();
    expect(screen.getByLabelText('Phone (optional)')).not.toBeRequired();
    expect(screen.getByLabelText('What are you looking for?')).toBeRequired();
    expect(screen.getByLabelText('Your query')).toBeRequired();
  });

  it('shows a success message when the submission succeeds', async () => {
    fetch.mockResolvedValueOnce({ ok: true });
    render(<ContactForm />);

    fillAndSubmit();

    await waitFor(() => expect(screen.getByText(/we'll get back to you/i)).toBeInTheDocument());
  });

  it('shows a fallback error message when the submission fails', async () => {
    fetch.mockResolvedValueOnce({ ok: false });
    render(<ContactForm />);

    fillAndSubmit();

    const errorMessage = await screen.findByText(/something went wrong/i);
    const fallbackLink = within(errorMessage.closest('.form-status-error')).getByRole('link', {
      name: 'contact@codestroom.com',
    });
    expect(fallbackLink).toHaveAttribute('href', 'mailto:contact@codestroom.com');
  });
});
