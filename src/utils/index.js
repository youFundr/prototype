import { ethers } from "ethers";

export function transformProjectDetails({
  deadline = "",
  currentAmount = "0",
  goal = "0",
  ...rest
}) {
  return {
    deadline: deadline && new Date(deadline.toNumber()).toLocaleDateString(),
    currentAmount: ethers.utils.formatEther(currentAmount),
    goal: ethers.utils.formatEther(goal),
    ...rest,
  };
}
