import { IconChevronUp } from "@tabler/icons-react";

const MoveToTopInFooter = () => {
  const handleMoveToTopClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className='flex justify-center my-4'>
      <div
        className='shadow rounded-full p-2'
        onClick={handleMoveToTopClick}
      >
        <IconChevronUp />
      </div>
    </div>
  );
};

export default MoveToTopInFooter;
