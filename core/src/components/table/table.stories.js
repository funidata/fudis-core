export default {
  title: "Components/Table",
  argTypes: {
    variant: {
      options: ["default", "mobile"],
      control: { type: "radio" },
    },
    alignHeader: {
      options: ["left", "center", "right"],
      control: { type: "radio" },
    },
    alignCell: {
      options: ["left", "center", "right"],
      control: { type: "radio" },
    },
    verticalAlignCell: {
      options: ["top", "center", "bottom"],
      control: { type: "radio" },
    },
  },
};

const html = String.raw;

const Template = ({ variant, alignHeader, alignCell, verticalAlignCell }) => {
  return html`
    <table class="fudis-table fudis-table__${variant}">
      <caption class="fudis-table__${variant}__caption">
        Course information
      </caption>
      <thead>
        <tr>
          <th
            scope="col"
            class="fudis-table__${variant}__header fudis-table__${variant}__header__align__${alignHeader}"
          >
            Code
          </th>
          <th
            scope="col"
            class="fudis-table__${variant}__header fudis-table__${variant}__header__align__${alignHeader}"
          >
            Title
          </th>
          <th
            scope="col"
            class="fudis-table__${variant}__header fudis-table__${variant}__header__align__${alignHeader}"
          >
            Curriculum periods
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td
            class="fudis-table__${variant}__cell fudis-table__${variant}__cell__align__${alignCell} fudis-table__${variant}__cell__vertical-align__${verticalAlignCell}"
          >
            AUT.116
          </td>
          <td
            class="fudis-table__${variant}__cell fudis-table__${variant}__cell__align__${alignCell} fudis-table__${variant}__cell__vertical-align__${verticalAlignCell}"
          >
            Information Technology Applications in Automation
          </td>
          <td
            class="fudis-table__${variant}__cell fudis-table__${variant}__cell__align__${alignCell} fudis-table__${variant}__cell__vertical-align__${verticalAlignCell}"
          >
            2024-2025
          </td>
        </tr>
        <tr>
          <td
            class="fudis-table__${variant}__cell fudis-table__${variant}__cell__align__${alignCell} fudis-table__${variant}__cell__vertical-align__${verticalAlignCell}"
          >
            URLA-10
          </td>
          <td
            class="fudis-table__${variant}__cell fudis-table__${variant}__cell__align__${alignCell} fudis-table__${variant}__cell__vertical-align__${verticalAlignCell}"
          >
            Urban Laboratory II (studio)
          </td>
          <td
            class="fudis-table__${variant}__cell fudis-table__${variant}__cell__align__${alignCell} fudis-table__${variant}__cell__vertical-align__${verticalAlignCell}"
          >
            2025-2026
          </td>
        </tr>
        <tr>
          <td
            class="fudis-table__${variant}__cell fudis-table__${variant}__cell__align__${alignCell} fudis-table__${variant}__cell__vertical-align__${verticalAlignCell}"
          >
            DES-12.335
          </td>
          <td
            class="fudis-table__${variant}__cell fudis-table__${variant}__cell__align__${alignCell} fudis-table__${variant}__cell__vertical-align__${verticalAlignCell}"
          >
            Architectural Design and Integrated Sustainable Systems for Urban
            Environments and Resilient Infrastructures in the 21st Century
          </td>
          <td
            class="fudis-table__${variant}__cell fudis-table__${variant}__cell__align__${alignCell} fudis-table__${variant}__cell__vertical-align__${verticalAlignCell}"
          >
            2025-2026
          </td>
        </tr>
      </tbody>
    </table>
  `;
};

