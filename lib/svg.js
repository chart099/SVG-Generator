class SVG {
    constructor(){
        this.textElem= "";
        this.shapeElem = "";
    }

    render(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeElem}${this.textElem}</svg>`
    }

    setText(text , textColor ){
        if(text.length > 3){
            throw new Error ("Text must not exceed 3 characters.");
        }

        this.textElem = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`
    }

    setShape(shape){
        this.shapeElem = shape.render();
    }

}

module.exports = SVG;