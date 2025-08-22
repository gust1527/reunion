import { json } from '@sveltejs/kit';

export async function GET() {
	return json(
		{ 
			status: 'ok', 
			timestamp: new Date().toISOString(),
			version: '1.0.0'
		}, 
		{ status: 200 }
	);
}
