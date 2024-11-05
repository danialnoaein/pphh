import { useState } from "react";

const tabsData = [
  {
    label: "صندوق بهگزین",
    content:
      "Ut irure mollit nulla eiusmod excepteur laboris elit sit anim magna tempor excepteur labore nulla.",
  },
  {
    label: "صندوق پتروپاداش",
    content:
      "Fugiat dolor et quis in incididunt aute. Ullamco voluptate consectetur dolor officia sunt est dolor sint.",
  },

  {
    label: "صندوق پاداش",
    content:
      "Fugiat dolor et quis in incididunt aute. Ullamco voluptate consectetur dolor officia sunt est dolor sint.",
  },
];

const Tabs = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <div className='container mx-auto my-16'>
      <div className='flex'>
        {/* Loop through tab data and render button for each. */}
        {tabsData.map((tab, idx) => {
          return (
            <button
              key={idx}
              className={`border border-b-0 rounded-t-full py-1 px-6 bg-[#F6F9FC]`}
              // Change the active tab on click.
              onClick={() => setActiveTabIndex(idx)}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      {/* Show active tab content. */}
      <div className='py-4 border bg-[#FAFBFF]'>
        <p>{tabsData[activeTabIndex].content}</p>
      </div>
    </div>
  );
};

export default Tabs;
