export default {
  title: "Components/Checkbox Group",
};

export const Default = () => `
  <fieldset class="fudis-checkbox-group fudis-fieldset fudis-input-size__lg">
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
      <label class="fudis-checkbox">
        <input type="checkbox" class="fudis-checkbox__input" name="fudis-checkbox-1" value="foo" />
        <div class="fudis-checkbox__content">
          <div class="fudis-checkbox__content-wrapper">
            <span class="fudis-checkbox__content__box">
                <!-- When not checked, hide the icon below -->
                <span class="fudis-icon fudis-icon__color__gray-dark fudis-icon__lg fudis-icon__check"></span>
            </span>
          </div>
          <span class="fudis-checkbox__content__label">Option 1</span>
        </div>
      </label>
      <label class="fudis-checkbox">
        <input type="checkbox" class="fudis-checkbox__input" name="fudis-checkbox-2" value="bar" />
        <div class="fudis-checkbox__content">
          <div class="fudis-checkbox__content-wrapper">
            <span class="fudis-checkbox__content__box">
                <!-- When checked, render the icon below -->
                <!-- <span class="fudis-icon fudis-icon__color__gray-dark fudis-icon__lg fudis-icon__check"></span> -->
            </span>
          </div>
          <span class="fudis-checkbox__content__label">Option 2</span>
        </div>
      </label>
      <label class="fudis-checkbox">
        <input type="checkbox" class="fudis-checkbox__input" name="fudis-checkbox-3" value="baz" />
        <div class="fudis-checkbox__content">
          <div class="fudis-checkbox__content-wrapper">
            <span class="fudis-checkbox__content__box">
                <!-- When checked, render the icon below -->
                <!-- <span class="fudis-icon fudis-icon__color__gray-dark fudis-icon__lg fudis-icon__check"></span> -->
            </span>
          </div>
          <span class="fudis-checkbox__content__label">Option 3</span>
        </div>
      </label>
      <div id="fudis-guidance-id" class="fudis-guidance">
        <div>
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
          <!-- When there is a need for guidance, add the fudis-guidance__help-text block from below -->
          <!-- <p class="fudis-guidance__help-text">Guidance text</p> -->
        </div>
      </div>
    </div>
  </fieldset>
`;

export const Required = () => `
  <fieldset class="fudis-checkbox-group fudis-fieldset fudis-input-size__lg">
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
      <label class="fudis-checkbox">
        <input type="checkbox" class="fudis-checkbox__input" name="fudis-checkbox-1" value="foo" />
        <div class="fudis-checkbox__content">
          <div class="fudis-checkbox__content-wrapper">
            <span class="fudis-checkbox__content__box">
                <!-- When not checked, hide the icon below -->
                <span class="fudis-icon fudis-icon__color__gray-dark fudis-icon__lg fudis-icon__check"></span>
            </span>
          </div>
          <span class="fudis-checkbox__content__label">Option 1</span>
        </div>
      </label>
      <label class="fudis-checkbox">
        <input type="checkbox" class="fudis-checkbox__input" name="fudis-checkbox-2" value="bar" />
        <div class="fudis-checkbox__content">
          <div class="fudis-checkbox__content-wrapper">
            <span class="fudis-checkbox__content__box">
                <!-- When checked, render the icon below -->
                <!-- <span class="fudis-icon fudis-icon__color__gray-dark fudis-icon__lg fudis-icon__check"></span> -->
            </span>
          </div>
          <span class="fudis-checkbox__content__label">Option 2</span>
        </div>
      </label>
      <label class="fudis-checkbox">
        <input type="checkbox" class="fudis-checkbox__input" name="fudis-checkbox-3" value="baz" />
        <div class="fudis-checkbox__content">
          <div class="fudis-checkbox__content-wrapper">
            <span class="fudis-checkbox__content__box">
                <!-- When checked, render the icon below -->
                <!-- <span class="fudis-icon fudis-icon__color__gray-dark fudis-icon__lg fudis-icon__check"></span> -->
            </span>
          </div>
          <span class="fudis-checkbox__content__label">Option 3</span>
        </div>
      </label>
      <div id="fudis-guidance-id" class="fudis-guidance">
        <div>
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
          <!-- When there is a need for guidance, add the fudis-guidance__help-text block from below -->
          <!-- <p class="fudis-guidance__help-text">Guidance text</p> -->
        </div>
      </div>
    </div>
  </fieldset>
`;

