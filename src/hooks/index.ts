import type { Handle } from '@sveltejs/kit'

export const handle: Handle = async ({ request, resolve }) => {
    console.log(request);

    const res = await resolve(request);
    console.log(res);
    return {
        ...res
    }
}
