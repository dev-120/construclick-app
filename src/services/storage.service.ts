export const setItem = (key: string, value: any) => {
  sessionStorage.setItem(key, value);
};

export const getItem = (key: string) => sessionStorage.getItem(key);

export const removeItem = (key: string) => {
  sessionStorage.removeItem(key);
};
