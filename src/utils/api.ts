import axios from "axios";

const baseUrl: string = process.env.BASE_URL || "";

function getHeader() {
  const token = localStorage.getItem("token");

  return {
    token: token,
  };
}

async function getRequest(path: string) {
  const result = await axios.get(path, {
    headers: getHeader(),
    baseURL: baseUrl,
  });

  return result;
}

async function postRequest(path: string, body: object) {
  const result = await axios.post(
    path,
    {
      ...body,
    },
    {
      headers: getHeader(),
      baseURL: baseUrl,
    }
  );

  return result;
}

async function patchRequest(path: string, body: object) {
  const result = await axios.patch(
    path,
    {
      ...body,
    },
    {
      headers: getHeader(),
      baseURL: baseUrl,
    }
  );

  return result;
}

async function deleteRequest(path: string) {
  const result = await axios.delete(path, {
    headers: getHeader(),
    baseURL: baseUrl,
  });

  return result;
}

export { getRequest, postRequest, patchRequest, deleteRequest };
