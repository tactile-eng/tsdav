import { fetch as crossFetch } from 'cross-fetch';

let overriddenFetch: undefined | ((input: RequestInfo | URL, init?: RequestInit) => Promise<Response>) = undefined;
export function replaceFetch(newFetch: ((input: RequestInfo | URL, init?: RequestInit) => Promise<Response>)) {
    overriddenFetch = newFetch;
}

export function fetch(input: RequestInfo | URL, init?: RequestInit): Promise<Response> {
    if (overriddenFetch !== undefined) {
        return overriddenFetch(input, init);
    }
    return crossFetch(input, init);
}