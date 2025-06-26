/** Label */
export const createLabel = (label, forId, required) => {
  const labelElement = document.createElement("label");
  labelElement.className = "fudis-label";
  labelElement.htmlFor = forId;

  if (required) {
    labelElement.innerHTML = `
    <div class="fudis-label__content">
        <span class="fudis-label__content__text">${label}<span class="fudis-label__content__space"></span><span class="fudis-label__content__required">(Required)</span></span>
    </div>`;
  } else {
    labelElement.innerHTML = `
    <div class="fudis-label__content">
      <span class="fudis-label__content__text">${label}</span>
    </div>`;
  }

  return labelElement;
};

/** Legend */
export const createLegend = (label, required) => {
  const legendElement = document.createElement("legend");
  legendElement.className = "fudis-fieldset__legend";

  const legendInnerElement = document.createElement("div");
  legendInnerElement.className = `fudis-fieldset__legend__main fudis-fieldset__legend__sm`;

  if (required) {
    legendInnerElement.innerHTML = `
    <div class="fudis-fieldset__legend__main__text-content">
      <span class="fudis-fieldset__legend__main__text">${label}<span class="fudis-fieldset__legend__main__space"></span><span class="fudis-fieldset__legend__main__required">(Required)</span></span>
    </div>`;
  } else {
    legendInnerElement.innerHTML = `
    <div class="fudis-fieldset__legend__main__text-content">
      <span class="fudis-fieldset__legend__main__text">${label}</span>
    </div>`;
  }
  legendElement.appendChild(legendInnerElement);
  return legendElement;
};

/** Guidance */
export const createGuidance = (
  size,
  errorMessage,
  guidanceText,
  isCharacterLimit,
) => {
  const guidanceElement = document.createElement("div");
  guidanceElement.className = "fudis-guidance";

  const guidanceInnerElement = document.createElement("div");
  guidanceInnerElement.id = "fudis-guidance-id";

  const guidanceInnerErrorsElement = document.createElement("div");
  guidanceInnerErrorsElement.className = "fudis-guidance__errors";

  if (guidanceText || errorMessage || isCharacterLimit) {
    if (errorMessage) {
      guidanceInnerErrorsElement.innerHTML = `
        <span class="fudis-icon fudis-icon__color__red fudis-icon__lg fudis-icon__alert"></span>
        <div class="fudis-guidance__errors__list">
          <p class="fudis-error-message fudis-error-message__form-error">${errorMessage}</p>
        </div>`;
      guidanceInnerElement.appendChild(guidanceInnerErrorsElement);
    }

    if (guidanceText) {
      const guidanceTextElement = document.createElement("p");
      guidanceTextElement.className = "fudis-guidance__help-text";
      guidanceTextElement.textContent = guidanceText;
      if (!errorMessage) {
        const errorsListElement = document.createElement("div");
        errorsListElement.className = "fudis-guidance__errors__list";
        guidanceInnerElement.appendChild(errorsListElement);
      }
      guidanceInnerElement.appendChild(guidanceTextElement);
    }

    let numberLimitElement;

    if (isCharacterLimit) {
      if (!guidanceText && !errorMessage) {
        const errorsListElement = document.createElement("div");
        errorsListElement.className = "fudis-guidance__errors__list";
        guidanceInnerElement.appendChild(errorsListElement);
      }
      numberLimitElement = document.createElement("small");
      numberLimitElement.className = `fudis-guidance__character-limit-indicator fudis-guidance__character-limit-indicator__${size}`;
      numberLimitElement.innerHTML = `0/20<span class="fudis-visually-hidden">characters used</span>`;
    }

    guidanceElement.appendChild(guidanceInnerElement);
    if (numberLimitElement) guidanceElement.appendChild(numberLimitElement);

    return guidanceElement;
  }
  return null;
};

