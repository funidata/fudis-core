export default {
  title: "Components/Breadcrumbs",
};

export const Example = () => `
<nav aria-label="Breadcrumbs: Student information">
  <ul class="fudis-breadcrumbs">
    <li class="fudis-breadcrumbs__item">
      <a class="fudis-breadcrumbs__item-link" href="#">Home</a>
      <span class="fudis-icon fudis-icon__lg fudis-icon__color__gray-dark fudis-icon__chevron"></span>
    </li>
    <li class="fudis-breadcrumbs__item">
      <a class="fudis-breadcrumbs__item-link" href="#">Profile</a>
      <span class="fudis-icon fudis-icon__lg fudis-icon__color__gray-dark fudis-icon__chevron"></span>
    </li>
    <li class="fudis-breadcrumbs__item">
      <a class="fudis-breadcrumbs__item-link" href="#">Study rights</a>
      <span class="fudis-icon fudis-icon__lg fudis-icon__color__gray-dark fudis-icon__chevron"></span>
    </li>
    <li class="fudis-breadcrumbs__item">
      <p class="fudis-body-text fudis-body-text__md-regular" aria-current="page">Degree education</p>
    </li>
  </ul>
</nav>
`;
