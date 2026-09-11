import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';

const queryClient = new QueryClient();

function Example() {
  const { data, isPending } = useQuery({
    queryKey: ['todo'],
    queryFn: () =>
      fetch('https://jsonplaceholder.typicode.com/todos/1').then(res => res.json()),
  });

  if (isPending) return <p>Loading…</p>;
  return <p>{data.title}</p>;
}

export default function TSQ() {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
    </QueryClientProvider>
  );
}