export default {
	title: "Components/Description List",
	argTypes: {
		variant: {
			options: ['regular', 'compact'],
			control: { type: 'radio' },
		},
	},
};

const html = String.raw;

const Template = ({variant}) => {

	const gridStyles = variant === "compact" ? "row-gap: 0; gap: 1,5rem" : "row-gap: 1rem; gap: 2rem";
	const colon = variant === "compact" ? `<span class="'fudis-dl-item-term__compact__colon'">&colon;</span>` : "";

	return html`
	<dl class="fudis-dl" style="display: grid; grid-template-columns: repeat(2, 1fr); place-items: stretch; ${gridStyles}">
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
	</dl>
`
}

let defaultValues = {
	variant: "regular",
}

export const Example = Template.bind({});
Example.args = defaultValues;