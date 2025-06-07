export default {
  title: "Components/Radio Button Group",
};

export const Default = () => `
  <fieldset class="fudis-radio-button-group fudis-fieldset fudis-input-size__lg" id="fudis-fieldset-id">
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
        <input type="radio" class="fudis-radio-button__input" name="fudis-fieldset-id" value="foo" />
        <div class="fudis-radio-button__content">
          <div class="fudis-radio-button__content-wrapper">
            <div class="fudis-radio-button__content__control">
                <!-- When not selected, hide the indicator below -->
              <span class="fudis-radio-button__content__control__indicator"></span>
            </div>
          </div>
          <span class="fudis-radio-button__label">Option 1</span>
        </div>
      </label>
      <label class="fudis-radio-button">
        <input type="radio" class="fudis-radio-button__input" name="fudis-fieldset-id" value="bar" />
        <div class="fudis-radio-button__content">
          <div class="fudis-radio-button__content-wrapper">
            <div class="fudis-radio-button__content__control">
              <!-- When selected, render the indicator below -->
              <!-- <span class="fudis-radio-button__content__control__indicator"></span> -->
            </div>
          </div>
          <span class="fudis-radio-button__label">Option 2</span>
        </div>
      </label>
      <label class="fudis-radio-button">
        <input type="radio" class="fudis-radio-button__input" name="fudis-fieldset-id" value="baz" />
        <div class="fudis-radio-button__content">
          <div class="fudis-radio-button__content-wrapper">
            <div class="fudis-radio-button__content__control">
              <!-- When selected, render the indicator below -->
              <!-- <span class="fudis-radio-button__content__control__indicator"></span> -->
            </div>
          </div>
          <span class="fudis-radio-button__label">Option 3</span>
        </div>
      </label>
    </div>
  </fieldset>
`;

export const Required = () => `
  <fieldset class="fudis-radio-button-group fudis-fieldset fudis-input-size__lg" id="fudis-fieldset-id">
    <legend class="fudis-fieldset__legend">
      <div class="fudis-fieldset__legend__main fudis-fieldset__legend__sm">
        <div class="fudis-fieldset__legend__main__text-content">
          <span class="fudis-fieldset__legend__main__text">
            Legend
          </span>
          <span class="fudis-fieldset__legend__main__required">(Required)</span>
        </div>
      </div>
    </legend>
    <div class="fudis-fieldset-content">
      <label class="fudis-radio-button">
        <input type="radio" class="fudis-radio-button__input" name="fudis-fieldset-id" value="foo" />
        <div class="fudis-radio-button__content">
          <div class="fudis-radio-button__content-wrapper">
            <div class="fudis-radio-button__content__control">
              <!-- When selected, render the indicator below -->
              <!-- <span class="fudis-radio-button__content__control__indicator"></span> -->
            </div>
          </div>
          <span class="fudis-radio-button__label">Option 1</span>
        </div>
      </label>
      <label class="fudis-radio-button">
        <input type="radio" class="fudis-radio-button__input" name="fudis-fieldset-id" value="bar" />
        <div class="fudis-radio-button__content">
          <div class="fudis-radio-button__content-wrapper">
            <div class="fudis-radio-button__content__control">
              <!-- When selected, render the indicator below -->
              <!-- <span class="fudis-radio-button__content__control__indicator"></span> -->
            </div>
          </div>
          <span class="fudis-radio-button__label">Option 2</span>
        </div>
      </label>
      <label class="fudis-radio-button">
        <input type="radio" class="fudis-radio-button__input" name="fudis-fieldset-id" value="baz" />
        <div class="fudis-radio-button__content">
          <div class="fudis-radio-button__content-wrapper">
            <div class="fudis-radio-button__content__control">
              <!-- When selected, render the indicator below -->
              <!-- <span class="fudis-radio-button__content__control__indicator"></span> -->
            </div>
          </div>
          <span class="fudis-radio-button__label">Option 3</span>
        </div>
      </label>
    </div>
  </fieldset>
`;

