function sluggenerator(name: string) {
  return name.replace(/\s+/g, "-").toLowerCase() + ~~(Math.random() * 1000);
}

export { sluggenerator };
