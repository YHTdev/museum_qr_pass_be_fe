import * as HIcons from "@heroicons/react/solid";

const IconSolid = ({ icon, className }) => {
  const { ...icons } = HIcons;
  const TheIcon = icons[icon];
  return (
    <>
      <TheIcon
        className={className ? `${className}` : " w-5 h-5"}
        aria-hidden="true"
      />
    </>
  );
};

export default IconSolid;
