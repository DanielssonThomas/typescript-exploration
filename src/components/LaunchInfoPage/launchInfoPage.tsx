import {
    QueryClient,
    QueryClientProvider,
    useQuery,
  } from "@tanstack/react-query";
  import { useParams } from 'react-router-dom';


export default function LaunchInfoPage(){
    const queryClient = new QueryClient();
    return(
        <QueryClientProvider client={queryClient}>
            <GetLaunch/>
        </QueryClientProvider>
    );
}

function GetLaunch(){
    const {id} = useParams();
    const { isLoading, error, data } = useQuery({
        queryKey: ["repoData"],
        queryFn: () =>
          fetch(
            `https://ll.thespacedevs.com/2.2.0/launch/upcoming/${id}/?format=json`
          ).then((res) => res.json()),
      });
    
      if (isLoading) return <div>Loading...</div>;
    
      if (error) return <div>An error has occurred</div>;


      const res: FetchSingleResult = data;
      console.log(data);
      return (
        <div>
            <h1>{res.result.id}</h1>
        </div>
      );
}