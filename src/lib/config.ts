/**
 * Configuration constants for the reunion application
 * Uses date-based logic for feature toggles
 */

import { browser } from '$app/environment';

/**
 * Date utilities for Danish timezone
 */
const danishTimeZone = 'Europe/Copenhagen';

/**
 * Get current time in Danish timezone
 */
function getCurrentDanishTime(): Date {
	if (browser) {
		// Client-side: Use browser's timezone conversion
		return new Date();
	} else {
		// Server-side: Use Danish timezone
		return new Date(new Date().toLocaleString('en-US', { timeZone: danishTimeZone }));
	}
}

/**
 * Check if a specific date/time has passed
 */
function hasDatePassed(targetDate: Date): boolean {
	const now = getCurrentDanishTime();
	return now >= targetDate;
}

/**
 * Client-side configuration
 * Uses date-based logic for feature toggles
 */
export const config = {
	/**
	 * Whether to show the photos link on the main page
	 * Shows after August 23, 2025 at 14:30 Danish time
	 * This corresponds to the "Vi drager mod Rosborg" activity time
	 */
	get showPhotosLink(): boolean {
		// Target date: August 23, 2025 at 14:30 Danish time
		const targetDate = new Date('2025-08-23T14:30:00+02:00'); // Danish summer time (CEST)
		
		// For development, always show the link
		if (browser && import.meta.env.DEV) {
			return true;
		}
		
		return hasDatePassed(targetDate);
	},

	/**
	 * Application version for health checks and debugging
	 */
	version: '1.0.0',

	/**
	 * Contact email for photo submissions
	 */
	contactEmail: 'festudvalget@reunion2025.dk',

	/**
	 * Target date for photos feature (for debugging)
	 */
	targetDate: new Date('2025-08-23T14:30:00+02:00')
} as const;

/**
 * Type-safe configuration access
 */
export type Config = typeof config;
