'use strict'

module.exports = (_data, _props) => {
  return {
    type: "flex",
    direction: "vertical",
    children: [
      {
        type: "widget",
        name: "header"
      },
      {
        type: "text",
        value: "Content"
      },
      {
        type: "widget",
        name: "footer"
      }
    ]
  }
}
