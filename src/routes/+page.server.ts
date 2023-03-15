import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
	default: async ({ request }) => {
		const formData = await request.formData();

		const file = formData.get('file');
		if (file == null || typeof file === 'string') {
			return fail(400, { message: 'Expected a file' });
		}

		const length = file.size;
		const name = file.name;

		return { length, name };
	}
};
