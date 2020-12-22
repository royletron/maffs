import { makeStyles } from "@material-ui/core/styles";
import Header from "components/Header";
import Footer from "components/Footer";
import DefaultLayout from "layouts/Default";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  main: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));

export default function StickyFooterLayout({ children }) {
  const classes = useStyles();

  return (
    <DefaultLayout className={classes.root}>
      <Header />
      {children}
      <Footer />
    </DefaultLayout>
  );
}
