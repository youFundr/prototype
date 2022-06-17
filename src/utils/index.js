import { ethers } from "ethers";

export function transformProjectDetails({
  deadline = "",
  currentAmount = "0",
  goal = "0",
  ...rest
} = {}) {
  return {
    deadline:
      deadline && new Date(deadline.toNumber() * 1000).toLocaleDateString(),
    currentAmount: ethers.utils.formatEther(currentAmount),
    goal: ethers.utils.formatEther(goal),
    ...rest,
  };
}
