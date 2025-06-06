export default {
  title: "Components/Icon",
  decorators: [
    (storyFn) =>
      `<div style="display: grid; gap: 12px; grid-template-columns: 30px 30px 30px; align-items: center;">${storyFn()}</div>`,
  ],
};

export const AllIcons = () => `
  <span class="fudis-icon fudis-icon__size--sm fudis-icon__color__primary fudis-icon__achievement"></span>
  <span class="fudis-icon fudis-icon__size--md fudis-icon__color__primary fudis-icon__achievement"></span>
  <span class="fudis-icon fudis-icon__size--lg fudis-icon__color__primary fudis-icon__achievement"></span>

  <span class="fudis-icon fudis-icon__size--sm fudis-icon__color__primary fudis-icon__alert"></span>
  <span class="fudis-icon fudis-icon__size--md fudis-icon__color__primary fudis-icon__alert"></span>
  <span class="fudis-icon fudis-icon__size--lg fudis-icon__color__primary fudis-icon__alert"></span>

  <span class="fudis-icon fudis-icon__size--sm fudis-icon__color__primary fudis-icon__archive"></span>
  <span class="fudis-icon fudis-icon__size--md fudis-icon__color__primary fudis-icon__archive"></span>
  <span class="fudis-icon fudis-icon__size--lg fudis-icon__color__primary fudis-icon__archive"></span>

  <span class="fudis-icon fudis-icon__size--sm fudis-icon__color__primary fudis-icon__arrow-big"></span>
  <span class="fudis-icon fudis-icon__size--md fudis-icon__color__primary fudis-icon__arrow-big"></span>
  <span class="fudis-icon fudis-icon__size--lg fudis-icon__color__primary fudis-icon__arrow-big"></span>

  <span class="fudis-icon fudis-icon__size--sm fudis-icon__color__primary fudis-icon__arrow-dashed"></span>
  <span class="fudis-icon fudis-icon__size--md fudis-icon__color__primary fudis-icon__arrow-dashed"></span>
  <span class="fudis-icon fudis-icon__size--lg fudis-icon__color__primary fudis-icon__arrow-dashed"></span>

  <span class="fudis-icon fudis-icon__size--sm fudis-icon__color__primary fudis-icon__arrow-solid"></span>
  <span class="fudis-icon fudis-icon__size--md fudis-icon__color__primary fudis-icon__arrow-solid"></span>
  <span class="fudis-icon fudis-icon__size--lg fudis-icon__color__primary fudis-icon__arrow-solid"></span>

    <span class="fudis-icon fudis-icon__size--sm fudis-icon__color__primary fudis-icon__check"></span>
  <span class="fudis-icon fudis-icon__size--md fudis-icon__color__primary fudis-icon__arrow-check"></span>
  <span class="fudis-icon fudis-icon__size--lg fudis-icon__color__primary fudis-icon__arrow-check"></span>
`;
