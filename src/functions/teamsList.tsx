import {
  Avatar,
  Box,
  Button,
  Card,
  Dialog,
  Flex,
  Heading,
  Link,
  Text,
} from "@radix-ui/themes";

interface CreateTeamsListProps {
  team: { name: string; id: number }[];
  header: string;
}

function TeamsList(props: CreateTeamsListProps) {
  return (
    <div>
      <Heading size="2" style={{ color: "white" }}>
        {props.header}
      </Heading>
      {props.team.map((team) => {
        return (
          <Box maxWidth="200px">
            <Dialog.Root>
              <Dialog.Trigger>
                <Link href={`/team/${team.id}`}>
                  <Button
                    variant="ghost"
                    style={{
                      width: "200px",
                      justifyContent: "flex-start",
                    }}
                  >
                    {team.name}
                  </Button>
                </Link>
              </Dialog.Trigger>
            </Dialog.Root>
          </Box>
        );
      })}
    </div>
  );
}

export default TeamsList;
