const env = process.env;
const {
  NODE_ENV,
  REACT_APP_DEV_URL,
  REACT_APP_GOOGLE_MAP_KEY,
  REACT_APP_SENTRY_DSN
} = env;

/**
 * @description We'll use this object to iterate on it and check
 * if the env vars has the value assigned and if not then we'll
 * throw a warning in the console.
 */
const env_required: { [key: string]: string } = {
  REACT_APP_DEV_URL,
  REACT_APP_GOOGLE_MAP_KEY,
  REACT_APP_SENTRY_DSN
};

export const isDevelopment = NODE_ENV === 'development';
// export const API_URL = isDevelopment ? REACT_APP_DEV_URL : REACT_APP_PROD_URL;
export const API_URL = REACT_APP_DEV_URL;
export const GOOGLE_MAP_KEY = REACT_APP_GOOGLE_MAP_KEY;
export const SENTRY_DSN = REACT_APP_SENTRY_DSN;

const checkEnv = () => {
  Object.keys(env_required).forEach(key => {
    const value = env_required[key];
    if (!value) {
      console.error(
        `Please set the env var: ${key} in .env for development and in your development server for production/staging`
      );
    }
  });
};

checkEnv();
