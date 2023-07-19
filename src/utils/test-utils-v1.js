// test-utils.js
import { createApp } from 'vue'

export function withSetup(rootComponent) {
    // let result
    const app = createApp(rootComponent)
    app.mount(document.createElement('div'))
    // 返回结果与应用实例
    // 用来测试供给和组件卸载
    return [app]
}
