import { makeStyles } from "@material-ui/core/styles";
import { green, red, blue, yellow } from "@material-ui/core/colors";
import {ListItem, withStyles} from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  secondary: {
    color: "rgba(0,0,0,0.8)",
  }
}));

export const useMarkerColor = makeStyles((theme) => ({
  bgColor: {
    backgroundColor: blue[600],
    transition: 'all .5s ease',
    "&:hover": {
      backgroundColor: blue[500],
    },
  },
  bgColorActive: {
    backgroundColor: yellow[700],
    color: theme.palette.getContrastText(yellow[700]),
    transition: 'all .5s ease',
    "&:hover": {
      backgroundColor: yellow[600],
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

export const ColorListItem = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(blue[500]),
    borderBottom: '1px solid black',
  },
}))(ListItem);
