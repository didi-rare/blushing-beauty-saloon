const ExternalLink = ({ href, children, className, ariaLabel, onClick }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        aria-label={ariaLabel}
        onClick={onClick}
    >
        {children}
    </a>
);

export default ExternalLink;
