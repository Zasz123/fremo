import { get, post, patch, del } from "superagent";

const serverUrl: string = process.env.SERVER_URL || "";

function getHeader() {
  const token = localStorage.getItem("token");

  return {
    token: token,
  };
}

async function getRequest(path: string) {
  const result = await get(`${serverUrl}${path}`).set(getHeader());

  return result;
}

async function postRequest(path: string, body: object) {
  const result = await post(`${serverUrl}${path}`).set(getHeader()).send(body);

  return result;
}

async function patchRequest(path: string, body: object) {
  const result = await patch(`${serverUrl}${path}`).set(getHeader()).send(body);

  return result;
}

async function deleteRequest(path: string) {
  const result = await del(`${serverUrl}${path}`).set(getHeader());

  return result;
}

export { getRequest, postRequest, patchRequest, deleteRequest };
