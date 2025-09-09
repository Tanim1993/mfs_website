import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, Clock, Phone, Navigation } from "lucide-react";
import { quickSearchLocations } from "@/lib/data";
import type { Agent } from "@shared/schema";

export function AgentLocator() {
  const [searchLocation, setSearchLocation] = useState("");
  const [serviceType, setServiceType] = useState("all");

  const { data: agents = [], isLoading } = useQuery<Agent[]>({
    queryKey: ["/api/agents", searchLocation],
    enabled: true,
  });

  const handleSearch = () => {
    // Trigger search with current filters
    console.log("Searching for agents...", { searchLocation, serviceType });
  };

  const handleQuickSearch = (location: string) => {
    setSearchLocation(location);
  };

  return (
    <section className="py-20 bg-white" data-testid="agent-locator">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Find PayFlow Agents Near You</h2>
          <p className="text-xl text-gray-600">
            Our extensive network of 50,000+ agents ensures you always have access to cash services.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Search Panel */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24 border-0 shadow-lg">
              <CardContent className="p-6 bg-gray-50 rounded-2xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Search Agents</h3>

                {/* Location Search */}
                <div className="mb-6">
                  <Label htmlFor="location" className="text-sm font-medium text-gray-700 mb-2">
                    Location
                  </Label>
                  <div className="relative">
                    <Input
                      id="location"
                      type="text"
                      placeholder="Enter area, district or division"
                      value={searchLocation}
                      onChange={(e) => setSearchLocation(e.target.value)}
                      className="pl-10"
                      data-testid="input-location"
                    />
                    <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  </div>
                </div>

                {/* Service Type Filter */}
                <div className="mb-6">
                  <Label htmlFor="service-type" className="text-sm font-medium text-gray-700 mb-2">
                    Service Type
                  </Label>
                  <Select value={serviceType} onValueChange={setServiceType}>
                    <SelectTrigger data-testid="select-service-type">
                      <SelectValue placeholder="All Services" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Services</SelectItem>
                      <SelectItem value="cash">Cash In/Out</SelectItem>
                      <SelectItem value="registration">Registration</SelectItem>
                      <SelectItem value="bills">Bill Payment</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  onClick={handleSearch}
                  className="w-full bg-bangladesh-green text-white hover:bg-green-700"
                  data-testid="button-search-agents"
                >
                  <Search className="mr-2 h-4 w-4" />
                  Search Agents
                </Button>

                {/* Quick Location Buttons */}
                <div className="mt-6">
                  <h4 className="text-sm font-medium text-gray-700 mb-3">Quick Search</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {quickSearchLocations.map((location) => (
                      <Button
                        key={location}
                        variant="outline"
                        size="sm"
                        onClick={() => handleQuickSearch(location)}
                        className="text-xs hover:bg-bangladesh-green hover:text-white"
                        data-testid={`button-quick-search-${location.toLowerCase()}`}
                      >
                        {location}
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Map and Results */}
          <div className="lg:col-span-2">
            {/* Interactive Map Placeholder */}
            <div className="bg-gray-200 rounded-2xl h-96 mb-8 relative overflow-hidden" data-testid="map-container">
              <img
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600"
                alt="Bangladesh map showing agent network locations"
                className="w-full h-full object-cover"
              />

              {/* Map Overlay UI */}
              <div className="absolute top-4 right-4 bg-white rounded-lg shadow-lg p-2">
                <button className="p-2 hover:bg-gray-100 rounded" data-testid="button-zoom-in">
                  <i className="fas fa-plus"></i>
                </button>
                <button className="p-2 hover:bg-gray-100 rounded" data-testid="button-zoom-out">
                  <i className="fas fa-minus"></i>
                </button>
              </div>

              {/* Location Markers */}
              <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-bangladesh-green rounded-full border-4 border-white transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
              <div className="absolute top-1/3 left-1/3 w-4 h-4 bg-bangladesh-green rounded-full border-4 border-white"></div>
              <div className="absolute bottom-1/3 right-1/3 w-4 h-4 bg-bangladesh-green rounded-full border-4 border-white"></div>

              {/* Map Legend */}
              <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-lg p-4">
                <h4 className="text-sm font-semibold mb-2">Legend</h4>
                <div className="flex items-center space-x-2 text-xs">
                  <div className="w-3 h-3 bg-bangladesh-green rounded-full"></div>
                  <span>PayFlow Agent</span>
                </div>
              </div>
            </div>

            {/* Agent Results */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">
                {isLoading ? "Loading..." : `Nearby Agents (${agents.length})`}
              </h3>

              {agents.map((agent) => (
                <Card key={agent.id} className="hover:shadow-lg transition-shadow" data-testid={`agent-card-${agent.id}`}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">{agent.name}</h4>
                        <p className="text-gray-600 mb-2">{agent.address}</p>

                        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                          <span className="flex items-center space-x-1">
                            <Clock className="h-4 w-4 text-bangladesh-green" />
                            <span>{agent.openTime} - {agent.closeTime}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Phone className="h-4 w-4 text-bangladesh-green" />
                            <span>{agent.phone}</span>
                          </span>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {agent.services.map((service, index) => (
                            <Badge 
                              key={index} 
                              variant="secondary" 
                              className="text-xs bg-green-100 text-bangladesh-green hover:bg-green-200"
                            >
                              {service}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="text-right ml-4">
                        <div className="text-lg font-semibold text-bangladesh-green">2.5 km</div>
                        <div className="text-sm text-gray-500 mb-2">away</div>
                        <Button 
                          variant="link" 
                          className="text-bangladesh-green hover:underline text-sm p-0"
                          data-testid={`button-directions-${agent.id}`}
                        >
                          <Navigation className="mr-1 h-4 w-4" />
                          Get Directions
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {!isLoading && agents.length === 0 && (
                <Card>
                  <CardContent className="p-6 text-center">
                    <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600">No agents found in your search area. Try expanding your search.</p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
