# Landing page — CSS exercises

Open `index.html` in a browser, then work through these. Easy → hard.

## Warm-up
1. **Re-theme it.** Change only the variables in `:root` to make a dark theme.
2. **Typography.** Load a Google Font and use it for `--font-display`.
3. **Buttons.** Add a `.btn-large` variant. Add an `:active` state that "presses" the button.

## Layout
4. **Flexbox.** Make the pricing cards equal height (hint: `align-items`).
5. **Grid.** Change the features grid to exactly 3 columns on desktop, 1 on mobile — without `auto-fit`.
6. **Grid areas.** Rebuild the hero with `grid-template-areas` and put the image on the *left*.
7. **Add a section.** Create a "Testimonials" section with 3 quote cards in a horizontal scroll-snap row (`scroll-snap-type`).

## Responsive
8. **Hamburger menu.** At ≤760px the nav links are hidden. Make a CSS-only toggle with a hidden checkbox + `:checked ~` selector.
9. **Container queries.** Make `.card` switch to a horizontal layout (icon left, text right) when its container is wider than 400px.

## Polish
10. **Dark mode.** Use `@media (prefers-color-scheme: dark)` to override the tokens automatically.
11. **Animation.** Fade + slide the hero text in on page load with `@keyframes`.
12. **Motion safety.** Disable all animations with `@media (prefers-reduced-motion: reduce)`.
13. **Modern selectors.** Use `:has()` to highlight a price card when its button is hovered.

Tip: open DevTools (F12) → toggle device toolbar (Ctrl+Shift+M) to test mobile sizes,
and use the Grid/Flex badges in the Elements panel to visualize layouts.
