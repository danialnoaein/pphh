const TextSection = ({
  header,
  description,
}: {
  header: JSX.Element;
  description: string;
}) => {
  return (
    <div className='py-16 container mx-auto text-section text-center bg-center'>
      <div className='text-3xl'>{header}</div>
      <div className='mt-4'>{description}</div>
    </div>
  );
};

export default TextSection;
