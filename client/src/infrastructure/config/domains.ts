const serverApiUrlLocal = process.env.REACT_APP_SERVER_API_URL_LOCAL ?? 'http://localhost:3000';
const frontendUrlLocal = process.env.REACT_APP_FRONTEND_URL_LOCAL ?? 'http://localhost:4200';
// serverApiUrl Prod, QA, Dev

const urlEnviroment = {
    serverApiUrlLocal,
}

const getDomain = () : string => {
	let localhost = false;

    localhost = window.location.origin.indexOf(frontendUrlLocal) >= 0;

    let domain = '';
    if (localhost) domain = urlEnviroment.serverApiUrlLocal;

	return domain;
}

const URL_SERVER = getDomain();

export default URL_SERVER;