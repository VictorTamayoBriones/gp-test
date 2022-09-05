import React from 'react';
import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid';
import { People } from '@/data';

export interface HomeInterface {}

const Home: React.FC<HomeInterface> = () => {
	const pageSize = 5;

	const columns = [
		{
			field: 'name',
			headerName: 'Name',
			flex: 1,
			minwidth: 150,
			renderCell: (params: GridRenderCellParams)=><>{ params.value }</>
		}
	]

	return(
		<>
			<DataGrid  
				rows={People}
				columns	={columns}
				disableColumnSelector
				disableSelectionOnClick
				autoHeight
				pageSize={ pageSize }
				rowsPerPageOptions={[pageSize]}

			/>
		</>
	);
};

export default Home;

