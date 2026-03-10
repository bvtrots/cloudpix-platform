import Toast from "../toast.js";

const SERVER_URL = 'https://bvtrots-test-server.onrender.com';
// const SERVER_URL = 'http://localhost:3000';

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
  const toast = new Toast(SERVER_URL);

  try {
  const response = await fetch(`${BASE_URL}${route}`, {method, body});
      toast.showToast();

    if (!response.ok) {
      throw new Error();
    }

    const data = await response.json();

    if (data && data.length > 0) {
      toast.hideToast()
    }

    return data;

  } catch (err) {
    toast.showToast();
    throw err;
  }
}

const getPhotos = () => load(Route.GET_DATA);
const getFullUrl = (url) => `${SERVER_URL}/${url}`;

const uploadNewPhoto = (body) => load(Route.SEND_DATA, Method.POST, body);

export {getFullUrl, getPhotos, uploadNewPhoto};
