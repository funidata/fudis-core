export default {
  title: "Components/Radio Button",
};

export const Default = () => `
  <label class="fudis-radio-button">
    <input type="radio" class="fudis-radio-button__input" value="foo" />
    <div class="fudis-radio-button__content">
      <div class="fudis-radio-button__content-wrapper">
        <div class="fudis-radio-button__content__control"></div>
      </div>
      <span class="fudis-radio-button__label">Option</span>
    </div>
  </label>
`;

export const Selected = () => `
  <label class="fudis-radio-button">
    <input type="radio" class="fudis-radio-button__input" value="foo" />
    <div class="fudis-radio-button__content">
      <div class="fudis-radio-button__content-wrapper">
        <div class="fudis-radio-button__content__control">
          <span class="fudis-radio-button__content__control__indicator"></span>
        </div>
      </div>
      <span class="fudis-radio-button__label">Option</span>
    </div>
  </label>
`;

export const Disabled = () => `
  <label class="fudis-radio-button fudis-radio-button--disabled">
    <input type="radio" class="fudis-radio-button__input fudis-radio-button__input--disabled" aria-disabled="true" disabled value="foo" />
    <div class="fudis-radio-button__content">
      <div class="fudis-radio-button__content-wrapper">
        <div class="fudis-radio-button__content__control fudis-radio-button__content__control--disabled"></div>
      </div>
      <span class="fudis-radio-button__label">Option</span>
    </div>
  </label>
`;

export const Invalid = () => `
  <label class="fudis-radio-button">
    <input type="radio" class="fudis-radio-button__input" aria-invalid="true" value="foo" />
    <div class="fudis-radio-button__content">
      <div class="fudis-radio-button__content-wrapper">
        <div class="fudis-radio-button__content__control fudis-radio-button__content__control--invalid"></div>
      </div>
      <span class="fudis-radio-button__label">Option</span>
    </div>
  </label>
`;
