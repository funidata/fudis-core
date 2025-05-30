export default {
    title: "Components/Typography/Miscellaneous",
    decorators: [
        (storyFn) =>
            `<div>${storyFn()}</div>`,
    ],
};

export const EmptyState = () => `
<p class="fudis-text-emptystate">
Fudis empty state text
</p>
`;

export const TableCaption = () => `
<p class="fudis-table-caption">
Fudis table caption
</p>
`;