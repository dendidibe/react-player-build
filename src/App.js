import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";

import { VideoPlayer } from "./VideoPlayer";
import { videoPlayerConfig } from "./playerConfiguration/videoPlayerConfig";
import { annotationsList } from "./utils";

export const App = () => {
  const [player, setPlayer] = useState(null);

  const markersList = annotationsList.filter(
    (annotation) => annotation.range.end === null
  );
  const phasesList = annotationsList.filter(
    (annotation) => annotation.range.end !== null
  );

  const setTime = (time) => {
    player.currentTime(time);
  };

  return (
    <Container maxWidth="md">
      <VideoPlayer {...videoPlayerConfig} setPlayer={setPlayer} />
      <ButtonGroup
        color="secondary"
        aria-label="outlined secondary button group"
      >
        {phasesList.map((item) => (
          <Button
            variant="outlined"
            color="secondary"
            key={item.id}
            onClick={() => setTime(item.range.start)}
          >
            {item.annotation}
          </Button>
        ))}
      </ButtonGroup>
      <List>
        {markersList.map((marker, i) => (
          <ListItem
            key={marker.id}
            button
            onClick={() => setTime(marker.range.start)}
          >
            <ListItemText
              primary={`Phase ${i + 1}`}
              secondary={marker.annotation}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};
