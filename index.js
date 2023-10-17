const fs = require("fs");
const inquirer = require("inquirer");

const { Square, Triangle, Circle } = require("./lib/shapes");
const SVG = require("./lib/svg");

inquirer
.prompt (
    [
        {   type: "input",
            message: "Enter 3 characters: ",
            name: "text"
        },
        {type: "input",
            message: "Enter desired text color: ",
            name: "textColor"
        },
        {
            type: "list",
            message: "Select desired shape: ",
            choices: ["Circle", "Triangle", "Square"],
            name: "shape"
        },
        {
            type: "input",
            message: "Enter desired shape color:",
            name: "shapeColor"
        }
    ]
)

.then( function(input) {
    let shape;
    switch (input.shape) {
        case "Circle":
            shape = new Circle()
            break;
        case "Square":
            shape = new Square()
            break;
        default:
            shape = new Triangle()
            break;
    }

    shape.setColor(input.shapeColor);

    let svg = new SVG();

    svg.setText(input.text, input.textColor);

    svg.setShape(shape);


     fs.writeFileSync("logo.svg", svg.render())
     

    
})

