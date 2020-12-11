export const annotationsObjects = [
  {
    id: 1,
    range: {
      start: 3,
      end: 15,
    },
    shape: {},
    comments: [
      {
        id: 1,
        meta: {},
        body: "The first comment!",
      },
    ],
  },
  {
    id: 2,
    range: {
      start: 7,
      end: null,
    },
    shape: {},
    comments: [
      {
        id: 2,
        meta: {},
        body: "The first marker!",
      },
    ],
  },
  {
    id: 3,
    range: {
      start: 7,
      end: 11,
    },
    shape: {},
    comments: [
      {
        id: 3,
        meta: {},
        body: "The third comment!",
      },
    ],
  },
  {
    id: 4,
    range: {
      start: 16,
      end: null,
    },
    shape: {},
    comments: [
      {
        id: 4,
        meta: {},
        body: "The fourth Marker!",
      },
    ],
  },
  {
    id: 5,
    range: {
      start: 19,
      end: null,
    },
    shape: {},
    comments: [
      {
        id: 5,
        meta: {},
        body: "The fifth Marker!",
      },
    ],
  },
  {
    id: 6,
    range: {
      start: 25,
      end: null,
    },
    shape: {},
    comments: [
      {
        id: 6,
        meta: {},
        body: "The third comment!",
      },
    ],
  },
  {
    id: 7,
    range: {
      start: 18,
      end: 30,
    },
    shape: {},
    comments: [
      {
        id: 7,
        meta: {},
        body: "The fourth Marker!",
      },
    ],
  },
];
export const pluginOptions = {
  // Collection of annotation data to initialize
  annotationsObjects,
  // Flexible meta data object (currently used for user data, but addl data can be provided to wrap each comment with metadata - provide the id of the current user and fullname of the current user at minimum, which are required for the UI)
  meta: { user_id: null, user_name: null },
  // Use arrow keys to move through annotations when Annotation mode is active
  bindArrowKeys: true,
  // Show or hide the control panel and annotation toggle button (NOTE - if controls are hidden you must provide custom UI and events to drive the annotations - more on that in "Programmatic Control" below)
  showControls: true,
  // Show or hide the comment list when an annotation is active. If false, the text 'Click and drag to select', will follow the cursor during annotation mode
  showCommentList: false,
  // If false, annotations mode will be disabled in fullscreen
  showFullScreen: true,
  // Show or hide the tooltips with comment preview, and annotation shape, on marker hover or timeline activate
  showMarkerShapeAndTooltips: true,
  // If false, step two of adding annotations (writing and saving the comment) will be disabled
  internalCommenting: false,
  // If true, toggle the player to annotation mode immediately after init. (NOTE - "annotationModeEnabled" event is not fired for this initial state)
  startInAnnotationMode: true,
};
