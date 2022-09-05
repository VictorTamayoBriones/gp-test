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
		},
		{
			field: 'category',
			headerName: 'Category',
			flex: 1,
			minwidth: 150,
			renderCell: (params: GridRenderCellParams)=><>{ params.value }</>
		},
		{
			field: 'company',
			headerName: 'Company',
			flex: 1,
			minwidth: 150,
			renderCell: (params: GridRenderCellParams)=><>{ params.value }</>
		},
	]

	return(
		<div className="table-container">
			<DataGrid  
				rows={People}
				columns	={columns}
				disableColumnSelector
				disableSelectionOnClick
				autoHeight
				pageSize={ pageSize }
				rowsPerPageOptions={[pageSize]}
				getRowId={(row: any) => row.id }
			/>
		</div>
	);
};

export default Home;

