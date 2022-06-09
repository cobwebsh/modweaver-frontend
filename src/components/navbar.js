import { LitElement, html } from 'lit';

export const tagName = 'navbar';

//@customElement('nabar')
class NavBar extends LitElement {
  render() {
    return html` <p>NavBar</p> `;
  }
}

customElements.define(tagName, NavBar);