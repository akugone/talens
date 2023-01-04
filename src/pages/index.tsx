import {
  PublicationSortCriteria,
  useExplorePublicationsQuery,
} from "../graphql/generated";

export default function Home() {
  const { data, isLoading, error } = useExplorePublicationsQuery({
    request: {
      sortCriteria: PublicationSortCriteria.TopCollected,
    },
  });
  console.log({
    data,
    isLoading,
    error,
  });

  return <>Hello</>;
}
