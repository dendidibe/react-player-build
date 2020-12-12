import { makeStyles } from "@material-ui/core/styles";
import { green, red, blue, yellow } from "@material-ui/core/colors";

export const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export const useMarkerColor = makeStyles((theme) => ({
  bgColor: {
    backgroundColor: blue[400],
    "&:hover": {
      backgroundColor: blue[300],
    },
  },
  bgColorActive: {
    backgroundColor: yellow[600],
    "&:hover": {
      backgroundColor: yellow[500],
    },
  },
}));

export const usePhaseColor = makeStyles((theme) => ({
  bgColor: {
    backgroundColor: green[600],
    "&:hover": {
      backgroundColor: green[500],
    },
  },
  bgColorActive: {
    backgroundColor: red[600],
    "&:hover": {
      backgroundColor: red[500],
    },
  },
}));
