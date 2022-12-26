import cx from "classnames";

type AvatarProps = {
  initials?: string;
  className?: string;
};

function Avatar({ initials, className }: AvatarProps) {
  return (
    <div
      className={cx(
        "h-10 w-10 rounded-full flex justify-center items-center bg-blue-100 text-slate-800 font-bold",
        className
      )}
    >
      <p>{initials ? initials : "R"}</p>
    </div>
  );
}

export default Avatar;
