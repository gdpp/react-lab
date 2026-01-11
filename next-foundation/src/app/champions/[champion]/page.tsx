const Champion = async ({ params }: { params: { champion: string } }) => {
  const { champion } = await params;

  return <div>Champion name: {champion}</div>;
};

export default Champion;
