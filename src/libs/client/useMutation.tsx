import { useState } from "react";

export default function useMutation(url: string) {
  const [loading, setLoading] = useState(false);
  const [data, setDate] = useState<undefined | any>(undefined);
  const [error, setError] = useState<undefined | any>(undefined);

  function mutation(data: any) {}
  return [mutation, { loading, data, error }];
}
