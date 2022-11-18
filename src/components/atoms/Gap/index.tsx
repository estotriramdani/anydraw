const Gap = ({
  height,
  width,
}: {
  height?: string | number;
  width?: string | number;
}) => {
  return <div style={{ height, width }} />;
};

export default Gap;
