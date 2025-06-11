export default {
  title: "Components/Button, icon only",
  decorators: [
    (storyFn) =>
      `<div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: flex-start;">${storyFn()}</div>`,
  ],
};

export const Primary = () => `
  <!-- Size: Icon only -->
  <button class="fudis-button fudis-button__label--hidden fudis-button__primary fudis-button__size__icon-only">
    <div class="fudis-button__icon">
        <!-- Add an icon variant of your choice and color here. -->
        <span class="fudis-button__icon__component fudis-icon fudis-icon__color__white fudis-icon__lg fudis-icon__search"></span>
    </div>
  </button>

  <!-- Size: medium -->
  <button class="fudis-button fudis-button__label--hidden fudis-button__primary fudis-button__size__medium">
    <div class="fudis-button__icon">
        <!-- Add an icon variant of your choice and color here. -->
        <span class="fudis-button__icon fudis-icon fudis-icon__color__white fudis-icon__lg fudis-icon__search"></span>
    </div>
  </button>

  <!-- Size: Small -->
  <button class="fudis-button fudis-button__label--hidden fudis-button__primary fudis-button__size__small">
    <div class="fudis-button__icon">
        <!-- Add an icon variant of your choice and color here. -->
        <span class="fudis-button__icon fudis-icon fudis-icon__color__white fudis-icon__lg fudis-icon__search"></span>
    </div>
  </button>
`;

export const Secondary = () => `
  <!-- Size: Icon only -->
  <button class="fudis-button fudis-button__label--hidden fudis-button__secondary fudis-button__size__icon-only">
    <div class="fudis-button__icon">
        <!-- Add an icon variant of your choice and color here. -->
        <span class="fudis-button__icon__component fudis-icon fudis-icon__color__primary fudis-icon__lg fudis-icon__search"></span>
    </div>
  </button>

  <!-- Size: medium -->
  <button class="fudis-button fudis-button__label--hidden fudis-button__secondary fudis-button__size__medium">
    <div class="fudis-button__icon">
        <!-- Add an icon variant of your choice and color here. -->
        <span class="fudis-button__icon fudis-icon fudis-icon__color__primary fudis-icon__lg fudis-icon__search"></span>
    </div>
  </button>

  <!-- Size: Small -->
  <button class="fudis-button fudis-button__label--hidden fudis-button__secondary fudis-button__size__small">
    <div class="fudis-button__icon">
        <!-- Add an icon variant of your choice and color here. -->
        <span class="fudis-button__icon fudis-icon fudis-icon__color__primary fudis-icon__lg fudis-icon__search"></span>
    </div>
  </button>
`;

export const Tertiary = () => `
  <button class="fudis-button fudis-button__label--hidden fudis-button__tertiary fudis-button__size__icon-only">
    <div class="fudis-button__icon">
        <!-- Add an icon variant of your choice and color here. -->
        <span class="fudis-button__icon__component fudis-icon fudis-icon__color__primary fudis-icon__lg fudis-icon__search"></span>
    </div>
  </button>

  <!-- Size: medium -->
  <button class="fudis-button fudis-button__label--hidden fudis-button__tertiary fudis-button__size__medium">
    <div class="fudis-button__icon">
        <!-- Add an icon variant of your choice and color here. -->
        <span class="fudis-button__icon fudis-icon fudis-icon__color__primary fudis-icon__lg fudis-icon__search"></span>
    </div>
  </button>

  <!-- Size: Small -->
  <button class="fudis-button fudis-button__label--hidden fudis-button__tertiary fudis-button__size__small">
    <div class="fudis-button__icon">
        <!-- Add an icon variant of your choice and color here. -->
        <span class="fudis-button__icon fudis-icon fudis-icon__color__primary fudis-icon__lg fudis-icon__search"></span>
    </div>
  </button>
`;

export const Disabled = () => `
  <!-- Adding aria-disabled="true" to any button variant applies the disabled look -->
  <button aria-disabled="true" class="fudis-button fudis-button__label--hidden fudis-button__primary fudis-button__size__icon-only">
    <div class="fudis-button__icon">
        <!-- Add an icon variant of your choice and color here. -->
        <span class="fudis-button__icon__component fudis-icon fudis-icon__color__white fudis-icon__lg fudis-icon__search"></span>
    </div>
  </button>
`;