export const Guidance = () => `
  <fieldset class="fudis-radio-button-group fudis-fieldset fudis-input-size__lg" id="fudis-fieldset-id">
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
        <input type="radio" class="fudis-radio-button__input" aria-describedby="fudis-guidance-id" name="fudis-fieldset-id" value="foo" />
        <div class="fudis-radio-button__content">
          <div class="fudis-radio-button__content-wrapper">
            <div class="fudis-radio-button__content__control">
              <!-- When selected, render the indicator below -->
              <!-- <span class="fudis-radio-button__content__control__indicator"></span> -->
            </div>
          </div>
          <span class="fudis-radio-button__label">Option 1</span>
        </div>
      </label>
      <label class="fudis-radio-button">
        <input type="radio" class="fudis-radio-button__input" name="fudis-fieldset-id" value="bar" />
        <div class="fudis-radio-button__content">
          <div class="fudis-radio-button__content-wrapper">
            <div class="fudis-radio-button__content__control">
              <!-- When selected, render the indicator below -->
              <!-- <span class="fudis-radio-button__content__control__indicator"></span> -->
            </div>
          </div>
          <span class="fudis-radio-button__label">Option 2</span>
        </div>
      </label>
      <label class="fudis-radio-button">
        <input type="radio" class="fudis-radio-button__input" name="fudis-fieldset-id" value="baz" />
        <div class="fudis-radio-button__content">
          <div class="fudis-radio-button__content-wrapper">
            <div class="fudis-radio-button__content__control">
              <!-- When selected, render the indicator below -->
              <!-- <span class="fudis-radio-button__content__control__indicator"></span> -->
            </div>
          </div>
          <span class="fudis-radio-button__label">Option 3</span>
        </div>
      </label>
      <div id="fudis-guidance-id" class="fudis-guidance">
        <div id="fudis-fieldset-id_guidance">
          <p class="fudis-guidance__help-text">Guidance text</p>
        </div>
      </div>
    </div>
  </fieldset>
`;

export const Invalid = () => `
  <fieldset class="fudis-radio-button-group fudis-fieldset fudis-input-size__lg" id="fudis-fieldset-id">
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
        <input type="radio" class="fudis-radio-button__input" aria-invalid="true" aria-describedby="fudis-guidance-id" name="fudis-fieldset-id" value="foo" />
        <div class="fudis-radio-button__content">
          <div class="fudis-radio-button__content-wrapper">
            <div class="fudis-radio-button__content__control fudis-radio-button__content__control--invalid">
              <!-- When selected, render the indicator below -->
              <!-- <span class="fudis-radio-button__content__control__indicator"></span> -->
            </div>
          </div>
          <span class="fudis-radio-button__label">Option 1</span>
        </div>
      </label>
      <label class="fudis-radio-button">
        <input type="radio" class="fudis-radio-button__input" aria-invalid="true" name="fudis-fieldset-id" value="bar" />
        <div class="fudis-radio-button__content">
          <div class="fudis-radio-button__content-wrapper">
            <div class="fudis-radio-button__content__control fudis-radio-button__content__control--invalid">
              <!-- When selected, render the indicator below -->
              <!-- <span class="fudis-radio-button__content__control__indicator"></span> -->
            </div>
          </div>
          <span class="fudis-radio-button__label">Option 2</span>
        </div>
      </label>
      <label class="fudis-radio-button">
        <input type="radio" class="fudis-radio-button__input" aria-invalid="true" name="fudis-fieldset-id" value="baz" />
        <div class="fudis-radio-button__content">
          <div class="fudis-radio-button__content-wrapper">
            <div class="fudis-radio-button__content__control fudis-radio-button__content__control--invalid">
              <!-- When selected, render the indicator below -->
              <!-- <span class="fudis-radio-button__content__control__indicator"></span> -->
            </div>
          </div>
          <span class="fudis-radio-button__label">Option 3</span>
        </div>
      </label>
      <div id="fudis-guidance-id" class="fudis-guidance">
        <div id="fudis-fieldset-id_guidance">
          <div class="fudis-guidance__errors">
            <span class="fudis-icon fudis-icon__color__red fudis-icon__lg fudis-icon__alert"></span>
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
