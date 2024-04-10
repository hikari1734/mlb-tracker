import { useStats } from '../api/stats';
import DataTable from '../table-columns/home-table';

function Home() {

	const flexContainer = {
		display: 'flex',
		justifyContent: 'space-between',
	}

	const { data, isFetching } = useStats()

	return (
		<div>
			<div style={flexContainer}>
				<div>
					Side content
				</div>
				<div style={{ justifySelf: 'center' }}>
					MLB Tracker
				</div>
				<div>
					something!!
				</div>
			</div>
			{!isFetching && data && (
				<div>
					<div style={{ display: 'flex', justifyContent: 'center' }}>
						Todays Games ({data.dates[0].date})
					</div>
					<div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
						<div>Total Games: {data.totalGames}
						</div>
						<div>
							Games In Progress: {data.totalGamesInProgress}
						</div>
					</div>
					<div style={{ display: 'flex', justifyContent: 'center' }}>
						<DataTable tableData={data.dates[0].games}></DataTable>
					</div>
				</div>)}
		</div>
	)
}

export default Home;