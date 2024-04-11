interface CreateTeamsListProps {
  team: { name: string; id: number }[];
  header: string;
}

function TeamsList(props: CreateTeamsListProps) {
  return (
    <details open={true}>
      <summary style={{ marginBottom: "10px" }}>{props.header}</summary>
      <ul
        style={{
          listStyleType: "none",
          paddingLeft: "15px",
          marginTop: "5px",
        }}
      >
        {props.team.map((team) => {
          return (
            <li>
              <a href={`/team/${team.id}`}>{team.name}</a>
            </li>
          );
        })}
      </ul>
    </details>
  );
}

export default TeamsList;
