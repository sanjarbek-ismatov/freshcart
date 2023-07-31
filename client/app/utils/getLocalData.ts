export function getLocalData(name: string) {
  if (typeof window !== "undefined")
    return localStorage.getItem(name) as string;
}

export function setLocalData(key: string, value: string) {
  typeof window !== "undefined" && localStorage.setItem(key, value);
}

export function removeLocalData(key: string) {
  typeof window !== "undefined" && localStorage.removeItem(key);
}
