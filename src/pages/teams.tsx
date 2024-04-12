import { Checkbox, Flex, Heading, Text } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSchedule, useTeams } from "../api/stats";

function Teams() {
  const { id } = useParams();
  const { data, isLoading } = useTeams(id);
  const { refetch } = useSchedule();

  const [followTeam, setFollowTeam] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      const local = localStorage.getItem(data.teams[0].name);
      if (local === "true") {
        setFollowTeam(true);
      }
    }
  }, [isLoading]);

  useEffect(() => {
    if (!isLoading) {
      if (!followTeam) {
        localStorage.setItem(data.teams[0].name, JSON.stringify(false));
        refetch();
      }
    }
  }, [followTeam]);

  function setLocal() {
    if (!isLoading) {
      localStorage.setItem(data.teams[0].name, JSON.stringify(!followTeam));
      setFollowTeam(!followTeam);
    }
  }

  return (
    <div style={{ display: "flex", color: "white" }}>
      {data && (
        <div style={{ flexGrow: 1 }}>
          <Heading
            as="h4"
            size="4"
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            {data.teams[0].name}
          </Heading>
          <Text
            as="label"
            size="2"
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Flex gap="2">
              <Checkbox
                checked={followTeam}
                onCheckedChange={() => setLocal()}
              />
              Follow Games
            </Flex>
          </Text>
        </div>
      )}
    </div>
  );
}

export default Teams;
