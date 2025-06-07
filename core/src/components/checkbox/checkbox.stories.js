export default {
  title: "Components/Checkbox",
};

export const Default = () => `
  <label class="fudis-checkbox">
    <input type="checkbox" class="fudis-checkbox__input" name="fudis-checkbox" value="foo" />
    <div class="fudis-checkbox__content">
       <div class="fudis-checkbox__content-wrapper">
        <!-- When focused: add fudis-checkbox__content__box--focused class down below -->
        <!-- When invalid: add fudis-checkbox__content__box--invalid down below -->
        <span class="fudis-checkbox__content__box">
            <!-- When checked: render the icon below -->
            <!-- <span class="fudis-icon fudis-icon__color__gray-middle fudis-icon__lg fudis-icon__check"></span> -->
        </span>
       </div>
       <span class="fudis-checkbox__content__label">Option</span>
    </div>
  </label>
`;

export const Selected = () => `
  <label class="fudis-checkbox">
    <input type="checkbox" class="fudis-checkbox__input" name="fudis-checkbox" value="foo" />
    <div class="fudis-checkbox__content">
       <div class="fudis-checkbox__content-wrapper">
        <!-- When focused: add fudis-checkbox__content__box--focused class down below -->
        <!-- When invalid: add fudis-checkbox__content__box--invalid down below -->
        <span class="fudis-checkbox__content__box">
            <!-- When not checked: hide the icon below -->
            <span class="fudis-icon fudis-icon__color__gray-middle fudis-icon__lg fudis-icon__check"></span>
        </span>
       </div>
       <span class="fudis-checkbox__content__label">Option</span>
    </div>
  </label>
`;

export const Focused = () => `
  <label class="fudis-checkbox">
    <input type="checkbox" class="fudis-checkbox__input" name="fudis-checkbox" value="foo" />
    <div class="fudis-checkbox__content">
       <div class="fudis-checkbox__content-wrapper">
       <!-- When not focused: remove fudis-checkbox__content__box--focused class below -->
        <span class="fudis-checkbox__content__box fudis-checkbox__content__box--focused">
            <!-- When checked: render the icon below -->
            <!-- <span class="fudis-icon fudis-icon__color__gray-middle fudis-icon__lg fudis-icon__check"></span> -->
        </span>
       </div>
       <span class="fudis-checkbox__content__label">Option</span>
    </div>
  </label>
`;

export const Disabled = () => `
  <label class="fudis-checkbox fudis-checkbox--disabled">
    <input type="checkbox" class="fudis-checkbox__input" name="fudis-checkbox" value="foo" aria-disabled="true" disabled />
    <div class="fudis-checkbox__content">
       <div class="fudis-checkbox__content-wrapper">
        <!-- When not disabled: remove fudis-checkbox__content__box--disabled class down below -->
        <span class="fudis-checkbox__content__box fudis-checkbox__content__box--disabled">
            <!-- When checked: render the icon below -->
            <!-- <span class="fudis-icon fudis-icon__color__gray-middle fudis-icon__lg fudis-icon__check"></span> -->
        </span>
       </div>
       <span class="fudis-checkbox__content__label">Option</span>
    </div>
  </label>
`;

export const Invalid = () => `
  <label class="fudis-checkbox">
    <input type="checkbox" class="fudis-checkbox__input" name="fudis-checkbox" value="foo" aria-invalid="true" />
    <div class="fudis-checkbox__content">
       <div class="fudis-checkbox__content-wrapper">
        <!-- When focused: add fudis-checkbox__content__box--focused class down below -->
        <!-- When not invalid: remove fudis-checkbox__content__box--invalid down below -->
        <span class="fudis-checkbox__content__box fudis-checkbox__content__box--invalid">
            <!-- When checked: render the icon below -->
            <!-- <span class="fudis-icon fudis-icon__color__gray-middle fudis-icon__lg fudis-icon__check"></span> -->
        </span>
       </div>
       <span class="fudis-checkbox__content__label">Option</span>
    </div>
  </label>
`;