export const Guidance = () => `
  <fieldset class="fudis-checkbox-group fudis-fieldset fudis-input-size__lg">
    <legend class="fudis-fieldset__legend">
      <div class="fudis-fieldset__legend__main fudis-fieldset__legend__sm">
        <div class="fudis-fieldset__legend__main__text-content">
          <span class="fudis-fieldset__legend__main__text">
            Legend
          </span>
        </div>
      </div>
    </legend>
    <div id="fudis-fieldset-id" class="fudis-fieldset-content">
      <label class="fudis-checkbox">
        <input type="checkbox" class="fudis-checkbox__input" name="fudis-checkbox-1" value="foo" aria-describedby="fudis-guidance-id" />
        <div class="fudis-checkbox__content">
          <div class="fudis-checkbox__content-wrapper">
            <span class="fudis-checkbox__content__box">
                <!-- When not checked, hide the icon below -->
                <span class="fudis-icon fudis-icon__color__gray-dark fudis-icon__lg fudis-icon__check"></span>
            </span>
          </div>
          <span class="fudis-checkbox__content__label">Option 1</span>
        </div>
      </label>
      <label class="fudis-checkbox">
        <input type="checkbox" class="fudis-checkbox__input" name="fudis-checkbox-2" value="bar" />
        <div class="fudis-checkbox__content">
          <div class="fudis-checkbox__content-wrapper">
            <span class="fudis-checkbox__content__box">
                <!-- When checked, render the icon below -->
                <!-- <span class="fudis-icon fudis-icon__color__gray-dark fudis-icon__lg fudis-icon__check"></span> -->
            </span>
          </div>
          <span class="fudis-checkbox__content__label">Option 2</span>
        </div>
      </label>
      <label class="fudis-checkbox">
        <input type="checkbox" class="fudis-checkbox__input" name="fudis-checkbox-3" value="baz" />
        <div class="fudis-checkbox__content">
          <div class="fudis-checkbox__content-wrapper">
            <span class="fudis-checkbox__content__box">
                <!-- When checked, render the icon below -->
                <!-- <span class="fudis-icon fudis-icon__color__gray-dark fudis-icon__lg fudis-icon__check"></span> -->
            </span>
          </div>
          <span class="fudis-checkbox__content__label">Option 3</span>
        </div>
      </label>
      <div id="fudis-guidance-id" class="fudis-guidance">
        <div id="fudis-fieldset-id_guidance">
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
  </fieldset>
`;

export const Invalid = () => `
  <fieldset class="fudis-checkbox-group fudis-fieldset fudis-input-size__lg">
    <legend class="fudis-fieldset__legend">
      <div class="fudis-fieldset__legend__main fudis-fieldset__legend__sm">
        <div class="fudis-fieldset__legend__main__text-content">
          <span class="fudis-fieldset__legend__main__text">
            Legend
          </span>
        </div>
      </div>
    </legend>
    <div id="fudis-fieldset-id" class="fudis-fieldset-content">
      <label class="fudis-checkbox">
        <input type="checkbox" class="fudis-checkbox__input" aria-invalid="true" name="fudis-checkbox-1" value="foo" aria-describedby="fudis-guidance-id" />
        <div class="fudis-checkbox__content">
          <div class="fudis-checkbox__content-wrapper">
            <span class="fudis-checkbox__content__box fudis-checkbox__content__box--invalid">
                <!-- When checked, render the icon below -->
                <!-- <span class="fudis-icon fudis-icon__color__gray-dark fudis-icon__lg fudis-icon__check"></span> -->
            </span>
          </div>
          <span class="fudis-checkbox__content__label">Option 1</span>
        </div>
      </label>
      <label class="fudis-checkbox">
        <input type="checkbox" class="fudis-checkbox__input" aria-invalid="true" name="fudis-checkbox-2" value="bar" />
        <div class="fudis-checkbox__content">
          <div class="fudis-checkbox__content-wrapper">
            <span class="fudis-checkbox__content__box fudis-checkbox__content__box--invalid">
                <!-- When checked, render the icon below -->
                <!-- <span class="fudis-icon fudis-icon__color__gray-dark fudis-icon__lg fudis-icon__check"></span> -->
            </span>
          </div>
          <span class="fudis-checkbox__content__label">Option 2</span>
        </div>
      </label>
      <label class="fudis-checkbox">
        <input type="checkbox" class="fudis-checkbox__input" aria-invalid="true" name="fudis-checkbox-3" value="baz" />
        <div class="fudis-checkbox__content">
          <div class="fudis-checkbox__content-wrapper">
            <span class="fudis-checkbox__content__box fudis-checkbox__content__box--invalid">
                <!-- When checked, render the icon below -->
                <!-- <span class="fudis-icon fudis-icon__color__gray-dark fudis-icon__lg fudis-icon__check"></span> -->
            </span>
          </div>
          <span class="fudis-checkbox__content__label">Option 3</span>
        </div>
      </label>
      <div id="fudis-guidance-id" class="fudis-guidance">
        <div id="fudis-fieldset-id_guidance">
          <!-- When not invalid: remove fudis-guidance__errors block or remove a fudis-error-message block from below -->
          <div class="fudis-guidance__errors">
            <span class="fudis-icon fudis-icon__color__red fudis-icon__lg fudis-icon__alert"></span>
            <div class="fudis-guidance__errors__list">
              <p class="fudis-error-message fudis-error-message__form-error">
                Validator error message
              </p>
            </div>
          </div>
          <!-- When there is no need for guidance, remove the fudis-guidance__help-text block from below -->
          <p class="fudis-guidance__help-text">Guidance text</p>
        </div>
      </div>
    </div>
  </fieldset>
`;
