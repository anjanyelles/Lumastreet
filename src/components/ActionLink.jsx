export default function ActionLink({
  href = "#briefing",
  variant = "primary",
  className = "",
  children,
}) {
  const classes = ["ls-button", "ls-button--" + variant, className]
    .filter(Boolean)
    .join(" ");

  return <a className={classes} href={href}>{children}</a>;
}
