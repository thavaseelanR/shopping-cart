
export function isDev() {
    return process.env.NODE_ENV === "production";
}

export * from './configure-store';
export * from './fetch';
export * from './constants';



