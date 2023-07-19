import HelloDemo from "@/components/HelloDemo.vue";
import { mount } from '@vue/test-utils';
import {test} from "vitest";
import {expect} from "vitest";
import {render} from "@testing-library/vue";

test('hello demo with mount', () => {
    expect(HelloDemo).toBeTruthy()
    let vueWrapper = mount(HelloDemo, {
        props: {
            msg: "helo"
        }
    });
    expect(vueWrapper.text()).toContain("helo")

})

test('hello demo with render', () => {
    const { getByText } = render(HelloDemo, {
        props: {
            msg: "hello world"
        }
    })
    getByText("hello world")
})