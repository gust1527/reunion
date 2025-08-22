/**
 * Configuration constants for the reunion application
 * Uses environment variables with fallback defaults
 */

import { browser } from '$app/environment';

/**
 * Client-side configuration
 * Uses VITE_ prefixed environment variables for browser access
 */
export const config = {
	/**
	 * Whether to show the photos link on the main page
	 * Can be controlled via VITE_REUNION_SHOW_PHOTOS_LINK environment variable
	 * Defaults to true in development, false in production for safety
	 */
	showPhotosLink: browser 
		? (import.meta.env.VITE_REUNION_SHOW_PHOTOS_LINK === 'true' || 
		   import.meta.env.DEV) // Show in development by default
		: true, // Server-side default

	/**
	 * Application version for health checks and debugging
	 */
	version: '1.0.0',

	/**
	 * Contact email for photo submissions
	 */
	contactEmail: 'festudvalget@reunion2025.dk'
} as const;

/**
 * Type-safe configuration access
 */
export type Config = typeof config;
