export default {
  title: "Components/Icon (WIP)",
  decorators: [
    (storyFn) =>
      `<div style="display: grid; gap: 12px; grid-template-columns: 30px 30px 30px; align-items: center;">${storyFn()}</div>`,
  ],
};

export const IconColors = () => `
  <!-- Available colors for all icons -->
  <!-- Element with white icon has dark background color for demonstrative purposes -->
  <span class="fudis-icon fudis-icon__lg fudis-icon__color__red fudis-icon__check"></span>
  <span class="fudis-icon fudis-icon__lg fudis-icon__color__yellow fudis-icon__check"></span>
  <span class="fudis-icon fudis-icon__lg fudis-icon__color__green fudis-icon__check"></span>
  <span class="fudis-icon fudis-icon__lg fudis-icon__color__primary fudis-icon__check"></span>
  <span class="fudis-icon fudis-icon__lg fudis-icon__color__primary-dark fudis-icon__check"></span>
  <span class="fudis-icon fudis-icon__lg fudis-icon__color__white fudis-icon__check" style="background-color: #3b3b3b"></span>
  <span class="fudis-icon fudis-icon__lg fudis-icon__color__gray-light fudis-icon__check"></span>
  <span class="fudis-icon fudis-icon__lg fudis-icon__color__gray-dark fudis-icon__check"></span>
`;

