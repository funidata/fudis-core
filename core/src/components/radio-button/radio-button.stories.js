export default {
  title: "Components/Radio Button",
  decorators: [
    (storyFn) =>
      `<div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: flex-start;">${storyFn()}</div>`,
  ],
};

export const Default = () => `
  <label class="fudis-radio-button">
    <input type="radio" class="fudis-radio-button__input" value="foo" />
    <div class="fudis-radio-button__content">
      <div class="fudis-radio-button__content-wrapper">
        <div class="fudis-radio-button__content__control">
            <!-- When selected: render the indicator below -->
            <!-- <span class="fudis-radio-button__content__control__indicator"></span> -->
        </div>
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
          <!-- When not selected: hide the indicator below -->
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
        <!-- When not disabled: remove fudis-radio-button__content__control--disabled down below -->
        <div class="fudis-radio-button__content__control fudis-radio-button__content__control--disabled">
            <!-- When selected: render the indicator below -->
            <!-- <span class="fudis-radio-button__content__control__indicator"></span> -->
        </div>
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
        <!-- When not invalid: remove fudis-radio-button__content__control--invalid down below -->
        <div class="fudis-radio-button__content__control fudis-radio-button__content__control--invalid">
            <!-- When selected: render the indicator below -->
            <!-- <span class="fudis-radio-button__content__control__indicator"></span> -->
        </div>
      </div>
      <span class="fudis-radio-button__label">Option</span>
    </div>
  </label>
`;

export const PwAll = () => `
  <label class="fudis-radio-button">
    <input type="radio" class="fudis-radio-button__input" value="foo" />
    <div class="fudis-radio-button__content">
      <div class="fudis-radio-button__content-wrapper">
        <div class="fudis-radio-button__content__control"></div>
      </div>
      <span class="fudis-radio-button__label">Option</span>
    </div>
  </label>
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
  <label class="fudis-radio-button fudis-radio-button--disabled">
    <input type="radio" class="fudis-radio-button__input fudis-radio-button__input--disabled" aria-disabled="true" disabled value="foo" />
    <div class="fudis-radio-button__content">
      <div class="fudis-radio-button__content-wrapper">
        <div class="fudis-radio-button__content__control fudis-radio-button__content__control--disabled"></div>
      </div>
      <span class="fudis-radio-button__label">Option</span>
    </div>
  </label>
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
