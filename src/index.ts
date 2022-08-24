import { GroupMessageEvent, Listener, subscribeEvent } from "makiko-api"

let listener: Listener

/**
 * 插件加载
 */
// @ts-ignore
globalThis.onLoad = () => {
    console.log("Hello World");
    listener = subscribeEvent<GroupMessageEvent>(GroupMessageEvent, (e) => {
        if (e.getMessage().contentToString() == "3G") {
            e.getGroup().sendMessage("重现3g荣光, 我辈义不容辞！")
        }
    })
}

/**
 * 插件卸载
 */
// @ts-ignore
globalThis.onUnload = () => {
    console.log("Goodbye World");
    listener.complete()
}