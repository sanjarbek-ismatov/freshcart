function Store({ params }: { params: { slug: string } }) {
  return <p>Hello {params.slug}</p>;
}

export default Store;
