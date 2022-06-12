import { useParams } from "react-router-dom";
import { useContractRead } from "wagmi";

export default function Project() {
  const { address } = useParams();
  return <h1>{address}</h1>;
}
