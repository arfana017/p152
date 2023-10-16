AFRAME.registerComponent("car", {
    schema: {
        modelRef: {type: "string", default: "./cartoon_car/scene.gltf"},
        clickCounter: {type: "number", default: 0}
    },

    init: function() {
        this.el.setAttribute("gltf-model", this.data.modelRef)
        const position = { x: 10, y: 7, z: 70 }
        const rotation = { x: 0, y: -40, z: 0 }
        const scale = { x: 3, y: 3, z: 3}
        this.el.setAttribute("position", position)
        this.el.setAttribute("rotation", rotation)
        this.el.setAttribute("scale", scale)
    },

    update: function() {
        window.addEventListener("click", e => {
            this.data.clickCounter = this.data.clickCounter + 1
            if (this.data.clickCounter === 1) {
                const rotation = { x: 0, y: 20, z: 0}
                this.el.setAttribute("rotation", rotation)
            } 
            else if (this.data.clickCounter === 2) {
                const rotation = { x: 0, y: 100, z: 0 }
                this.el.setAttribute("rotation", rotation)
            }
            else if (this.data.clickCounter === 3) {
                const rotation = { x: 0, y: 160, z: 0 }
                this.el.setAttribute("rotation", rotation)
            }
            else if (this.data.clickCounter === 4) {
                const rotation = { x: 0, y: 240, z: 0 }
                this.el.setAttribute("rotation", rotation)
            }
            else {
                const rotation = { x: 0, y: -40, z: 0 };
                this.el.setAttribute("rotation", rotation);
                const cameraEl = document.querySelector("#camera");
                const position = { x: 10, y: 7, z: 70 };
                cameraEl.setAttribute("position", position);
                this.data.clickCounter = 0;
            }
            
        })
    }
})