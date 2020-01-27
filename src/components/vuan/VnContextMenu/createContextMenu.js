import VnContextMenu from "./VnContextMenu"
import Vue from 'vue'

export default function (mouseEvent, items, options) {
    const additionalOffsetX = options && options.offsetX ? options.offsetX : 5
    const additionalOffsetY = options && options.offsetY ? options.offsetY : 5
    const id = options && options.id ? options.id : null

    const contextMenuClass = Vue.extend(VnContextMenu)
    const contextMenu = new contextMenuClass({
        propsData: {
            items: items,
            leftOffset: mouseEvent.offsetX + additionalOffsetX,
            topOffset: mouseEvent.offsetY + additionalOffsetY,
            id
        }
    })
    contextMenu.$mount()
    mouseEvent.target.appendChild(contextMenu.$el)
    setTimeout(() => {contextMenu.init()}, 1)
}