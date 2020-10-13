import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Typography, Divider } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(() => ({
  header: {
    textTransform: "uppercase"
  }
}));

function InfoCard({ title, value}) {
  const classes = useStyles();
  return (
    <>
      <Card margin = {10}>
        <CardContent>
          <Typography
            gutterBottom
            className={classes.header}
            color="textPrimary"
          >
            {title}
          </Typography>
         
          <Typography variant="h6" color="textPrimary">
            {value}
          </Typography>
         
        </CardContent>
      </Card>
    </>
  );
}

export { InfoCard };
