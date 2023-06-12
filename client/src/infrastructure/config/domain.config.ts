const serverApiUrlLocal = process.env.REACT_APP_SERVER_API_URL_LOCAL ?? 'http://localhost:3000';
const frontendUrlLocal = process.env.REACT_APP_FRONTEND_URL_LOCAL ?? 'http://localhost:4200';

const urlEnviroment = {
  serverApiUrlLocal,
};

const getDomain = (): string => {
  const localhost = window.location?.origin?.indexOf(frontendUrlLocal) >= 0;
  const defaultUrl = 'http://localhost:3000';

  let domain = '';
  if (localhost) {
    domain = urlEnviroment.serverApiUrlLocal;
  } else if (!localhost && process.env.NODE_ENV === 'test') {
    domain = defaultUrl;
  }

  return domain;
};

const URL_SERVER = getDomain();

export default URL_SERVER;