const SelectableTemplate = ({
  variant,
  alignHeader,
  alignCell,
  verticalAlignCell,
}) => {
  return html`
    <table class="fudis-table fudis-table__${variant}">
      <caption id="table-caption-id" class="fudis-table__${variant}__caption">
        Course selection
      </caption>
      <thead>
        <tr>
          <th
            scope="col"
            class="fudis-table__${variant}__header fudis-table__${variant}__header__align__${alignHeader}"
          >
            <label class="fudis-checkbox">
              <input
                class="fudis-checkbox__input"
                type="checkbox"
                value="foo"
                aria-labelledby="table-caption-id"
              />
              <div class="fudis-checkbox__content">
                <div class="fudis-checkbox__content-wrapper">
                  <span class="fudis-checkbox__content__box"></span>
                </div>
              </div>
            </label>
          </th>
          <th
            scope="col"
            class="fudis-table__${variant}__header fudis-table__${variant}__header__align__${alignHeader}"
          >
            Code
          </th>
          <th
            scope="col"
            class="fudis-table__${variant}__header fudis-table__${variant}__header__align__${alignHeader}"
          >
            Title
          </th>
          <th
            scope="col"
            class="fudis-table__${variant}__header fudis-table__${variant}__header__align__${alignHeader}"
          >
            Curriculum periods
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td
            class="fudis-table__${variant}__cell fudis-table__${variant}__cell__checkbox fudis-table__${variant}__cell__align__${alignCell} fudis-table__${variant}__cell__vertical-align__${verticalAlignCell}"
          >
            <label class="fudis-checkbox">
              <input
                class="fudis-checkbox__input"
                type="checkbox"
                value="foo"
                aria-labelledby="course-aut"
              />
              <div class="fudis-checkbox__content">
                <div class="fudis-checkbox__content-wrapper">
                  <span class="fudis-checkbox__content__box"></span>
                </div>
              </div>
            </label>
          </td>
          <td
            id="course-aut"
            class="fudis-table__${variant}__cell fudis-table__${variant}__cell__align__${alignCell} fudis-table__${variant}__cell__vertical-align__${verticalAlignCell}"
          >
            AUT.116
          </td>
          <td
            class="fudis-table__${variant}__cell fudis-table__${variant}__cell__align__${alignCell} fudis-table__${variant}__cell__vertical-align__${verticalAlignCell}"
          >
            Information Technology Applications in Automation
          </td>
          <td
            class="fudis-table__${variant}__cell fudis-table__${variant}__cell__align__${alignCell} fudis-table__${variant}__cell__vertical-align__${verticalAlignCell}"
          >
            2024-2025
          </td>
        </tr>
        <tr>
          <td
            class="fudis-table__${variant}__cell fudis-table__${variant}__cell__checkbox fudis-table__${variant}__cell__align__${alignCell} fudis-table__${variant}__cell__vertical-align__${verticalAlignCell}"
          >
            <label class="fudis-checkbox">
              <input
                class="fudis-checkbox__input"
                type="checkbox"
                value="foo"
                aria-labelledby="course-urla"
              />
              <div class="fudis-checkbox__content">
                <div class="fudis-checkbox__content-wrapper">
                  <span class="fudis-checkbox__content__box"></span>
                </div>
              </div>
            </label>
          </td>
          <td
            id="course-urla"
            class="fudis-table__${variant}__cell fudis-table__${variant}__cell__align__${alignCell} fudis-table__${variant}__cell__vertical-align__${verticalAlignCell}"
          >
            URLA-10
          </td>
          <td
            class="fudis-table__${variant}__cell fudis-table__${variant}__cell__align__${alignCell} fudis-table__${variant}__cell__vertical-align__${verticalAlignCell}"
          >
            Urban Laboratory II (studio)
          </td>
          <td
            class="fudis-table__${variant}__cell fudis-table__${variant}__cell__align__${alignCell} fudis-table__${variant}__cell__vertical-align__${verticalAlignCell}"
          >
            2025-2026
          </td>
        </tr>
        <tr>
          <td
            class="fudis-table__${variant}__cell fudis-table__${variant}__cell__checkbox fudis-table__${variant}__cell__align__${alignCell} fudis-table__${variant}__cell__vertical-align__${verticalAlignCell}"
          >
            <label class="fudis-checkbox">
              <input
                class="fudis-checkbox__input"
                type="checkbox"
                value="foo"
                aria-labelledby="course-des"
              />
              <div class="fudis-checkbox__content">
                <div class="fudis-checkbox__content-wrapper">
                  <span class="fudis-checkbox__content__box">
                    <span
                      class="fudis-icon fudis-icon__color__gray-dark fudis-icon__lg fudis-icon__check"
                    ></span>
                  </span>
                </div>
              </div>
            </label>
          </td>
          <td
            id="course-des"
            class="fudis-table__${variant}__cell fudis-table__${variant}__cell__align__${alignCell} fudis-table__${variant}__cell__vertical-align__${verticalAlignCell}"
          >
            DES-12.335
          </td>
          <td
            class="fudis-table__${variant}__cell fudis-table__${variant}__cell__align__${alignCell} fudis-table__${variant}__cell__vertical-align__${verticalAlignCell}"
          >
            Architectural Design and Integrated Sustainable Systems for Urban
            Environments and Resilient Infrastructures in the 21st Century
          </td>
          <td
            class="fudis-table__${variant}__cell fudis-table__${variant}__cell__align__${alignCell} fudis-table__${variant}__cell__vertical-align__${verticalAlignCell}"
          >
            2025-2026
          </td>
        </tr>
      </tbody>
    </table>
  `;
};

let defaultValues = {
  variant: "default",
  alignHeader: "left",
  alignCell: "left",
  verticalAlignCell: "top",
};

export const Example = Template.bind({});
Example.args = defaultValues;

export const SelectableExample = SelectableTemplate.bind({});
SelectableExample.args = defaultValues;

export const PwAll = () => {
  return html`
    <div style="margin-bottom: 2rem">
      ${Template({
        variant: "default",
        alignHeader: "left",
        alignCell: "left",
        verticalAlignCell: "top",
      })}
    </div>
    <div style="margin-bottom: 2rem">
      ${Template({
        variant: "mobile",
        alignHeader: "left",
        alignCell: "left",
        verticalAlignCell: "top",
      })}
    </div>
    <div style="margin-bottom: 2rem">
      ${SelectableTemplate({
        variant: "default",
        alignHeader: "left",
        alignCell: "left",
        verticalAlignCell: "top",
      })}
    </div>
    <div style="margin-bottom: 2rem">
      ${SelectableTemplate({
        variant: "mobile",
        alignHeader: "left",
        alignCell: "left",
        verticalAlignCell: "top",
      })}
    </div>
  `;
};
