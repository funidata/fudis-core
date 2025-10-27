export default {
  title: "Components/Table",
  argTypes: {
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
    ariaSort: {
      options: ["ascending", "descending", "none"],
      control: { type: "radio" },
    },
  },
};

const html = String.raw;

const Template = ({ alignHeader, alignCell, verticalAlignCell, ariaSort }) => {
  // Aria-sort attribute should not be in the DOM if aria-sort is none
  const ariaSortAttribute =
    ariaSort && ariaSort !== "none" ? `aria-sort="${ariaSort}"` : "";

  // Add icon rotate class based on ariaSort control value.
  const rotateClass =
    ariaSort === "descending" ? "fudis-icon__rotate__flip-180" : "";

  // Add active header class based on ariaSort control value, only currently sorted header should have this class
  const activeSortableHeader =
    (ariaSort === "descending") | (ariaSort === "ascending")
      ? "fudis-table__header-button--active"
      : "";

  const courseData = [
    {
      code: "AUT.116",
      title: "Information Technology Applications in Automation",
      period: "2024-2025",
    },
    {
      code: "URLA-10",
      title: "Urban Laboratory II (studio)",
      period: "2025-2026",
    },
    {
      code: "DES-12.335",
      title:
        "Architectural Design and Integrated Sustainable Systems for Urban Environments and Resilient Infrastructures in the 21st Century",
      period: "2025-2026",
    },
  ];

  const sortedCourseData = [...courseData];

  // Sort example data alphabetically based on ariaSort control value
  if (ariaSort === "ascending") {
    sortedCourseData.sort((a, b) => a.code.localeCompare(b.code));
  } else if (ariaSort === "descending") {
    sortedCourseData.sort((a, b) => b.code.localeCompare(a.code));
  }

  return html`
    <table class="fudis-table">
      <caption class="fudis-table__caption">
        Course information
      </caption>
      <thead>
        <tr class="fudis-table__header-row">
          <th scope="col" ${ariaSortAttribute}>
            <button
              class="fudis-table__header-button fudis-table__header-button__align__${alignHeader} fudis-table__header-button--sortable ${activeSortableHeader}"
              type="button"
            >
              Code
              <span
                class="fudis-icon fudis-icon__color__primary fudis-icon__lg fudis-icon__sorter ${rotateClass}"
              ></span>
            </button>
          </th>
          <th
            scope="col"
            class="fudis-table__header fudis-table__header__align__${alignHeader}"
          >
            Title
          </th>
          <th
            scope="col"
            class="fudis-table__header fudis-table__header__align__${alignHeader}"
          >
            Curriculum periods
          </th>
        </tr>
      </thead>
      <tbody>
        ${sortedCourseData
          .map(
            (row) => `
          <tr>
            <td class="fudis-table__cell fudis-table__cell__align__${alignCell} fudis-table__cell__vertical-align__${verticalAlignCell}">
              ${row.code}
            </td>
            <td class="fudis-table__cell fudis-table__cell__align__${alignCell} fudis-table__cell__vertical-align__${verticalAlignCell}">
              ${row.title}
            </td>
            <td class="fudis-table__cell fudis-table__cell__align__${alignCell} fudis-table__cell__vertical-align__${verticalAlignCell}">
              ${row.period}
            </td>
          </tr>
          `,
          )
          .join("")}
      </tbody>
    </table>
  `;
};

