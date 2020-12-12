import { annotationsObjects } from "./playerConfiguration/annotationsConfig";

export const annotationsList = annotationsObjects
  .map((item) => {
    return {
      id: item.id,
      range: {
        start: item.range.start,
        end: item.range.end,
      },
      annotation: item.comments[0].body,
    };
  })
  .sort((a, b) => a.range.start - b.range.start);
