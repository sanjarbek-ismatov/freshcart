export function gettoken(name: string) {
  if (typeof window !== "undefined")
    return localStorage.getItem(name) as string;
}

