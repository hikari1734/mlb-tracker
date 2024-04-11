interface CreateTeamsListProps {
  team: { name: string; id: number }[];
  header: string;
}

function TeamsList(props: CreateTeamsListProps) {
  return (
    <details open={true}>
      <summary>{props.header}</summary>
      <ul
        style={{
          listStyleType: "none",
          paddingLeft: "10px",
          marginTop: "5px",
        }}
      >
        {props.team.map((team) => {
          return <li>{team.name}</li>;
        })}
      </ul>
    </details>
  );
}

export default TeamsList;
