const SERVER_URL = 'https://bvtrots-mock-server.onrender.com';

const BASE_URL = `${SERVER_URL}/cloudpix-platform`;

const Route = {
  GET_DATA: '/data',
  SEND_DATA: '/upload',
};

const Method = {
  GET: 'GET',
  POST: 'POST',
};

const load = async (route, method = Method.GET, body = null) => {
  const response = await fetch(`${BASE_URL}${route}`, { method, body });

  if (!response.ok) {
    throw new Error();
  }

  return await response.json();
};

const getPhotos =() =>  load(Route.GET_DATA);
const getFullPhotoUrl = (url) =>
  `${SERVER_URL}/public/cloudpix-platform/${url}`;

const uploadNewPhoto = (body) => load(Route.SEND_DATA, Method.POST, body);

export { getPhotos, uploadNewPhoto, getFullPhotoUrl };
