"use strict";

module.exports = (data, props) => {
  return {
    type: "container",
    decoration: {
      color: 0x4287f5,
    },
    child: {
      type: "flex",
      direction: "horizontal",
      children: [
        {
          type: "text",
          value: "Header",
        },
      ],
    },
  };
};
