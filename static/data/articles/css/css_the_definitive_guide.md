- @import: import directive
- @media: with media queries, an author can define the media enviroment in which a given stylesheet is used by the browser
	- media types: `@media projection { }`
	- media descriptors: `@media (min-resolution: 96dpi) { }`
- @support: feature queries
	- the ability to apply blocks of CSS when certain CSS property-value combinations were supported by the user agent
	- `@support(display: grid){ }`


- pseudo class
	- :hover
- pseudo element
	- ::before


- specificity
	- For every ID attribute value given in the selector, add 0,1,0,0
	- For every class attribute value, attribute selection, or pseudo-class given in the selector, add 0,0,1,0
	- For every element and pseudo-element given in the selector, add 0,0,0,1
	- Combinators and the universal selector do not contribute anything to the specificity
	- inline style add 1,0,0,0
- !important
	- Declarations that are marked !important do not have a special specificity value, but are instead considered separately from non-important declarations. In effect, all !important declarations are grouped together, and specificity conflicts are resolved relatively within that group. Similarly, all non-important declarations are considered together, with any conflicts within the non-important group are resolved using spe‐ cificity. 

- inheritance
	- most of the box-model properties—including margins, padding, back‐ grounds, and borders—are not inherited
	- inherited values have no specificity at all, not even zero specificity.