'use strict'

module.exports = (_data, _props) => {
    return {
        type: "flex",
        fillParent: true,
        children: [
            {
                type: "container",
                decoration: {
                    color: 0x550000FF,
                },
                child: {
                    type: "text",
                    value: "Header"
                }
            }
        ]
    }
}
