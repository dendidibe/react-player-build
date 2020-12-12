import React, { useState } from "react";

import {
  Button,
  ListItemText,
  List,
  ButtonGroup,
  Container,
} from "@material-ui/core";

import {
  ColorListItem,
  useMarkerColor,
  usePhaseColor,
  useStyles,
} from "./styledComponents/index";

import { VideoPlayer } from "./VideoPlayer";
import { videoPlayerConfig } from "./playerConfiguration/videoPlayerConfig";
import { annotationsList } from "./utils/utils";

export const App = () => {

  const classes = useStyles();
  const phaseColor = usePhaseColor();
  const markerColor = useMarkerColor();

  const [player, setPlayer] = useState(null);
  const [id, setId] = useState(null);

  const markersList = annotationsList.filter(
    (annotation) => annotation.range.end === null
  );

  const phasesList = annotationsList.filter(
    (annotation) => annotation.range.end
  );

  const setTime = (time) => {
    player.currentTime(time);
  };

  return (
    <Container maxWidth="lg">
      <VideoPlayer {...videoPlayerConfig} setPlayer={setPlayer} setId={setId} />
      <div className="box">
        <ButtonGroup
          color="secondary"
          aria-label="outlined secondary button group"
        >
          {phasesList.map((item, i) => (
            <Button
              variant="contained"
              className={`${
                item.id === id ? phaseColor.bgColorActive : phaseColor.bgColor
              } ${classes.margin}`}
              onClick={() => setTime(item.range.start)}
            >
              {`Phase ${i + 1}`}
            </Button>
          ))}
        </ButtonGroup>
      </div>

      <List>
        {markersList.map((marker, i) => (
          <ColorListItem
            key={marker.id}
            button
            onClick={() => setTime(marker.range.start)}
            className={
              marker.id === id ? markerColor.bgColorActive : markerColor.bgColor
            }
          >
            <ListItemText
              primary={`Event ${i + 1}`}
              secondary={marker.annotation}
              classes={{
                secondary: classes.secondary
              }}
            />
          </ColorListItem>
        ))}
      </List>
    </Container>
  );
};
