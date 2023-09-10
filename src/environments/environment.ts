import jsonEnvironment from '../assets/environment.json';

export const environment = {
  appUrl: jsonEnvironment?.appUrl ?? 'https://some-url.com',
  apiUrl: jsonEnvironment?.apiUrl ?? 'https://production.com',
};
