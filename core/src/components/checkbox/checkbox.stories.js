export default {
  title: "Components/Checkbox (WIP)",
};

// TODO: Add Selected and SelectedAndDisabled stories after icons are available

export const Default = () => `
  <label class="fudis-checkbox">
    <input type="checkbox" class="fudis-checkbox__input"></input>
    <div class="fudis-checkbox__content">
       <div class="fudis-checkbox__content-wrapper">
        <span class="fudis-checkbox__content__box"></span>
       </div>
       <div class="fudis-checkbox__content__label">Option</div>
    </div>
  </label>
`;

export const Focused = () => `
  <label class="fudis-checkbox">
    <input type="checkbox" class="fudis-checkbox__input"></input>
    <div class="fudis-checkbox__content">
       <div class="fudis-checkbox__content-wrapper">
        <span class="fudis-checkbox__content__box fudis-checkbox__content__box--focused"></span>
       </div>
       <div class="fudis-checkbox__content__label">Option</div>
    </div>
  </label>
`;

export const Disabled = () => `
  <label class="fudis-checkbox fudis-checkbox--disabled">
    <input type="checkbox" class="fudis-checkbox__input" aria-disabled="true" disabled></input>
    <div class="fudis-checkbox__content">
       <div class="fudis-checkbox__content-wrapper">
        <span class="fudis-checkbox__content__box fudis-checkbox__content__box--disabled"></span>
       </div>
       <div class="fudis-checkbox__content__label">Option</div>
    </div>
  </label>
`;

export const Invalid = () => `
  <label class="fudis-checkbox">
    <input type="checkbox" class="fudis-checkbox__input" aria-invalid="true"></input>
    <div class="fudis-checkbox__content">
       <div class="fudis-checkbox__content-wrapper">
        <span class="fudis-checkbox__content__box fudis-checkbox__content__box--invalid"></span>
       </div>
       <div class="fudis-checkbox__content__label">Option</div>
    </div>
  </label>
`;
