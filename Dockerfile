# Stage 1: Build
FROM node:20-alpine AS builder
WORKDIR /app

# Copy package files first for better caching
COPY package.json pnpm-lock.yaml ./

# Install pnpm and dependencies
RUN npm install -g pnpm && \
    pnpm install --frozen-lockfile

# Copy source files
COPY svelte.config.js tsconfig.json ./
COPY src ./src
COPY static ./static
COPY vite.config.* ./

# Build the application
RUN pnpm run build

# Stage 2: Run
FROM node:20-alpine
WORKDIR /app

# Copy built assets and package files
COPY --from=builder /app/build build/
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules

# Expose the port
EXPOSE 3000

# Set production environment
ENV NODE_ENV=production
ENV PORT=3000
ENV HOST=0.0.0.0

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD curl -f http://localhost:3000/health || exit 1

# Start the server
CMD ["node", "build"]
