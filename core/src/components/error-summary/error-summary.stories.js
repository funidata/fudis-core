export default {
  title: "Components/Error Summary",
};

export const Default = () => `
  <article class="fudis-notification fudis-notification__danger">
    <p class="fudis-visually-hidden">Attention</p>
    <span class="fudis-icon fudis-icon__color__gray-dark fudis-icon__lg fudis-icon__alert"></span>
    <div class="fudis-notification__content">
      <h2 class="fudis-error-summary__title">
        The information is incomplete or incorrect. Please correct the following items:
      </h2>
      <ul class="fudis-error-summary__error-list">
        <li class="fudis-error-summary__error-list__item">
          <a class="fudis-link fudis-link__size__md">
            Link to the invalid form component
          </a>
        </li>
        <li class="fudis-error-summary__error-list__item">
          <a class="fudis-link fudis-link__size__md">
            Link to the invalid form component
          </a>
        </li>
        <li class="fudis-error-summary__error-list__item">
          <a class="fudis-link fudis-link__size__md">
            Link to the invalid form component
          </a>
        </li>
      </ul>
    </div>
  </article>
`;
