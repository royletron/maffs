import NextLink from "next/link";
import MaterialLink from "@material-ui/core/Link";

export default function Link({ children, ...props }) {
  return (
    <NextLink {...props} passHref={true}>
      <MaterialLink>{children}</MaterialLink>
    </NextLink>
  );
}
