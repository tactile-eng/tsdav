export declare function replaceFetch(newFetch: ((input: RequestInfo | URL, init?: RequestInit) => Promise<Response>)): void;
export declare function fetch(input: RequestInfo | URL, init?: RequestInit): Promise<Response>;
