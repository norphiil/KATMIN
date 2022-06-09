"use strict";

module.exports = (data, props) => {
  return {
    type: "flexible",
    child: {
      type: "container",
      child: {
        type: "flex",
        fillParent: true,
        direction: "horizontal",
        children: [
          {
            type: "text",
            value: "Body",
          },
        ],
      },
    },
  };
};
