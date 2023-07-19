import {test} from "vitest";
import {withSetup} from "../../utils/test-utils-v1";
import i18n from "./i18n";
import {inject} from "vue";
import {expect} from "vitest";

test('i18n', () => {

    const [app] = withSetup({
        setup() {
            return {}
        },
        template: `
        
        `
    })
    app.use(i18n, {
        greeting: {
            "morning": "good morning"
        }
    })
    const var_i18n = inject('i18n')
    expect(var_i18n.greeting.morning).toBe("good morning")

})