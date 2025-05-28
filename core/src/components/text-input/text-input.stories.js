export default {
  title: "Components/Text Input",
};

export const ExtraSmall = () => `
<div class="fudis-text-input fudis-input-size__xs">
  <label class="fudis-label" for="fudis-text-input-1" style="height: calc(2rem / var(--fudis-rem-multiplier));">
    <span class="fudis-label__content">
      <span class="fudis-label__content__text">Label</span>
    </span>
  </label>
  <input id="fudis-text-input-1" class="fudis-form-input fudis-text-input__input" type="text" aria-describedby="fudis-text-input-1_guidance"></input>
  <div class="fudis-guidance">
    <div id="fudis-text-input-1_guidance">
      <div id="fudis-guidance-1-errors">
        <div class="fudis-guidance__errors__list"></div>
      </div>
      <p class="fudis-guidance__help-text">Guidance text</p>
    </div>
  </div>
</div>
`;

export const Small = () => `
<div class="fudis-text-input fudis-input-size__sm">
  <label class="fudis-label" for="fudis-text-input-2" style="height: calc(2rem / var(--fudis-rem-multiplier));">
    <span class="fudis-label__content">
      <span class="fudis-label__content__text">Text input label</span>
    </span>
  </label>
  <input id="fudis-text-input-2" class="fudis-form-input fudis-text-input__input" type="text" aria-describedby="fudis-text-input-2_guidance"></input>
  <div class="fudis-guidance">
    <div id="fudis-text-input-2_guidance">
      <div id="fudis-guidance-2-errors">
        <div class="fudis-guidance__errors__list"></div>
      </div>
      <p class="fudis-guidance__help-text">Guidance text</p>
    </div>
  </div>
</div>
`;

export const Medium = () => `
<div class="fudis-text-input fudis-input-size__md">
  <label class="fudis-label" for="fudis-text-input-3" style="height: calc(2rem / var(--fudis-rem-multiplier));">
    <span class="fudis-label__content">
      <span class="fudis-label__content__text">Text input label</span>
    </span>
  </label>
  <input id="fudis-text-input-3" class="fudis-form-input fudis-text-input__input" type="text" aria-describedby="fudis-text-input-3_guidance"></input>
  <div class="fudis-guidance">
    <div id="fudis-text-input-3_guidance">
      <div id="fudis-guidance-3-errors">
        <div class="fudis-guidance__errors__list"></div>
      </div>
      <p class="fudis-guidance__help-text">Guidance text</p>
    </div>
  </div>
</div>
`;

export const Large = () => `
<div class="fudis-text-input fudis-input-size__lg">
  <label class="fudis-label" for="fudis-text-input-4" style="height: calc(2rem / var(--fudis-rem-multiplier));">
    <span class="fudis-label__content">
      <span class="fudis-label__content__text">Text input label</span>
    </span>
  </label>
  <input id="fudis-text-input-4" class="fudis-form-input fudis-text-input__input" type="text" aria-describedby="fudis-text-input-4_guidance"></input>
  <div class="fudis-guidance">
    <div id="fudis-text-input-4_guidance">
      <div id="fudis-guidance-4-errors">
        <div class="fudis-guidance__errors__list"></div>
      </div>
      <p class="fudis-guidance__help-text">Guidance text</p>
    </div>
  </div>
</div>
`;

export const Disabled = () => `
<div class="fudis-text-input fudis-input-size__md">
  <label class="fudis-label" for="fudis-text-input-5" style="height: calc(2rem / var(--fudis-rem-multiplier));">
    <span class="fudis-label__content">
      <span class="fudis-label__content__text">Text input label</span>
    </span>
  </label>
  <input id="fudis-text-input-5" class="fudis-form-input fudis-text-input__input" type="text" aria-describedby="fudis-text-input-5_guidance" aria-disabled="true" disabled></input>
  <div class="fudis-guidance">
    <div id="fudis-text-input-5_guidance">
      <div id="fudis-guidance-5-errors">
        <div class="fudis-guidance__errors__list"></div>
      </div>
      <p class="fudis-guidance__help-text">Guidance text</p>
    </div>
  </div>
</div>
`;

export const Invalid = () => `
<div class="fudis-text-input fudis-input-size__md">
  <label class="fudis-label" for="fudis-text-input-6" style="height: calc(2rem / var(--fudis-rem-multiplier));">
    <span class="fudis-label__content">
      <span class="fudis-label__content__text">Text input label</span>
    </span>
  </label>
  <input id="fudis-text-input-6" class="fudis-form-input fudis-text-input__input fudis-form-input--touched" type="text" aria-describedby="fudis-text-input-6_guidance" aria-invalid="true"></input>
  <div class="fudis-guidance">
    <div id="fudis-text-input-6_guidance">
      <div id="fudis-guidance-6-errors">
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
  <label class="fudis-label" for="fudis-text-input-7" style="height: calc(2rem / var(--fudis-rem-multiplier));">
    <span class="fudis-label__content">
      <span class="fudis-label__content__text">Text input label</span>
    </span>
  </label>
  <input id="fudis-text-input-7" class="fudis-form-input fudis-text-input__input" type="text" aria-describedby="fudis-text-input-7_guidance"></input>
  <div class="fudis-guidance">
    <div id="fudis-text-input-7_guidance">
      <div id="fudis-guidance-7-errors">
        <div class="fudis-guidance__errors__list"></div>
      </div>
      <p class="fudis-guidance__help-text">Guidance text</p>
    </div>
    <small class="fudis-guidance__character-limit-indicator fudis-guidance__character-limit-indicator__md">0/20</small>
  </div>
</div>
`;

export const Required = () => `
<div class="fudis-text-input fudis-input-size__md">
  <label class="fudis-label" for="fudis-text-input-8" style="height: calc(2rem / var(--fudis-rem-multiplier));">
    <span class="fudis-label__content">
      <span class="fudis-label__content__text">Text input label</span>
      <span class="fudis-label__content__space"></span>
      <span class="fudis-label__content__required">(Required)</span>
    </span>
  </label>
  <input id="fudis-text-input-8" class="fudis-form-input fudis-text-input__input" type="text" aria-describedby="fudis-text-input-8_guidance"></input>
  <div class="fudis-guidance">
    <div id="fudis-text-input-8_guidance">
      <div id="fudis-guidance-8-errors">
        <div class="fudis-guidance__errors__list"></div>
      </div>
      <p class="fudis-guidance__help-text">Guidance text</p>
    </div>
  </div>
</div>
`;

export const NumberInput = () => `
<div class="fudis-text-input fudis-input-size__sm">
  <label class="fudis-label" for="fudis-text-input-9" style="height: calc(2rem / var(--fudis-rem-multiplier));">
    <span class="fudis-label__content">
      <span class="fudis-label__content__text">Number input label</span>
    </span>
  </label>
  <input id="fudis-text-input-9" class="fudis-form-input fudis-text-input__input" type="number" aria-describedby="fudis-text-input-9_guidance"></input>
  <div class="fudis-guidance">
    <div id="fudis-text-input-9_guidance">
      <div id="fudis-guidance-9-errors">
        <div class="fudis-guidance__errors__list"></div>
      </div>
      <p class="fudis-guidance__help-text">Guidance text</p>
    </div>
  </div>
</div>
`;