// Expose this template with necessary modifications when mass selection is ready to be published by the designers.
// Developers were too eager to add the checkboxes to the table "just for reference".
// const SelectableTemplate = ({ alignHeader, alignCell, verticalAlignCell }) => {
//   return html`
//     <table class="fudis-table">
//       <caption class="fudis-table__caption">
//         Course selection
//       </caption>
//       <thead>
//         <tr>
//           <th
//             scope="col"
//             class="fudis-table__header fudis-table__header__align__${alignHeader}"
//           >
//             Select course
//           </th>
//           <th
//             scope="col"
//             class="fudis-table__header fudis-table__header__align__${alignHeader}"
//           >
//             Code
//           </th>
//           <th
//             scope="col"
//             class="fudis-table__header fudis-table__header__align__${alignHeader}"
//           >
//             Title
//           </th>
//           <th
//             scope="col"
//             class="fudis-table__header fudis-table__header__align__${alignHeader}"
//           >
//             Curriculum periods
//           </th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td
//             class="fudis-table__cell fudis-table__cell__checkbox fudis-table__cell__align__${alignCell} fudis-table__cell__vertical-align__${verticalAlignCell}"
//           >
//             <label class="fudis-checkbox">
//               <input
//                 class="fudis-checkbox__input"
//                 type="checkbox"
//                 value="foo"
//                 aria-labelledby="course-aut"
//               />
//               <div class="fudis-checkbox__content">
//                 <div class="fudis-checkbox__content-wrapper">
//                   <span class="fudis-checkbox__content__box"></span>
//                 </div>
//               </div>
//             </label>
//           </td>
//           <td
//             class="fudis-table__cell fudis-table__cell__align__${alignCell} fudis-table__cell__vertical-align__${verticalAlignCell}"
//           >
//             AUT.116
//           </td>
//           <td
//             id="course-aut"
//             class="fudis-table__cell fudis-table__cell__align__${alignCell} fudis-table__cell__vertical-align__${verticalAlignCell}"
//           >
//             Information Technology Applications in Automation
//           </td>
//           <td
//             class="fudis-table__cell fudis-table__cell__align__${alignCell} fudis-table__cell__vertical-align__${verticalAlignCell}"
//           >
//             2024-2025
//           </td>
//         </tr>
//         <tr>
//           <td
//             class="fudis-table__cell fudis-table__cell__checkbox fudis-table__cell__align__${alignCell} fudis-table__cell__vertical-align__${verticalAlignCell}"
//           >
//             <label class="fudis-checkbox">
//               <input
//                 class="fudis-checkbox__input"
//                 type="checkbox"
//                 value="foo"
//                 aria-labelledby="course-urla"
//               />
//               <div class="fudis-checkbox__content">
//                 <div class="fudis-checkbox__content-wrapper">
//                   <span class="fudis-checkbox__content__box"></span>
//                 </div>
//               </div>
//             </label>
//           </td>
//           <td
//             class="fudis-table__cell fudis-table__cell__align__${alignCell} fudis-table__cell__vertical-align__${verticalAlignCell}"
//           >
//             URLA-10
//           </td>
//           <td
//             id="course-urla"
//             class="fudis-table__cell fudis-table__cell__align__${alignCell} fudis-table__cell__vertical-align__${verticalAlignCell}"
//           >
//             Urban Laboratory II (studio)
//           </td>
//           <td
//             class="fudis-table__cell fudis-table__cell__align__${alignCell} fudis-table__cell__vertical-align__${verticalAlignCell}"
//           >
//             2025-2026
//           </td>
//         </tr>
//         <tr>
//           <td
//             class="fudis-table__cell fudis-table__cell__checkbox fudis-table__cell__align__${alignCell} fudis-table__cell__vertical-align__${verticalAlignCell}"
//           >
//             <label class="fudis-checkbox">
//               <input
//                 class="fudis-checkbox__input"
//                 type="checkbox"
//                 value="foo"
//                 aria-labelledby="course-des"
//               />
//               <div class="fudis-checkbox__content">
//                 <div class="fudis-checkbox__content-wrapper">
//                   <span class="fudis-checkbox__content__box">
//                     <span
//                       class="fudis-icon fudis-icon__color__gray-dark fudis-icon__lg fudis-icon__check"
//                     ></span>
//                   </span>
//                 </div>
//               </div>
//             </label>
//           </td>
//           <td
//             class="fudis-table__cell fudis-table__cell__align__${alignCell} fudis-table__cell__vertical-align__${verticalAlignCell}"
//           >
//             DES-12.335
//           </td>
//           <td
//             id="course-des"
//             class="fudis-table__cell fudis-table__cell__align__${alignCell} fudis-table__cell__vertical-align__${verticalAlignCell}"
//           >
//             Architectural Design and Integrated Sustainable Systems for Urban
//             Environments and Resilient Infrastructures in the 21st Century
//           </td>
//           <td
//             class="fudis-table__cell fudis-table__cell__align__${alignCell} fudis-table__cell__vertical-align__${verticalAlignCell}"
//           >
//             2025-2026
//           </td>
//         </tr>
//       </tbody>
//     </table>
//   `;
// };

let defaultValues = {
  alignHeader: "left",
  alignCell: "left",
  verticalAlignCell: "top",
  ariaSort: "none",
};

export const Example = Template.bind({});
Example.args = defaultValues;

// export const SelectableExample = SelectableTemplate.bind({});
// SelectableExample.args = defaultValues;

export const PwAll = () => {
  return html`
    <div style="margin-bottom: 2rem">
      ${Template({
        alignHeader: "left",
        alignCell: "left",
        verticalAlignCell: "top",
        ariaSort: "none",
      })}
    </div>
  `;
};
