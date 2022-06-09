"use strict";

module.exports = (data, props) => {
  return {
    type: "flex",
    direction: "vertical",
    children: [
      {
        type: "widget",
        name: "header",
      },
      {
        type: "widget",
        name: "body",
      },
      {
        type: "widget",
        name: "footer",
      },
    ],
  };
};
