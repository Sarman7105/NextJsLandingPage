/** @jsx jsx */
import { jsx, Image } from "theme-ui";
import { Link } from "components/link";

export default function Logo({ src, ...rest }) {
  return (
    <Link
      path="/"
      sx={{
        variant: "link-logo",
        display: "flex",
        mr: 15,
        cursor: "pointer",
      }}
      {...rest}
    >
      <Image src={src} />
    </Link>
  );
}
