export default {
  title: "Components/Text Area",
};

export const Small = () => `
<div class="fudis-text-area fudis-input-size__sm">
  <label class="fudis-label" for="fudis-text-area-id">
    <span class="fudis-label__content">
      <span class="fudis-label__content__text">Text area label</span>
    </span>
  </label>
  <textarea id="fudis-text-area-id" class="fudis-form-input fudis-text-area__input" aria-describedby="fudis-text-area-id_guidance"></textarea>
  <div id="fudis-guidance-id" class="fudis-guidance">
    <div id="fudis-text-area-id_guidance">
      <!-- When invalid: add fudis-guidance__errors block or add a fudis-error-message block from below -->
      <!-- <div class="fudis-guidance__errors">
              <span class="fudis-icon fudis-icon__color__red fudis-icon__lg fudis-icon__alert"></span>
              <div class="fudis-guidance__errors__list">
                  <p class="fudis-error-message fudis-error-message__form-error">
                      Validator error message
                  </p>
              </div>
           </div>
      -->
      <!-- When there is no need for guidance, remove the fudis-guidance__help-text block from below -->
      <p class="fudis-guidance__help-text">Guidance text</p>
    </div>
  </div>
</div>
`;

export const Medium = () => `
<div class="fudis-text-area fudis-input-size__md">
  <label class="fudis-label" for="fudis-text-area-id">
    <span class="fudis-label__content">
      <span class="fudis-label__content__text">Text area label</span>
    </span>
  </label>
  <textarea id="fudis-text-area-id" class="fudis-form-input fudis-text-area__input" aria-describedby="fudis-text-area-id_guidance"></textarea>
  <div id="fudis-guidance-id" class="fudis-guidance">
    <div id="fudis-text-area-id_guidance">
      <!-- When invalid: add fudis-guidance__errors block or add a fudis-error-message block from below -->
      <!-- <div class="fudis-guidance__errors">
              <span class="fudis-icon fudis-icon__color__red fudis-icon__lg fudis-icon__alert"></span>
              <div class="fudis-guidance__errors__list">
                  <p class="fudis-error-message fudis-error-message__form-error">
                      Validator error message
                  </p>
              </div>
           </div>
      -->
      <!-- When there is no need for guidance, remove the fudis-guidance__help-text block from below -->
      <p class="fudis-guidance__help-text">Guidance text</p>
    </div>
  </div>
</div>
`;

export const Large = () => `
<div class="fudis-text-area fudis-input-size__lg">
  <label class="fudis-label" for="fudis-text-area-id">
    <span class="fudis-label__content">
      <span class="fudis-label__content__text">Text area label</span>
    </span>
  </label>
  <textarea id="fudis-text-area-id" class="fudis-form-input fudis-text-area__input" aria-describedby="fudis-text-area-id_guidance"></textarea>
  <div id="fudis-guidance-id" class="fudis-guidance">
    <div id="fudis-text-area-id_guidance">
      <!-- When invalid: add fudis-guidance__errors block or add a fudis-error-message block from below -->
      <!-- <div class="fudis-guidance__errors">
              <span class="fudis-icon fudis-icon__color__red fudis-icon__lg fudis-icon__alert"></span>
              <div class="fudis-guidance__errors__list">
                  <p class="fudis-error-message fudis-error-message__form-error">
                      Validator error message
                  </p>
              </div>
           </div>
      -->
      <!-- When there is no need for guidance, remove the fudis-guidance__help-text block from below -->
      <p class="fudis-guidance__help-text">Guidance text</p>
    </div>
  </div>
</div>
`;

export const Disabled = () => `
<div class="fudis-text-area fudis-input-size__lg">
  <label class="fudis-label" for="fudis-text-area-id">
    <span class="fudis-label__content">
      <span class="fudis-label__content__text">Text area label</span>
    </span>
  </label>
  <!-- Disable the text area by adding aria-label="disabled" and disabled attributes -->
  <textarea id="fudis-text-area-id" class="fudis-form-input fudis-text-area__input" aria-describedby="fudis-text-area-id_guidance" aria-disabled="true" disabled></textarea>
  <div id="fudis-guidance-id" class="fudis-guidance">
    <div id="fudis-text-area-id_guidance">
      <!-- When there is no need for guidance, remove the fudis-guidance__help-text block from below -->
      <p class="fudis-guidance__help-text">Guidance text</p>
    </div>
  </div>
</div>
`;

