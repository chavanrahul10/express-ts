import os from "os";

export const checkHealth = (): {
  status: string;
  hostname: string;
  pid: number;
} => {
  return {
    status: "ok",
    hostname: os.hostname(),
    pid: process.pid,
  };
};
