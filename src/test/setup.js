import '@testing-library/jest-dom/vitest';

// jsdom doesn't implement these — components use them for scroll-reveal and
// scroll-to-top-on-navigate behavior that isn't relevant to what tests assert
window.scrollTo = () => {};

class MockIntersectionObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}
window.IntersectionObserver = MockIntersectionObserver;

window.matchMedia = (query) => ({
  matches: false,
  media: query,
  addEventListener: () => {},
  removeEventListener: () => {},
});
