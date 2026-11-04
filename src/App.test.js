import { fireEvent, render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('identifies the psychologist and sends appointment enquiries to her actual profile', () => {
  render(<App />);
  expect(screen.getByRole('heading', { level: 1, name: /Psikolog Bedrika Kurt/ })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /DoktorTakvimi profilini aç/ })).toHaveAttribute('href', 'https://www.doktortakvimi.com/profil/bedrika-kurt');
  expect(screen.getByRole('link', { name: /Yol tarifi alın/ })).toHaveAttribute('href', expect.stringContaining('https://www.google.com/maps/search/?api=1&query='));
});

test('visitors can explore age groups with pointer and keyboard', () => {
  render(<App />);
  userEvent.click(screen.getByRole('tab', { name: 'Çocuklar' }));
  expect(within(screen.getByRole('tabpanel')).getByRole('heading', { name: 'Oyunla ifade' })).toBeInTheDocument();
  fireEvent.keyDown(screen.getByRole('tab', { name: 'Çocuklar' }), { key: 'ArrowRight' });
  expect(screen.getByRole('tab', { name: 'Ergenler' })).toHaveFocus();
  expect(screen.getByRole('tab', { name: 'Ergenler' })).toHaveAttribute('aria-selected', 'true');
  expect(within(screen.getByRole('tabpanel')).getByRole('heading', { name: 'Sınav ve gelecek kaygısı' })).toBeInTheDocument();
  fireEvent.keyDown(screen.getByRole('tab', { name: 'Ergenler' }), { key: 'Home' });
  expect(screen.getByRole('tab', { name: 'Yetişkinler' })).toHaveFocus();
});

test('navigation can be dismissed with Escape and returns focus to its toggle', () => {
  render(<App />);
  userEvent.click(screen.getByRole('button', { name: 'Menüyü aç' }));
  expect(screen.getByRole('button', { name: 'Menüyü kapat' })).toHaveAttribute('aria-expanded', 'true');
  fireEvent.keyDown(screen.getByRole('navigation', { name: 'Ana menü' }), { key: 'Escape' });
  expect(screen.getByRole('button', { name: 'Menüyü aç' })).toHaveAttribute('aria-expanded', 'false');
  expect(screen.getByRole('button', { name: 'Menüyü aç' })).toHaveFocus();
});
