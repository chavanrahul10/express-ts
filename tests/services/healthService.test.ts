import os from "os";
import { checkHealth } from "../../src/services/healthService";

jest.mock("os", () => ({
  hostname: jest.fn(),
}));

describe("Health Service", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (os.hostname as jest.Mock).mockReturnValue("test-host");
    Object.defineProperty(process, "pid", { value: 12345 });
  });

  it("should return health status with correct format", () => {
    const result = checkHealth();

    expect(result).toEqual({
      status: "ok",
      hostname: "test-host",
      pid: 12345,
    });

    expect(os.hostname).toHaveBeenCalledTimes(1);
  });
});
