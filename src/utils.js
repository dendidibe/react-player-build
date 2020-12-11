import { annotationsObjects } from "./playerConfiguration/annotationsConfig";

export let annotationsList = annotationsObjects.map((item) => {
  return {
    id: item.id,
    range: {
      start: item.range.start,
      end: item.range.end,
    },
    annotation: item.comments[0].body,
  };
});
