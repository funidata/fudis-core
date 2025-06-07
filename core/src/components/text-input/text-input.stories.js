export default {
  title: "Components/Text Input",
};

export const ExtraSmall = () => `
<!-- Change text input size by changing the fudis-input-size__ class. xs, sm, md, and lg available. -->
<div class="fudis-text-input fudis-input-size__xs">
  <label class="fudis-label" for="fudis-text-input-id">
    <span class="fudis-label__content">
      <span class="fudis-label__content__text">Label</span>
    </span>
  </label>
  <input id="fudis-text-input-id" class="fudis-form-input fudis-text-input__input" type="text" aria-describedby="fudis-text-input-id_guidance"></input>
  <div id="fudis-guidance-id" class="fudis-guidance">
    <div id="fudis-text-input-id_guidance">
      <!-- When invalid: add fudis-guidance__errors block or a single fudis-error-message block from below -->
      <!-- <div class="fudis-guidance__errors">
              <span class="fudis-icon fudis-icon__color__red fudis-icon__lg fudis-icon__alert"></span>
              <div class="fudis-guidance__errors__list">
                  <p class="fudis-error-message fudis-error-message__form-error">
                      Validator error message
                  </p>
              </div>
           </div>
      -->
      <!-- When no need for guidance, remove the fudis-guidance__help-text block -->
      <p class="fudis-guidance__help-text">Guidance text</p>
    </div>
  </div>
</div>
`;

export const Small = () => `
<!-- Change text input size by changing the fudis-input-size__ class. xs, sm, md, and lg available. -->
<div class="fudis-text-input fudis-input-size__sm">
  <label class="fudis-label" for="fudis-text-input-id">
    <span class="fudis-label__content">
      <span class="fudis-label__content__text">Text input label</span>
    </span>
  </label>
  <input id="fudis-text-input-id" class="fudis-form-input fudis-text-input__input" type="text" aria-describedby="fudis-text-input-id_guidance"></input>
  <div id="fudis-guidance-id" class="fudis-guidance">
    <div id="fudis-text-input-id_guidance">
      <!-- When invalid: add fudis-guidance__errors block or a single fudis-error-message block from below -->
      <!-- <div class="fudis-guidance__errors">
              <span class="fudis-icon fudis-icon__color__red fudis-icon__lg fudis-icon__alert"></span>
              <div class="fudis-guidance__errors__list">
                  <p class="fudis-error-message fudis-error-message__form-error">
                      Validator error message
                  </p>
              </div>
           </div>
      -->
      <!-- When no need for guidance, remove the fudis-guidance__help-text block -->
      <p class="fudis-guidance__help-text">Guidance text</p>
    </div>
  </div>
</div>
`;

export const Medium = () => `
<!-- Change text input size by changing the fudis-input-size__ class. xs, sm, md, and lg available. -->
<div class="fudis-text-input fudis-input-size__md">
  <label class="fudis-label" for="fudis-text-input-id">
    <span class="fudis-label__content">
      <span class="fudis-label__content__text">Text input label</span>
    </span>
  </label>
  <input id="fudis-text-input-id" class="fudis-form-input fudis-text-input__input" type="text" aria-describedby="fudis-text-input-id_guidance"></input>
  <div id="fudis-guidance-id" class="fudis-guidance">
    <div id="fudis-text-input-id_guidance">
      <!-- When invalid: add fudis-guidance__errors block or a single fudis-error-message block from below -->
      <!-- <div class="fudis-guidance__errors">
              <span class="fudis-icon fudis-icon__color__red fudis-icon__lg fudis-icon__alert"></span>
              <div class="fudis-guidance__errors__list">
                  <p class="fudis-error-message fudis-error-message__form-error">
                      Validator error message
                  </p>
              </div>
           </div>
      -->
      <!-- When no need for guidance, remove the fudis-guidance__help-text block -->
      <p class="fudis-guidance__help-text">Guidance text</p>
    </div>
  </div>
</div>
`;

export const Large = () => `
<!-- Change text input size by changing the fudis-input-size__ class. xs, sm, md, and lg available. -->
<div class="fudis-text-input fudis-input-size__lg">
  <label class="fudis-label" for="fudis-text-input-id">
    <span class="fudis-label__content">
      <span class="fudis-label__content__text">Text input label</span>
    </span>
  </label>
  <input id="fudis-text-input-id" class="fudis-form-input fudis-text-input__input" type="text" aria-describedby="fudis-text-input-id_guidance"></input>
  <div id="fudis-guidance-id" class="fudis-guidance">
    <div id="fudis-text-input-id_guidance">
      <!-- When invalid: add fudis-guidance__errors block or a single fudis-error-message block from below -->
      <!-- <div class="fudis-guidance__errors">
              <span class="fudis-icon fudis-icon__color__red fudis-icon__lg fudis-icon__alert"></span>
              <div class="fudis-guidance__errors__list">
                  <p class="fudis-error-message fudis-error-message__form-error">
                      Validator error message
                  </p>
              </div>
           </div>
      -->
      <!-- When no need for guidance, remove the fudis-guidance__help-text block -->
      <p class="fudis-guidance__help-text">Guidance text</p>
    </div>
  </div>
</div>
`;

export const Disabled = () => `
<!-- Change text input size by changing the fudis-input-size__ class. xs, sm, md, and lg available. -->
<div class="fudis-text-input fudis-input-size__md">
  <label class="fudis-label" for="fudis-text-input-id">
    <span class="fudis-label__content">
      <span class="fudis-label__content__text">Text input label</span>
    </span>
  </label>
  <input id="fudis-text-input-id" class="fudis-form-input fudis-text-input__input" type="text" aria-describedby="fudis-text-input-id_guidance" aria-disabled="true" disabled></input>
  <div id="fudis-guidance-id" class="fudis-guidance">
    <div id="fudis-text-input-id_guidance">
      <!-- When no need for guidance, remove the fudis-guidance__help-text block -->
      <p class="fudis-guidance__help-text">Guidance text</p>
    </div>
  </div>
</div>
`;

