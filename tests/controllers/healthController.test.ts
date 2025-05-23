import { Request, Response } from "express";
import { getHealth } from "../../src/controllers/healthController";
import * as healthService from "../../src/services/healthService";

// Mock the health service
jest.mock("../../src/services/healthService");

describe("Health Controller", () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let mockJson: jest.Mock;
  let mockStatus: jest.Mock;

  beforeEach(() => {
    mockJson = jest.fn().mockReturnThis();
    mockStatus = jest.fn().mockReturnValue({ json: mockJson });
    mockRequest = {};
    mockResponse = {
      status: mockStatus,
      json: mockJson,
    };

    // Reset all mocks
    jest.clearAllMocks();
  });

  it("should return health status with 200 status code", () => {
    // Mock the service response
    const mockHealthStatus = {
      status: "ok",
      hostname: "test-host",
      pid: 12345,
    };

    (healthService.checkHealth as jest.Mock).mockReturnValue(mockHealthStatus);

    // Call the controller
    getHealth(mockRequest as Request, mockResponse as Response);

    // Assert
    expect(healthService.checkHealth).toHaveBeenCalledTimes(1);
    expect(mockStatus).toHaveBeenCalledWith(200);
    expect(mockJson).toHaveBeenCalledWith(mockHealthStatus);
  });
});
