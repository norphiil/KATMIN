'use strict'

module.exports = (_data, _props) => {
    return {
        type: "flex",
        children: [
            {
                type: "container",
                decoration: {
                    color: 0x55FF0000,
                },
                child: {
                    type: "text",
                    value: "Footer"
                }
            }
        ]
    }
}
