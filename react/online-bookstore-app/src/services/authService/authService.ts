export const saveJwtToStorage = (jwt: string) => {
  localStorage.setItem("token", jwt);
};
export const removeJwtFromStorage = () => {
  localStorage.removeItem("token");
};

export const getToken = () => {
  return localStorage.getItem("token");
};
