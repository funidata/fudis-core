export default {
  title: "Components/Button",
  decorators: [
    (storyFn) =>
      `<div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: flex-start;">${storyFn()}</div>`,
  ],
};

export const Primary = () => `
  <!-- With text -->
  <button class="fudis-button fudis-button__primary fudis-button__size__medium">
    Primary
  </button>

  <!-- With text and icon -->
  <button class="fudis-button fudis-button__primary fudis-button__size__medium">
    <div class="fudis-button__icon">
        <!-- Add an icon variant of your choice and color here. -->
        <span class="fudis-button__icon__component fudis-icon fudis-icon__color__white fudis-icon__lg fudis-icon__search"></span>
    </div>
    Primary
  </button>
`;

export const Secondary = () => `
  <!-- With text -->
  <button class="fudis-button fudis-button__secondary fudis-button__size__medium">
    Secondary
  </button>

  <!-- With text and icon -->
  <button class="fudis-button fudis-button__secondary fudis-button__size__medium">
     <div class="fudis-button__icon">
        <!-- Add an icon variant of your choice and color here. -->
        <span class="fudis-button__icon__component fudis-icon fudis-icon__color__primary fudis-icon__lg fudis-icon__search"></span>
     </div>
    Secondary
  </button>
`;

export const Tertiary = () => `
  <!-- With text -->
  <button class="fudis-button fudis-button__tertiary fudis-button__size__medium">
    Tertiary
  </button>

  <!-- With text and icon -->
  <button class="fudis-button fudis-button__tertiary fudis-button__size__medium">
    <div class="fudis-button__icon">
      <!-- Add an icon variant of your choice and color here.-->
      <span class="fudis-button__icon__component fudis-icon fudis-icon__color__primary fudis-icon__lg fudis-icon__search"></span>
    </div>
    Tertiary
  </button>
`;

export const Primary_Small = () => `
  <!-- With text -->
  <button class="fudis-button fudis-button__primary fudis-button__size__small">
    Primary Small
  </button>

  <!-- With text and icon -->
  <button class="fudis-button fudis-button__primary fudis-button__size__small">
    <div class="fudis-button__icon">
      <!-- Add an icon of your choice and color here. -->
      <span class="fudis-button__icon__component fudis-icon fudis-icon__color__white fudis-icon__lg fudis-icon__search"></span>
    </div>
    Primary Small
  </button>
`;

export const Secondary_Small = () => `
  <!-- With text -->
  <button class="fudis-button fudis-button__secondary fudis-button__size__small">
    Secondary Small
  </button>

  <!-- With text and icon -->
  <button class="fudis-button fudis-button__secondary fudis-button__size__small">
    <div class="fudis-button__icon">
      <!-- Add an icon of your choice and color here. -->
      <span class="fudis-button__icon__component fudis-icon fudis-icon__color__primary fudis-icon__lg fudis-icon__search"></span>
    </div>
    Secondary Small
  </button>
`;

export const Tertiary_Small = () => `
  <!-- With text -->
  <button class="fudis-button fudis-button__tertiary fudis-button__size__small">
    Tertiary Small
  </button>

  <!-- With text and icon -->
  <button class="fudis-button fudis-button__tertiary fudis-button__size__small">
    <div class="fudis-button__icon">
      <!-- Add an icon of your choice and color here. -->
      <span class="fudis-button__icon__component fudis-icon fudis-icon__color__primary fudis-icon__lg fudis-icon__search"></span>
    </div>
    Tertiary Small
  </button>
`;

export const Disabled = () => `
  <!-- Adding aria-disabled="true" to any button variant applies the disabled look -->
  <button aria-disabled="true" class="fudis-button fudis-button__primary fudis-button__size__medium">
    Primary
  </button>

  <button aria-disabled="true" class="fudis-button fudis-button__primary fudis-button__size__medium">
    <div class="fudis-button__icon">
        <!-- Add an icon variant of your choice and color here. -->
        <span class="fudis-button__icon__component fudis-icon fudis-icon__color__white fudis-icon__lg fudis-icon__search"></span>
    </div>
    Primary
  </button>
`;

export const Test = () => `
  <button class="fudis-button fudis-button__primary fudis-button__size__medium">
    Primary
  </button>
   <button class="fudis-button fudis-button__secondary fudis-button__size__medium">
    Secondary
  </button>
  <button class="fudis-button fudis-button__tertiary fudis-button__size__medium">
    Tertiary
  </button>
  <button class="fudis-button fudis-button__primary fudis-button__size__small">
    Primary Small
  </button>
  <button class="fudis-button fudis-button__secondary fudis-button__size__small">
    Secondary Small
  </button>
  <button class="fudis-button fudis-button__tertiary fudis-button__size__small">
    Tertiary Small
  </button>
  <button aria-disabled="true" class="fudis-button fudis-button__primary fudis-button__size__medium">
    Disabled
  </button>
`;
