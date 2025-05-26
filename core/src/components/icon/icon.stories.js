export default {
  title: "Components/Icon",
  decorators: [
    (storyFn) =>
      `<div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: flex-start;">${storyFn()}</div>`,
  ],
};

export const AllIcons = () => `
  <span class="fudis-icon fudis-icon__size--lg fudis-icon__color--primary fudis-icon__achievement"></span>
  <span class="fudis-icon fudis-icon__size--lg fudis-icon__color--primary fudis-icon__alert"></span>
  <span class="fudis-icon fudis-icon__size--lg fudis-icon__color--primary fudis-icon__archive"></span>
  <span class="fudis-icon fudis-icon__size--lg fudis-icon__color--primary fudis-icon__arrow-big"></span>
  <span class="fudis-icon fudis-icon__size--lg fudis-icon__color--primary fudis-icon__arrow-dashed"></span>
  <span class="fudis-icon fudis-icon__size--lg fudis-icon__color--primary fudis-icon__arrow-solid"></span>
`;
