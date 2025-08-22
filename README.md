# 8.Z Reunion 2025

A SvelteKit application for the 2025 reunion of Z class from Rosborg Gymnasium.

## Features

- 📅 Reunion landing page with event details
- 📸 Photo gallery with responsive grid layout
- 🔗 Dynamic links controlled by environment variables
- 📱 Mobile-first responsive design
- 🎨 Tailwind CSS for styling

## Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Environment Variables

- `REUNION_SHOW_PHOTOS_LINK`: Set to 'true' to show the photos link on the main page

## Photo Management

### Adding New Photos

1. Add image files to `static/images/` directory
2. Update `src/lib/photos.ts` with the new photo metadata
3. Each photo should have:
   - `id`: Unique identifier
   - `title`: Descriptive title (responsive text sizing)
   - `thumbnail`: Path to image in `/images/`
   - `uploadLink`: Google Photos or similar upload link

### Image Upload Instructions for Users

Users can upload photos by:
1. Clicking "Upload billeder her" on any photo category
2. Being redirected to the corresponding Google Photos album
3. Uploading directly to the shared album
4. All photos become available to everyone

## Deployment

This project is configured for deployment on Coolify using `@sveltejs/adapter-node`.

## Project Structure

```
src/
├── lib/
│   ├── components/
│   │   └── PhotoCard.svelte    # Reusable photo card component
│   └── photos.ts               # Photo data and types
├── routes/
│   ├── +layout.svelte          # Global layout with CSS imports
│   ├── +page.svelte           # Main reunion landing page
│   └── photos/
│       └── +page.svelte       # Photo gallery page
├── app.css                    # Tailwind CSS imports
└── env.d.ts                   # Environment type definitions
```

## Technical Details

- **Framework**: SvelteKit 2.x with Svelte 5
- **Styling**: Tailwind CSS 4.x
- **TypeScript**: Full TypeScript support
- **Build Tool**: Vite
- **Package Manager**: pnpm
- **Adapter**: Node.js adapter for Coolify deployment