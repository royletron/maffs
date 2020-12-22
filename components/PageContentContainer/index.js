import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  content: {
    padding: theme.spacing(0, 2),
  },
}));

export default function PageContentContainer({ children, ...props }) {
  const classes = useStyles();

  return (
    <Container
      component="main"
      className={classes.container}
      maxWidth="lg"
      {...props}
    >
      <div className={classes.content}>{children}</div>
    </Container>
  );
}