export const Invalid = () => `
<div class="fudis-text-area fudis-input-size__lg">
  <label class="fudis-label" for="fudis-text-area-id">
    <span class="fudis-label__content">
      <span class="fudis-label__content__text">Text area label</span>
    </span>
  </label>
  <textarea id="fudis-text-area-id" class="fudis-form-input fudis-text-area__input" aria-describedby="fudis-text-area-id_guidance" aria-invalid="true"></textarea>
  <div id="fudis-guidance-id" class="fudis-guidance">
    <div id="fudis-text-area-id_guidance">
      <!-- When not invalid: remove fudis-guidance__errors block or remove a fudis-error-message block from below -->
      <div class="fudis-guidance__errors">
      <span class="fudis-icon fudis-icon__color__red fudis-icon__lg fudis-icon__alert"></span>
        <div class="fudis-guidance__errors__list">
          <p class="fudis-error-message fudis-error-message__form-error">Validator error message</p>
        </div>
      </div>
      <!-- When there is no need for guidance, remove the fudis-guidance__help-text block from below -->
      <p class="fudis-guidance__help-text">Guidance text</p>
    </div>
  </div>
</div>
`;

export const CharacterLimit = () => `
<div class="fudis-text-area fudis-input-size__lg">
  <label class="fudis-label" for="fudis-text-area-id">
    <span class="fudis-label__content">
      <span class="fudis-label__content__text">Text area label</span>
    </span>
  </label>
  <textarea id="fudis-text-area-id" class="fudis-form-input fudis-text-area__input" aria-describedby="fudis-text-area-id_guidance"></textarea>
  <div id="fudis-guidance-id" class="fudis-guidance">
    <div id="fudis-text-area-id_guidance">
      <!-- When invalid: add fudis-guidance__errors block or add a fudis-error-message block from below -->
      <!-- <div class="fudis-guidance__errors">
              <span class="fudis-icon fudis-icon__color__red fudis-icon__lg fudis-icon__alert"></span>
              <div class="fudis-guidance__errors__list">
                  <p class="fudis-error-message fudis-error-message__form-error">
                      Validator error message
                  </p>
              </div>
           </div>
      -->
      <!-- When there is no need for guidance, remove the fudis-guidance__help-text block from below -->
      <p class="fudis-guidance__help-text">Guidance text</p>
    </div>
    <small class="fudis-guidance__character-limit-indicator fudis-guidance__character-limit-indicator__lg">
      0/100
      <span class="fudis-visually-hidden">characters used</span>
    </small>
  </div>
</div>
`;

export const Required = () => `
<div class="fudis-text-area fudis-input-size__lg">
  <label class="fudis-label" for="fudis-text-area-id">
    <span class="fudis-label__content">
      <span class="fudis-label__content__text">Text area label</span>
      <span class="fudis-label__content__required">(Required)</span>
    </span>
  </label>
  <textarea id="fudis-text-area-id" class="fudis-form-input fudis-text-area__input" aria-describedby="fudis-text-area-id_guidance"></textarea>
  <div id="fudis-guidance-id" class="fudis-guidance">
    <div id="fudis-text-area-id_guidance">
      <!-- When invalid: add fudis-guidance__errors block or add a fudis-error-message block from below -->
      <!-- <div class="fudis-guidance__errors">
              <span class="fudis-icon fudis-icon__color__red fudis-icon__lg fudis-icon__alert"></span>
              <div class="fudis-guidance__errors__list">
                  <p class="fudis-error-message fudis-error-message__form-error">
                      Validator error message
                  </p>
              </div>
           </div>
      -->
      <!-- When there is no need for guidance, remove the fudis-guidance__help-text block from below -->
      <p class="fudis-guidance__help-text">Guidance text</p>
    </div>
  </div>
</div>
`;
