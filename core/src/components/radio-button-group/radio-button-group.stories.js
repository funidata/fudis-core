export default {
    title: "Components/Radio Button Group (WIP)",
};

// TODO: Should probably figure out interactive-friendly way so that one can choose/toggle between radio-buttons?

export const Default = () => `
  <fieldset class="fudis-radio-button-group fudis-fieldset fudis-input-size__lg">
    <legend class="fudis-fieldset__legend">
      <div class="fudis-fieldset__legend__main fudis-fieldset__legend__sm">
        <div class="fudis-fieldset__legend__main__text-content">
          <span class="fudis-fieldset__legend__main__text">
            Legend
          </span>
        </div>
      </div>
    </legend>
    <div class="fudis-fieldset-content">
      <label class="fudis-radio-button">
        <input type="radio" class="fudis-radio-button__input"></input>
        <div class="fudis-radio-button__content">
          <div class="fudis-radio-button__content-wrapper">
            <div class="fudis-radio-button__content__control"></div>
          </div>
          <span class="fudis-radio-button__label">Option 1</span>
        </div>
      </label>
      <label class="fudis-radio-button">
        <input type="radio" class="fudis-radio-button__input"></input>
        <div class="fudis-radio-button__content">
          <div class="fudis-radio-button__content-wrapper">
            <div class="fudis-radio-button__content__control"></div>
          </div>
          <span class="fudis-radio-button__label">Option 2</span>
        </div>
      </label>
      <label class="fudis-radio-button">
        <input type="radio" class="fudis-radio-button__input"></input>
        <div class="fudis-radio-button__content">
          <div class="fudis-radio-button__content-wrapper">
            <div class="fudis-radio-button__content__control"></div>
          </div>
          <span class="fudis-radio-button__label">Option 3</span>
        </div>
      </label>
    </div>
  </fieldset>
`;

export const Required = () => `
  <fieldset class="fudis-radio-button-group fudis-fieldset fudis-input-size__lg">
    <legend class="fudis-fieldset__legend">
      <div class="fudis-fieldset__legend__main fudis-fieldset__legend__sm">
        <div class="fudis-fieldset__legend__main__text-content">
          <span class="fudis-fieldset__legend__main__text">
            Legend
          </span>
          <span class="fudis-fieldset__legend__main__space"></span>
          <span class="fudis-fieldset__legend__main__required">(Required)</span>
        </div>
      </div>
    </legend>
    <div class="fudis-fieldset-content">
      <label class="fudis-radio-button">
        <input type="radio" class="fudis-radio-button__input"></input>
        <div class="fudis-radio-button__content">
          <div class="fudis-radio-button__content-wrapper">
            <div class="fudis-radio-button__content__control"></div>
          </div>
          <span class="fudis-radio-button__label">Option 1</span>
        </div>
      </label>
      <label class="fudis-radio-button">
        <input type="radio" class="fudis-radio-button__input"></input>
        <div class="fudis-radio-button__content">
          <div class="fudis-radio-button__content-wrapper">
            <div class="fudis-radio-button__content__control"></div>
          </div>
          <span class="fudis-radio-button__label">Option 2</span>
        </div>
      </label>
      <label class="fudis-radio-button">
        <input type="radio" class="fudis-radio-button__input"></input>
        <div class="fudis-radio-button__content">
          <div class="fudis-radio-button__content-wrapper">
            <div class="fudis-radio-button__content__control"></div>
          </div>
          <span class="fudis-radio-button__label">Option 3</span>
        </div>
      </label>
    </div>
  </fieldset>
`;

export const Guidance = () => `
  <fieldset class="fudis-radio-button-group fudis-fieldset fudis-input-size__lg">
    <legend class="fudis-fieldset__legend">
      <div class="fudis-fieldset__legend__main fudis-fieldset__legend__sm">
        <div class="fudis-fieldset__legend__main__text-content">
          <span class="fudis-fieldset__legend__main__text">
            Legend
          </span>
        </div>
      </div>
    </legend>
    <div class="fudis-fieldset-content">
      <label class="fudis-radio-button">
        <input type="radio" class="fudis-radio-button__input"></input>
        <div class="fudis-radio-button__content">
          <div class="fudis-radio-button__content-wrapper">
            <div class="fudis-radio-button__content__control"></div>
          </div>
          <span class="fudis-radio-button__label">Option 1</span>
        </div>
      </label>
      <label class="fudis-radio-button">
        <input type="radio" class="fudis-radio-button__input"></input>
        <div class="fudis-radio-button__content">
          <div class="fudis-radio-button__content-wrapper">
            <div class="fudis-radio-button__content__control"></div>
          </div>
          <span class="fudis-radio-button__label">Option 2</span>
        </div>
      </label>
      <label class="fudis-radio-button">
        <input type="radio" class="fudis-radio-button__input"></input>
        <div class="fudis-radio-button__content">
          <div class="fudis-radio-button__content-wrapper">
            <div class="fudis-radio-button__content__control"></div>
          </div>
          <span class="fudis-radio-button__label">Option 3</span>
        </div>
      </label>
      <div id="fudis-guidance-id" class="fudis-guidance">
        <div id="fudis-fieldset-id_guidance">
          <div id="fudis-guidance-id-errors" class="fudis-guidance__errors">
            <div class="fudis-guidance__errors__list"></div>
          </div>
          <p class="fudis-guidance__help-text">Guidance text</p>
        </div>
      </div>
    </div>
  </fieldset>
`;

export const Invalid = () => `
  <fieldset class="fudis-radio-button-group fudis-fieldset fudis-input-size__lg">
    <legend class="fudis-fieldset__legend">
      <div class="fudis-fieldset__legend__main fudis-fieldset__legend__sm">
        <div class="fudis-fieldset__legend__main__text-content">
          <span class="fudis-fieldset__legend__main__text">
            Legend
          </span>
        </div>
      </div>
    </legend>
    <div class="fudis-fieldset-content">
      <label class="fudis-radio-button">
        <input type="radio" class="fudis-radio-button__input" aria-invalid="true"></input>
        <div class="fudis-radio-button__content">
          <div class="fudis-radio-button__content-wrapper">
            <div class="fudis-radio-button__content__control fudis-radio-button__content__control--invalid"></div>
          </div>
          <span class="fudis-radio-button__label">Option 1</span>
        </div>
      </label>
      <label class="fudis-radio-button">
        <input type="radio" class="fudis-radio-button__input" aria-invalid="true"></input>
        <div class="fudis-radio-button__content">
          <div class="fudis-radio-button__content-wrapper">
            <div class="fudis-radio-button__content__control fudis-radio-button__content__control--invalid"></div>
          </div>
          <span class="fudis-radio-button__label">Option 2</span>
        </div>
      </label>
      <label class="fudis-radio-button">
        <input type="radio" class="fudis-radio-button__input" aria-invalid="true"></input>
        <div class="fudis-radio-button__content">
          <div class="fudis-radio-button__content-wrapper">
            <div class="fudis-radio-button__content__control fudis-radio-button__content__control--invalid"></div>
          </div>
          <span class="fudis-radio-button__label">Option 3</span>
        </div>
      </label>
      <div id="fudis-guidance-id" class="fudis-guidance">
        <div id="fudis-fieldset-id_guidance">
          <div id="fudis-guidance-id-errors">
            <div class="fudis-guidance__errors__list">
              <p class="fudis-error-message fudis-error-message__form-error">
                Validator error message
              </p>
            </div>
          </div>
          <p class="fudis-guidance__help-text">Guidance text</p>
        </div>
      </div>
    </div>
  </fieldset>
`;