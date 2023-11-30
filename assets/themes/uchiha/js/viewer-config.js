const image = document.getElementById("viewerjs");
const viewer = new Viewer(image, {
  // Custom toolbar.
  toolbar: {
    oneToOne: true,

    prev() {
      viewer.prev(false);
    },

    play: false,

    next() {
      viewer.next(false);
    },
  },
});