export const Invalid = () => `
<!-- Change text input size by changing the fudis-input-size__ class. xs, sm, md, and lg available. -->
<div class="fudis-text-input fudis-input-size__md">
  <label class="fudis-label" for="fudis-text-input-id">
    <span class="fudis-label__content">
      <span class="fudis-label__content__text">Text input label</span>
    </span>
  </label>
  <input id="fudis-text-input-id" class="fudis-form-input fudis-text-input__input" type="text" aria-describedby="fudis-text-input-id_guidance" aria-invalid="true"></input>
  <div class="fudis-guidance">
    <div id="fudis-text-input-id_guidance">
      <!-- When not invalid: remove fudis-guidance__errors block or a single fudis-error-message block -->
      <div class="fudis-guidance__errors">
        <span class="fudis-icon fudis-icon__color__red fudis-icon__lg fudis-icon__alert"></span>
        <div class="fudis-guidance__errors__list">
          <p class="fudis-error-message fudis-error-message__form-error">Validator error message</p>
        </div>
      </div>
      <!-- When there is a need for guidance, add the fudis-guidance__help-text block from below -->
      <!-- <p class="fudis-guidance__help-text">Guidance text</p> -->
    </div>
  </div>
</div>
`;

export const CharacterLimit = () => `
<!-- Change text input size by changing the fudis-input-size__ class. xs, sm, md, and lg available. -->
<div class="fudis-text-input fudis-input-size__md">
  <label class="fudis-label" for="fudis-text-input-id">
    <span class="fudis-label__content">
      <span class="fudis-label__content__text">Text input label</span>
    </span>
  </label>
  <input id="fudis-text-input-id" class="fudis-form-input fudis-text-input__input" type="text" aria-describedby="fudis-text-input-id_guidance"></input>
  <div id="fudis-guidance-id" class="fudis-guidance">
    <div id="fudis-text-input-id_guidance">
      <!-- When invalid: add fudis-guidance__errors block or a single fudis-error-message block from below -->
      <!-- <div class="fudis-guidance__errors">
              <span class="fudis-icon fudis-icon__color__red fudis-icon__lg fudis-icon__alert"></span>
              <div class="fudis-guidance__errors__list">
                  <p class="fudis-error-message fudis-error-message__form-error">
                      Validator error message
                  </p>
              </div>
           </div>
      -->
      <!-- When no need for guidance, remove the fudis-guidance__help-text block -->
      <p class="fudis-guidance__help-text">Guidance text</p>
    </div>
    <!-- When no need for character limit indicator, remove the small element from below -->
    <small class="fudis-guidance__character-limit-indicator fudis-guidance__character-limit-indicator__md">
      0/20
      <span class="fudis-visually-hidden">characters used</span>
    </small>
  </div>
</div>
`;

export const Required = () => `
<!-- Change text input size by changing the fudis-input-size__ class. xs, sm, md, and lg available. -->
<div class="fudis-text-input fudis-input-size__md">
  <label class="fudis-label" for="fudis-text-input-id">
    <span class="fudis-label__content">
      <span class="fudis-label__content__text">Text input label</span>
      <span class="fudis-label__content__required">(Required)</span>
    </span>
  </label>
  <input id="fudis-text-input-id" class="fudis-form-input fudis-text-input__input" type="text" aria-describedby="fudis-text-input-id_guidance"></input>
  <div id="fudis-guidance-id" class="fudis-guidance">
    <div id="fudis-text-input-id_guidance">
      <!-- When invalid: add fudis-guidance__errors block or a single fudis-error-message block from below -->
      <!-- <div class="fudis-guidance__errors">
              <span class="fudis-icon fudis-icon__color__red fudis-icon__lg fudis-icon__alert"></span>
              <div class="fudis-guidance__errors__list">
                  <p class="fudis-error-message fudis-error-message__form-error">
                      Validator error message
                  </p>
              </div>
           </div>
      -->
      <!-- When no need for guidance, remove the fudis-guidance__help-text block -->
      <p class="fudis-guidance__help-text">Guidance text</p>
    </div>
  </div>
</div>
`;

export const NumberInput = () => `
<!-- Change text input size by changing the fudis-input-size__ class. xs, sm, md, and lg available. -->
<div class="fudis-text-input fudis-input-size__sm">
  <label class="fudis-label" for="fudis-text-input-id">
    <span class="fudis-label__content">
      <span class="fudis-label__content__text">Number input label</span>
    </span>
  </label>
  <input id="fudis-text-input-id" class="fudis-form-input fudis-text-input__input" type="number" aria-describedby="fudis-text-input-id_guidance"></input>
  <div id="fudis-guidance-id" class="fudis-guidance">
    <div id="fudis-text-input-id_guidance">
        <!-- When invalid: add fudis-guidance__errors block or a single fudis-error-message block from below -->
        <!-- <div class="fudis-guidance__errors">
                <span class="fudis-icon fudis-icon__color__red fudis-icon__lg fudis-icon__alert"></span>
                <div class="fudis-guidance__errors__list">
                    <p class="fudis-error-message fudis-error-message__form-error">
                        Validator error message
                    </p>
                </div>
             </div>
        -->
        <!-- When no need for guidance, remove the fudis-guidance__help-text block -->
      <p class="fudis-guidance__help-text">Guidance text</p>
    </div>
  </div>
</div>
`;