/** Radio Button */
export const createRadioButton = (
  label,
  selected,
  invalid,
  disabled,
  hasAriaDescribedBy,
) => {
  const radioButtonContainer = document.createElement("label");
  radioButtonContainer.className = "fudis-radio-button";

  const inputElement = document.createElement("input");
  inputElement.className = "fudis-radio-button__input";
  inputElement.type = "radio";
  inputElement.value = "foo";
  inputElement.ariaInvalid = invalid;
  inputElement.ariaDisabled = disabled;
  inputElement.name = "fudis-radio-button";
  if (hasAriaDescribedBy)
    inputElement.setAttribute("aria-describedby", "fudis-guidance-id");

  const labelElement = document.createElement("span");
  labelElement.className = "fudis-radio-button__label";
  labelElement.textContent = label;

  const contentElement = document.createElement("div");
  contentElement.className = "fudis-radio-button__content";

  const contentWrapperElement = document.createElement("div");
  contentWrapperElement.className = "fudis-radio-button__content-wrapper";

  const contentWrapperControlElement = document.createElement("div");
  let contentWrapperControlClass = "fudis-radio-button__content__control";
  if (invalid)
    contentWrapperControlClass = contentWrapperControlClass.concat(
      " ",
      "fudis-radio-button__content__control--invalid",
    );
  if (disabled)
    contentWrapperControlClass = contentWrapperControlClass.concat(
      " ",
      "fudis-radio-button__content__control--disabled",
    );
  contentWrapperControlElement.className = contentWrapperControlClass;

  if (selected)
    contentWrapperControlElement.innerHTML = `<span class="fudis-radio-button__content__control__indicator"></span>`;

  contentWrapperElement.appendChild(contentWrapperControlElement);

  contentElement.appendChild(contentWrapperElement);
  contentElement.appendChild(labelElement);

  radioButtonContainer.appendChild(inputElement);
  radioButtonContainer.appendChild(contentElement);

  return radioButtonContainer;
};

/** Checkbox */
export const createCheckbox = (
  label,
  selected,
  invalid,
  disabled,
  focused,
  hasAriaDescribedBy,
) => {
  const checkboxContainer = document.createElement("label");
  checkboxContainer.className = "fudis-checkbox";

  const inputElement = document.createElement("input");
  inputElement.className = "fudis-checkbox__input";
  inputElement.type = "checkbox";
  inputElement.value = "foo";
  inputElement.ariaInvalid = invalid;
  inputElement.ariaDisabled = disabled;
  if (hasAriaDescribedBy)
    inputElement.setAttribute("aria-describedby", "fudis-guidance-id");

  const checkboxContentElement = document.createElement("div");
  checkboxContentElement.className = "fudis-checkbox__content";

  const checkboxContentWrapperElement = document.createElement("div");
  checkboxContentWrapperElement.className = "fudis-checkbox__content-wrapper";

  const checkboxContentWrapperBoxElement = document.createElement("span");
  let checkboxContentWrapperBoxElementClass = "fudis-checkbox__content__box";
  if (focused)
    checkboxContentWrapperBoxElementClass =
      checkboxContentWrapperBoxElementClass.concat(
        " ",
        "fudis-checkbox__content__box--focused",
      );
  if (invalid)
    checkboxContentWrapperBoxElementClass =
      checkboxContentWrapperBoxElementClass.concat(
        " ",
        "fudis-checkbox__content__box--invalid",
      );
  if (disabled)
    checkboxContentWrapperBoxElementClass =
      checkboxContentWrapperBoxElementClass.concat(
        " ",
        "fudis-checkbox__content__box--disabled",
      );
  checkboxContentWrapperBoxElement.className =
    checkboxContentWrapperBoxElementClass;
  if (selected)
    checkboxContentWrapperBoxElement.innerHTML = `<span class="fudis-icon fudis-icon__color__gray-dark fudis-icon__lg fudis-icon__check"></span>`;

  const checkBoxContentLabelElement = document.createElement("span");
  checkBoxContentLabelElement.className = "fudis-checkbox__content__label";
  checkBoxContentLabelElement.textContent = label;

  checkboxContentWrapperElement.appendChild(checkboxContentWrapperBoxElement);
  checkboxContentElement.appendChild(checkboxContentWrapperElement);
  checkboxContentElement.appendChild(checkBoxContentLabelElement);
  checkboxContainer.appendChild(inputElement);
  checkboxContainer.appendChild(checkboxContentElement);

  return checkboxContainer;
};
