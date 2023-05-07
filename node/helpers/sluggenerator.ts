export function sluggenerator(name: string) {
  return name.replace(/\s+/g, "-").toLowerCase() + Math.random().toString(5);
}
