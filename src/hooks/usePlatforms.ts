import { useEffect, useState } from "react";
import platformsService from "../services/platforms-service";
import { CanceledError } from "axios";

interface PlatformDetail {
  id: string;
  name: string;
}

interface Platforms {
  results: PlatformDetail[];
}

const usePlatforms = () => {
  const [platformsList, setPlatformsList] = useState(<PlatformDetail[]>[]);
  const [platformError, setPlatformError] = useState("");

  useEffect(() => {
    const { request, cancel } = platformsService.getAll<Platforms>();

    request
      .then((res) => setPlatformsList(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setPlatformError(err.message);
      });

    return () => cancel();
  }, []);

  return { platformError, platformsList, setPlatformsList };
};

export default usePlatforms;
