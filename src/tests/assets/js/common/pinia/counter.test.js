import {test} from "vitest";
import {expect} from "vitest";
import {useCounterStore} from "@/assets/js/common/pinia/counter";
import {createPinia, storeToRefs} from "pinia";
import {withSetup} from "../../../../../utils/test-utils";
test('test demo', () => {
    expect(1).toBe(1)
})

test('useCounterStore', () => {
    const [app] = withSetup()
    app.use(createPinia())
    const counter = useCounterStore()
    const { count, doubleCount } = storeToRefs(counter)
    expect(count.value).toBe(2)
// 作为 action 的 increment 可以直接解构
    const { increment } = counter
    increment()
    expect(count.value).toBe(3)
})