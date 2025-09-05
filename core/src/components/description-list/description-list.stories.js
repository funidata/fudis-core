export default {
  title: "Components/Description List",
  argTypes: {
    variant: {
      options: ["regular", "compact"],
      control: { type: "radio" },
    },
  },
};

const html = String.raw;

const DL_configuration = {
  regular: {
    gridStyles: "row-gap: 1rem; column-gap: 2rem",
    colon: "",
    parenthesis_open: "",
    parenthesis_closed: "",
    comma: "",
  },
  compact: {
    gridStyles: "row-gap: 0; column-gap: 1.5rem",
    colon: html`<span class="fudis-dl-item-term__compact__colon"
      >&colon;</span
    >`,
    parenthesis_open: html`<span
      class="fudis-dl-item-details__compact__parenthesis"
      >&#40;</span
    >`,
    parenthesis_closed: html`<span
      class="fudis-dl-item-details__compact__parenthesis"
      >&#41;</span
    >`,
    comma: html`<span class="fudis-dl-item-details__compact__comma"
      >&comma;</span
    >`,
  },
};

function getVariantStyles(variant = "regular") {
  return DL_configuration[variant] ?? DL_configuration.regular;
}

const Template = ({ variant }) => {
  const { gridStyles, colon, parenthesis_open, parenthesis_closed, comma } =
    getVariantStyles(variant);

  return html`
    <dl
      class="fudis-dl"
      style="display: grid; grid-template-columns: repeat(2, 1fr); place-items: stretch; ${gridStyles}"
    >
      <div class="fudis-dl-item">
        <dt class="fudis-dl-item-term__${variant}">First name${colon}</dt>
        <dd class="fudis-dl-item-details__${variant}">Rex</dd>
      </div>

      <div class="fudis-dl-item">
        <dt class="fudis-dl-item-term__${variant}">Last name${colon}</dt>
        <dd class="fudis-dl-item-details__${variant}">Dangerwest</dd>
      </div>

      <div class="fudis-dl-item">
        <dt class="fudis-dl-item-term__${variant}">Alias${colon}</dt>
        <dd class="fudis-dl-item-details__${variant}">Radical Emmet Xtreme</dd>
      </div>

      <div class="fudis-dl-item">
        <dt class="fudis-dl-item-term__${variant}">Voice actor${colon}</dt>
        <dd class="fudis-dl-item-details__${variant}">Chris Pratt</dd>
      </div>

      <div class="fudis-dl-item">
        <dt class="fudis-dl-item-term__${variant}">Enemy${colon}</dt>
        <dd class="fudis-dl-item-details__${variant}">
          <span class="fudis-dl-item-details__${variant}__sub-heading">
            Archenemy
          </span>
          ${parenthesis_open}Emmet Brickowski${parenthesis_closed}${comma}
        </dd>
        <dd class="fudis-dl-item-details__${variant}">Lucy${comma}</dd>
        <dd class="fudis-dl-item-details__${variant}">Unikitty${comma}</dd>
        <dd class="fudis-dl-item-details__${variant}">Benny</dd>
      </div>
    </dl>
  `;
};

let defaultValues = {
  variant: "regular",
};

export const Example = Template.bind({});
Example.args = defaultValues;
