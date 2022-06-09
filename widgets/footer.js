"use strict";

module.exports = (data, props) => {
  return {
    type: "container",
    decoration: {
      color: 0xffa83232,
    },
    child: {
      type: "flex",
      fillParent: true,
      direction: "horizontal",
      children: [
        {
          type: "text",
          value: "Footer",
        },
      ],
    },
  };
};
