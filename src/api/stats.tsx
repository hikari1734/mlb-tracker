import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const intervalMs = 10000;
export function useStats() {
    return useQuery({
        queryKey: ['stats'],
        queryFn: async () => {
              const res = await axios.get('http://statsapi.mlb.com/api/v1/schedule/games/?sportId=1')
              return res.data
        },
        // refetchInterval: intervalMs,
    })
}