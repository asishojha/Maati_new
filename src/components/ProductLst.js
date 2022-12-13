import React from "react";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import productx from "./products";
const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
    backgroundColor: "#fafafa"
  },
  media: {
    height: 300
  }
});

function ProductLst() {
  const classes = useStyles();

  return (
    <div style={{ marginTop: 50 }}>
      <Container>
        <Grid container spacing={3}>
          {productx.map((character) => (
            <Grid item xs={12} sm={3} key={character.id}>
              <Card className={classes.card}>
                <CardMedia className={classes.media} image={character.img} />
                <CardContent>
                  <Typography color="primary" variant="h5">
                    {character.name}
                  </Typography>
                  <Typography color="textSecondary" variant="subtitle2">
                    {character.Description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default ProductLst;
