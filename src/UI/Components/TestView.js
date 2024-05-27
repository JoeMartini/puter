import { Component, defineComponent } from "../../util/Component.js";

/**
 * A simple component when you just need to test something.
 */
export default class TestView extends Component {
    static CSS = `
        div {
            background-color: lightblue;
            padding: 1em;
            border-radius: 0.5em;
        }
    `;

    create_template ({ template }) {
        $(template).html(`
            <div>I am a test view</div>
        `);
    }
}

defineComponent('c-test-view', TestView);
