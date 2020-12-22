import { makeStyles } from "@material-ui/core";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  logo: {
    fontSize: "3em",
    fontWeight: "100",
    textDecoration: "none",
    color: theme.palette.primary.main,
  },
}));

export default function Logo() {
  const classes = useStyles();
  return (
    <div>
      <Link href="/">
        <a className={classes.logo}>&#x029C2;</a>
      </Link>
    </div>
  );
}
