const API = "https://be-kjhm.onrender.com/";

export const get = async (path) => {
  try {
    const response = await fetch(API + path);
    const result = await response.json();
    return result;
  } catch (e) {
    console.log(e);
    return e;
  }
};

export const post = async (path, data) => {
  const response = await fetch(API + path, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const result = await response.json();
  return result;
};

export const put = async (path, data) => {
  const response = await fetch(API + path, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const result = await response.json();
  return result;
};

export const remove = async (path) => {
  const response = await fetch(API + path, {
    method: "DELETE",
  });
  const result = await response.json();
  return result;
};
export const patch = async (path, data) => {
  try {
    const response = await fetch(API + path, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    return result;
  } catch (e) {
    console.error(e);
    return e;
  }
};
