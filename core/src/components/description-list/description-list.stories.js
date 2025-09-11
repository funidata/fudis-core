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
    colon: html`<span
      class="fudis-dl-item-term__compact__colon"
      aria-hidden="true"
      >&colon;</span
    >`,
    parenthesis_open: html`<span
      class="fudis-dl-item-details__compact__parenthesis"
      aria-hidden="true"
      >&#40;</span
    >`,
    parenthesis_closed: html`<span
      class="fudis-dl-item-details__compact__parenthesis"
      aria-hidden="true"
      >&#41;</span
    >`,
    comma: html`<span
      class="fudis-dl-item-details__compact__comma"
      aria-hidden="true"
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
        <dt class="fudis-dl-item-term__${variant}">Name${colon}</dt>
        <dd class="fudis-dl-item-details__${variant}">Alex Morgan</dd>
      </div>

      <div class="fudis-dl-item">
        <dt class="fudis-dl-item-term__${variant}">University${colon}</dt>
        <dd class="fudis-dl-item-details__${variant}">
          Northbridge International University
        </dd>
      </div>

      <div class="fudis-dl-item">
        <dt class="fudis-dl-item-term__${variant}">Faculty${colon}</dt>
        <dd class="fudis-dl-item-details__${variant}">
          Faculty of Social Sciences
        </dd>
      </div>

      <div class="fudis-dl-item">
        <dt class="fudis-dl-item-term__${variant}">Degree${colon}</dt>
        <dd class="fudis-dl-item-details__${variant}">
          Bachelor of Arts (B.A.) in International Relations
        </dd>
      </div>

      <div class="fudis-dl-item">
        <dt class="fudis-dl-item-term__${variant}">Study Fields${colon}</dt>
        <dd class="fudis-dl-item-details__${variant}">
          Political Science${comma}
        </dd>
        <dd class="fudis-dl-item-details__${variant}">Economics${comma}</dd>
        <dd class="fudis-dl-item-details__${variant}">History${comma}</dd>
        <dd class="fudis-dl-item-details__${variant}">Sociology</dd>
      </div>

      <div class="fudis-dl-item">
        <dt class="fudis-dl-item-term__${variant}">Courses${colon}</dt>
        <dd class="fudis-dl-item-details__${variant}">
          <span class="fudis-dl-item-details__${variant}__sub-heading">
            Minor Study${comma}
          </span>
          ${parenthesis_open}International Law and
          Organizations${parenthesis_closed}${comma}
        </dd>
        <dd class="fudis-dl-item-details__${variant}">
          Introduction to Political Theory${comma}
        </dd>
        <dd class="fudis-dl-item-details__${variant}">
          Comparative Government Systems${comma}
        </dd>
        <dd class="fudis-dl-item-details__${variant}">
          Global Economic Development${comma}
        </dd>
        <dd class="fudis-dl-item-details__${variant}">
          Research Methods in Social Sciences${comma}
        </dd>
        <dd class="fudis-dl-item-details__${variant}">
          Public Policy Analysis
        </dd>
      </div>
    </dl>
  `;
};

let defaultValues = {
  variant: "regular",
};

export const Example = Template.bind({});
Example.args = defaultValues;

export const PwAll = () => {
  return html`
    <div style="display: flex; gap: 2rem; flex-direction: column;">
      <div>${Template({ variant: "regular" })}</div>
      <div>${Template({ variant: "compact" })}</div>
    </div>
  `;
};
