import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import {
  basePath,
  gamePath,
  intervalMs,
  liveFeedPath,
  schedulePath,
  version1,
  version1_1,
} from "../utils/constants/api-constants";

export function useSchedule(id?: number) {
  return useQuery({
    queryKey: ["schedule"],
    queryFn: async () => {
      const res = await axios.get(
        `${basePath}${version1}${schedulePath}/?sportId=${id ?? 1}`
      );
      return res.data;
    },
  });
}

export function useLiveGame(id: string) {
  return useQuery({
    queryKey: ["live"],
    queryFn: async () => {
      const res = await axios.get(
        `${basePath}${version1_1}${gamePath}/${id}${liveFeedPath}`
      );
      return res.data;
    },
    // refetchInterval: intervalMs,
  });
}
