import HelloDemo from "@/components/HelloDemo.vue";
import { mount } from '@vue/test-utils';
import {test} from "vitest";
import {expect} from "vitest";

test('hello demo', () => {
    expect(HelloDemo).toBeTruthy()
    let vueWrapper = mount(HelloDemo, {
        props: {
            msg: "helo"
        }
    });
    expect(vueWrapper.text()).toContain("helo")

})