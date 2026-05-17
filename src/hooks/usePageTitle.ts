import { useMatches } from "react-router-dom";

type RouteHandle = {
  title?: string;
};

export function usePageTitle() {
  const matches = useMatches();

  const currentPage = (matches[matches.length - 1]?.handle as RouteHandle)
    ?.title;

  return currentPage;
}
