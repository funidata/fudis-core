export default {
  title: "Components/Text Input",
};

export const ExtraSmall = () => `
<div class="fudis-text-input fudis-input-size__xs">
  <label class="fudis-label" for="fudis-text-input-id">
    <span class="fudis-label__content">
      <span class="fudis-label__content__text">Label</span>
    </span>
  </label>
  <input id="fudis-text-input-id" class="fudis-form-input fudis-text-input__input" type="text" aria-describedby="fudis-text-input-id_guidance"></input>
  <div id="fudis-guidance-id" class="fudis-guidance">
    <div id="fudis-text-input-id_guidance">
      <div id="fudis-guidance-id-errors" class="fudis-guidance__errors">
        <div class="fudis-guidance__errors__list"></div>
      </div>
      <p class="fudis-guidance__help-text">Guidance text</p>
    </div>
  </div>
</div>
`;

export const Small = () => `
<div class="fudis-text-input fudis-input-size__sm">
  <label class="fudis-label" for="fudis-text-input-id">
    <span class="fudis-label__content">
      <span class="fudis-label__content__text">Text input label</span>
    </span>
  </label>
  <input id="fudis-text-input-id" class="fudis-form-input fudis-text-input__input" type="text" aria-describedby="fudis-text-input-id_guidance"></input>
  <div id="fudis-guidance-id" class="fudis-guidance">
    <div id="fudis-text-input-id_guidance">
      <div id="fudis-guidance-id-errors" class="fudis-guidance__errors">
        <div class="fudis-guidance__errors__list"></div>
      </div>
      <p class="fudis-guidance__help-text">Guidance text</p>
    </div>
  </div>
</div>
`;

export const Medium = () => `
<div class="fudis-text-input fudis-input-size__md">
  <label class="fudis-label" for="fudis-text-input-id">
    <span class="fudis-label__content">
      <span class="fudis-label__content__text">Text input label</span>
    </span>
  </label>
  <input id="fudis-text-input-id" class="fudis-form-input fudis-text-input__input" type="text" aria-describedby="fudis-text-input-id_guidance"></input>
  <div id="fudis-guidance-id" class="fudis-guidance">
    <div id="fudis-text-input-id_guidance">
      <div id="fudis-guidance-id-errors" class="fudis-guidance__errors">
        <div class="fudis-guidance__errors__list"></div>
      </div>
      <p class="fudis-guidance__help-text">Guidance text</p>
    </div>
  </div>
</div>
`;

export const Large = () => `
<div class="fudis-text-input fudis-input-size__lg">
  <label class="fudis-label" for="fudis-text-input-id">
    <span class="fudis-label__content">
      <span class="fudis-label__content__text">Text input label</span>
    </span>
  </label>
  <input id="fudis-text-input-id" class="fudis-form-input fudis-text-input__input" type="text" aria-describedby="fudis-text-input-id_guidance"></input>
  <div id="fudis-guidance-id" class="fudis-guidance">
    <div id="fudis-text-input-id_guidance">
      <div id="fudis-guidance-id-errors" class="fudis-guidance__errors">
        <div class="fudis-guidance__errors__list"></div>
      </div>
      <p class="fudis-guidance__help-text">Guidance text</p>
    </div>
  </div>
</div>
`;

export const Disabled = () => `
<div class="fudis-text-input fudis-input-size__md">
  <label class="fudis-label" for="fudis-text-input-id">
    <span class="fudis-label__content">
      <span class="fudis-label__content__text">Text input label</span>
    </span>
  </label>
  <input id="fudis-text-input-id" class="fudis-form-input fudis-text-input__input" type="text" aria-describedby="fudis-text-input-id_guidance" aria-disabled="true" disabled></input>
  <div id="fudis-guidance-id" class="fudis-guidance">
    <div id="fudis-text-input-id_guidance">
      <div id="fudis-guidance-id-errors" class="fudis-guidance__errors">
        <div class="fudis-guidance__errors__list"></div>
      </div>
      <p class="fudis-guidance__help-text">Guidance text</p>
    </div>
  </div>
</div>
`;

export const Invalid = () => `
<div class="fudis-text-input fudis-input-size__md">
  <label class="fudis-label" for="fudis-text-input-id">
    <span class="fudis-label__content">
      <span class="fudis-label__content__text">Text input label</span>
    </span>
  </label>
  <input id="fudis-text-input-id" class="fudis-form-input fudis-text-input__input" type="text" aria-describedby="fudis-text-input-id_guidance" aria-invalid="true"></input>
  <div class="fudis-guidance">
    <div id="fudis-text-input-id_guidance">
      <div id="fudis-guidance-id-errors">
        <div class="fudis-guidance__errors__list">
          <p class="fudis-error-message fudis-error-message__form-error">Validator error message</p>
        </div>
      </div>
    </div>
  </div>
</div>
`;

export const CharacterLimit = () => `
<div class="fudis-text-input fudis-input-size__md">
  <label class="fudis-label" for="fudis-text-input-id">
    <span class="fudis-label__content">
      <span class="fudis-label__content__text">Text input label</span>
    </span>
  </label>
  <input id="fudis-text-input-id" class="fudis-form-input fudis-text-input__input" type="text" aria-describedby="fudis-text-input-id_guidance"></input>
  <div id="fudis-guidance-id" class="fudis-guidance">
    <div id="fudis-text-input-id_guidance">
      <div id="fudis-guidance-id-errors" class="fudis-guidance__errors">
        <div class="fudis-guidance__errors__list"></div>
      </div>
      <p class="fudis-guidance__help-text">Guidance text</p>
    </div>
    <small class="fudis-guidance__character-limit-indicator fudis-guidance__character-limit-indicator__md">
      0/20
      <span class="fudis-visually-hidden">characters used</span>
    </small>
  </div>
</div>
`;

export const Required = () => `
<div class="fudis-text-input fudis-input-size__md">
  <label class="fudis-label" for="fudis-text-input-id">
    <span class="fudis-label__content">
      <span class="fudis-label__content__text">Text input label</span>
      <span class="fudis-label__content__space"></span>
      <span class="fudis-label__content__required">(Required)</span>
    </span>
  </label>
  <input id="fudis-text-input-id" class="fudis-form-input fudis-text-input__input" type="text" aria-describedby="fudis-text-input-id_guidance"></input>
  <div id="fudis-guidance-id" class="fudis-guidance">
    <div id="fudis-text-input-id_guidance">
      <div id="fudis-guidance-id-errors" class="fudis-guidance__errors">
        <div class="fudis-guidance__errors__list"></div>
      </div>
      <p class="fudis-guidance__help-text">Guidance text</p>
    </div>
  </div>
</div>
`;

export const NumberInput = () => `
<div class="fudis-text-input fudis-input-size__sm">
  <label class="fudis-label" for="fudis-text-input-id">
    <span class="fudis-label__content">
      <span class="fudis-label__content__text">Number input label</span>
    </span>
  </label>
  <input id="fudis-text-input-id" class="fudis-form-input fudis-text-input__input" type="number" aria-describedby="fudis-text-input-id_guidance"></input>
  <div id="fudis-guidance-id" class="fudis-guidance">
    <div id="fudis-text-input-id_guidance">
      <div id="fudis-guidance-id-errors" class="fudis-guidance__errors">
        <div class="fudis-guidance__errors__list"></div>
      </div>
      <p class="fudis-guidance__help-text">Guidance text</p>
    </div>
  </div>
</div>
`;