export const AllIcons = () => `
  <span class="fudis-icon fudis-icon__sm fudis-icon__color__primary fudis-icon__achievement"></span>
  <span class="fudis-icon fudis-icon__md fudis-icon__color__primary fudis-icon__achievement"></span>
  <span class="fudis-icon fudis-icon__lg fudis-icon__color__primary fudis-icon__achievement"></span>

  <span class="fudis-icon fudis-icon__sm fudis-icon__color__primary fudis-icon__alert"></span>
  <span class="fudis-icon fudis-icon__md fudis-icon__color__primary fudis-icon__alert"></span>
  <span class="fudis-icon fudis-icon__lg fudis-icon__color__primary fudis-icon__alert"></span>

  <span class="fudis-icon fudis-icon__sm fudis-icon__color__primary fudis-icon__archive"></span>
  <span class="fudis-icon fudis-icon__md fudis-icon__color__primary fudis-icon__archive"></span>
  <span class="fudis-icon fudis-icon__lg fudis-icon__color__primary fudis-icon__archive"></span>

  <span class="fudis-icon fudis-icon__sm fudis-icon__color__primary fudis-icon__arrow-big"></span>
  <span class="fudis-icon fudis-icon__md fudis-icon__color__primary fudis-icon__arrow-big"></span>
  <span class="fudis-icon fudis-icon__lg fudis-icon__color__primary fudis-icon__arrow-big"></span>

  <span class="fudis-icon fudis-icon__sm fudis-icon__color__primary fudis-icon__arrow-dashed"></span>
  <span class="fudis-icon fudis-icon__md fudis-icon__color__primary fudis-icon__arrow-dashed"></span>
  <span class="fudis-icon fudis-icon__lg fudis-icon__color__primary fudis-icon__arrow-dashed"></span>

  <span class="fudis-icon fudis-icon__sm fudis-icon__color__primary fudis-icon__arrow-solid"></span>
  <span class="fudis-icon fudis-icon__md fudis-icon__color__primary fudis-icon__arrow-solid"></span>
  <span class="fudis-icon fudis-icon__lg fudis-icon__color__primary fudis-icon__arrow-solid"></span>

  <span class="fudis-icon fudis-icon__sm fudis-icon__color__primary fudis-icon__check"></span>
  <span class="fudis-icon fudis-icon__md fudis-icon__color__primary fudis-icon__check"></span>
  <span class="fudis-icon fudis-icon__lg fudis-icon__color__primary fudis-icon__check"></span>

  <span class="fudis-icon fudis-icon__sm fudis-icon__color__primary fudis-icon__brochure"></span>
  <span class="fudis-icon fudis-icon__md fudis-icon__color__primary fudis-icon__brochure"></span>
  <span class="fudis-icon fudis-icon__lg fudis-icon__color__primary fudis-icon__brochure"></span>

  <span class="fudis-icon fudis-icon__sm fudis-icon__color__primary fudis-icon__check-indeterminate"></span>
  <span class="fudis-icon fudis-icon__md fudis-icon__color__primary fudis-icon__check-indeterminate"></span>
  <span class="fudis-icon fudis-icon__lg fudis-icon__color__primary fudis-icon__check-indeterminate"></span>

  <span class="fudis-icon fudis-icon__sm fudis-icon__color__primary fudis-icon__calendar"></span>
  <span class="fudis-icon fudis-icon__md fudis-icon__color__primary fudis-icon__calendar"></span>
  <span class="fudis-icon fudis-icon__lg fudis-icon__color__primary fudis-icon__calendar"></span>

  <span class="fudis-icon fudis-icon__sm fudis-icon__color__primary fudis-icon__bullets"></span>
  <span class="fudis-icon fudis-icon__md fudis-icon__color__primary fudis-icon__bullets"></span>
  <span class="fudis-icon fudis-icon__lg fudis-icon__color__primary fudis-icon__bullets"></span>

  <span class="fudis-icon fudis-icon__sm fudis-icon__color__primary fudis-icon__back"></span>
  <span class="fudis-icon fudis-icon__md fudis-icon__color__primary fudis-icon__back"></span>
  <span class="fudis-icon fudis-icon__lg fudis-icon__color__primary fudis-icon__back"></span>

  <span class="fudis-icon fudis-icon__sm fudis-icon__color__primary fudis-icon__change-log"></span>
  <span class="fudis-icon fudis-icon__md fudis-icon__color__primary fudis-icon__change-log"></span>
  <span class="fudis-icon fudis-icon__lg fudis-icon__color__primary fudis-icon__change-log"></span>

  <span class="fudis-icon fudis-icon__sm fudis-icon__color__primary fudis-icon__search"></span>
  <span class="fudis-icon fudis-icon__md fudis-icon__color__primary fudis-icon__search"></span>
  <span class="fudis-icon fudis-icon__lg fudis-icon__color__primary fudis-icon__search"></span>

  <span class="fudis-icon fudis-icon__sm fudis-icon__color__primary fudis-icon__new-tab"></span>
  <span class="fudis-icon fudis-icon__md fudis-icon__color__primary fudis-icon__new-tab"></span>
  <span class="fudis-icon fudis-icon__lg fudis-icon__color__primary fudis-icon__new-tab"></span>

  <span class="fudis-icon fudis-icon__sm fudis-icon__color__primary fudis-icon__close"></span>
  <span class="fudis-icon fudis-icon__md fudis-icon__color__primary fudis-icon__close"></span>
  <span class="fudis-icon fudis-icon__lg fudis-icon__color__primary fudis-icon__close"></span>

  <span class="fudis-icon fudis-icon__sm fudis-icon__color__primary fudis-icon__exclamation-mark-circle"></span>
  <span class="fudis-icon fudis-icon__md fudis-icon__color__primary fudis-icon__exclamation-mark-circle"></span>
  <span class="fudis-icon fudis-icon__lg fudis-icon__color__primary fudis-icon__exclamation-mark-circle"></span>

  <span class="fudis-icon fudis-icon__sm fudis-icon__color__primary fudis-icon__checkmark-circle"></span>
  <span class="fudis-icon fudis-icon__md fudis-icon__color__primary fudis-icon__checkmark-circle"></span>
  <span class="fudis-icon fudis-icon__lg fudis-icon__color__primary fudis-icon__checkmark-circle"></span>

  <span class="fudis-icon fudis-icon__sm fudis-icon__color__primary fudis-icon__info-circle"></span>
  <span class="fudis-icon fudis-icon__md fudis-icon__color__primary fudis-icon__info-circle"></span>
  <span class="fudis-icon fudis-icon__lg fudis-icon__color__primary fudis-icon__info-circle"></span>
`;
