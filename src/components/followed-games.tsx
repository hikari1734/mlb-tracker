import { Box, Button, Dialog, Heading, Link, Strong } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import { useSchedule } from "../api/stats";
import { Games } from "../utils/types";

function FollowedGames() {
  const { data, isLoading } = useSchedule();
  const [filteredTeams, setFilteredTeams] = useState([] as unknown as Games[]);

  useEffect(() => {
    if (!isLoading) {
      const filteredData: Games[] = [];
      data.dates[0].games.forEach(
        (game: {
          teams: {
            home: { team: { name: string } };
            away: { team: { name: string } };
          };
        }) => {
          if (
            localStorage.getItem(game.teams.home.team.name) === "true" ||
            localStorage.getItem(game.teams.away.team.name) === "true"
          ) {
            filteredData.push(game as unknown as Games);
          }
        }
      );
      setFilteredTeams(filteredData);
    }
  }, [isLoading, data]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "200px",
        color: "white",
        borderLeft: "1px solid #FA4616",
        paddingLeft: "5px",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "200px",
          justifyContent: "center",
          paddingBottom: "5px",
        }}
      >
        <Heading size="2">Followed Games</Heading>
      </div>
      {!isLoading && (
        <div>
          {filteredTeams.map((game: Games) => {
            return (
              <div
                style={{
                  display: "flex",
                  paddingBottom: "5px",
                }}
              >
                <Box maxWidth="200px">
                  <Dialog.Root>
                    <Dialog.Trigger>
                      <Link href={`/game/${game.gamePk}`}>
                        <Button
                          variant="outline"
                          style={{
                            width: "200px",
                            height: "50px",
                          }}
                        >
                          <div style={{ textAlign: "start" }}>
                            {game.teams.away.isWinner ? (
                              <Strong>{game.teams.away.team.name}</Strong>
                            ) : (
                              <div>{game.teams.away.team.name}</div>
                            )}
                            {game.teams.home.isWinner ? (
                              <Strong>{game.teams.home.team.name}</Strong>
                            ) : (
                              <div>{game.teams.home.team.name}</div>
                            )}
                          </div>
                          <div
                            style={{
                              alignItems: "flex-end",
                              display: "flex",
                              flexGrow: 1,
                              flexDirection: "column",
                            }}
                          >
                            <div>{game.teams.away.score}</div>
                            <div>{game.teams.home.score}</div>
                          </div>
                        </Button>
                      </Link>
                    </Dialog.Trigger>
                  </Dialog.Root>
                </Box>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
export default FollowedGames;
