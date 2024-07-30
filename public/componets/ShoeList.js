export const ShoeList = ({shoe, onTitleClick}) => {
	return <>
		{
			shoe.map((shoe, idx) => {
				
				return (
				<div>
				<button key={idx} onClick={() => onTitleClick(shoe.id)}>{shoe.name}</button>
				</div>
				)
			})
		}
	</>
}