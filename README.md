# Little Sips

A small gallery of drinks that mean something to me. Each one has a story.

**Live:** [gallery-eight-jet.vercel.app](https://gallery-eight-jet.vercel.app/)

## About

This is a digital gallery site featuring important drinks in my life, each carrying a memory, a moment, or a person that I feel grateful for. Click any drink to see it larger with its story. Scroll to the bottom and watch them all fall into a shopping bag (scroll back up and they return).

Tech Stack: Built with Next.js, TypeScript, and Tailwind CSS. Hosted on Vercel.

## Running locally

```bash
npm install
npm run dev
```

Then open [localhost:3000](http://localhost:3000).

## Project structure

```yaml
app/
  layout.tsx       - fonts and metadata
  page.tsx         - gallery page + image data
components/
  GalleryGrid.tsx  - grid with cart animation
  Modal.tsx        - image popup
  Reveal.tsx       - scroll fade-in effect
public/
  little-things/   - gallery images of drinks (01.png, 02.png, etc.)
  cart.png         - shopping bag image
```

## Adding images

1. Add PNGs to `/public/little-things/`
2. Update the `images` array in `app/page.tsx` with `src`, `alt`, `title`, `description`, and optional `scale`
