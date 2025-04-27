import { html } from 'lit';
import LitWithoutShadowDom from '../base/lit-without-shadow-dom';
import { msg, updateWhenLocaleChanges } from '@lit/localize';
import Utils from '../../utils/utils';

class FormTitleAddStory extends LitWithoutShadowDom {
  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }

  render() {
    return html`
      <h5 class="text-center">
        ${msg(`Hai`)} ${Utils.getUserName()} <br />
        ${msg(`Kirim ceritamu di`)} Ceritain! <br />
      </h5>
      <p class="text-center">
        <a href="/user/add-guest-story.html"> ${msg(`Tambah cerita sebagai tamu`)}?</a>
      </p>
    `;
  }
}

customElements.define('form-title-add-story', FormTitleAddStory);
