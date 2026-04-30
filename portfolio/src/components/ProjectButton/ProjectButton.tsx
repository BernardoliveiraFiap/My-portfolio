type ProjectButtonProps = {
  href: string;
  label: string;
  ariaLabel?: string;
  className?: string;
};

const ProjectButton = ({ href, label, ariaLabel, className }: ProjectButtonProps) => {
  const combinedClassName = className
    ? `projects__cta ${className}`
    : "projects__cta";

  return (
    <a
      className={combinedClassName}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
    >
      {label}
    </a>
  );
};

export default ProjectButton;
