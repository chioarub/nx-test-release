import jsonEnvironment from '../assets/environment.json';

export const environment = {
  appUrl: jsonEnvironment?.appUrl ?? 'https://localhost:4200',
  apiUrl: jsonEnvironment?.apiUrl ?? 'https://google.com',
};
