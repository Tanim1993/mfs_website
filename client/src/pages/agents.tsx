import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { AgentLocator } from "@/components/agent-locator";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users, Clock, Award } from "lucide-react";

export default function Agents() {
  return (
    <div className="min-h-screen bg-gray-50" data-testid="page-agents">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-bangladesh-green to-emerald-600 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6" data-testid="agents-hero-title">
                Find PayFlow Agents
              </h1>
              <p className="text-xl text-green-100 mb-8">
                Locate the nearest PayFlow agent for cash in, cash out, registration, and other services. 
                Our extensive network ensures you're never far from financial services.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-12">
                <Badge className="bg-white bg-opacity-20 text-white p-4 text-lg">
                  <MapPin className="mr-2 h-5 w-5" />
                  50,000+ Locations
                </Badge>
                <Badge className="bg-white bg-opacity-20 text-white p-4 text-lg">
                  <Users className="mr-2 h-5 w-5" />
                  All 64 Districts
                </Badge>
                <Badge className="bg-white bg-opacity-20 text-white p-4 text-lg">
                  <Clock className="mr-2 h-5 w-5" />
                  Extended Hours
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Agent Locator */}
        <AgentLocator />

        {/* Agent Requirements */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Become a PayFlow Agent</h2>
              <p className="text-xl text-gray-600">Join our network and earn additional income while serving your community</p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Requirements to become an agent:</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <Award className="h-6 w-6 text-bangladesh-green mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-semibold">Valid Trade License</span>
                      <p className="text-gray-600 text-sm">Must have a valid business registration</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Award className="h-6 w-6 text-bangladesh-green mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-semibold">Security Deposit</span>
                      <p className="text-gray-600 text-sm">Refundable security deposit of ৳50,000</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Award className="h-6 w-6 text-bangladesh-green mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-semibold">Physical Location</span>
                      <p className="text-gray-600 text-sm">Established shop or office in accessible location</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Award className="h-6 w-6 text-bangladesh-green mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-semibold">Training Completion</span>
                      <p className="text-gray-600 text-sm">Complete our agent training program</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Agent Benefits</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Commission per transaction</span>
                      <span className="font-semibold text-bangladesh-green">৳2-5</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monthly incentives</span>
                      <span className="font-semibold text-bangladesh-green">Up to ৳10,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Training provided</span>
                      <span className="font-semibold text-bangladesh-green">Free</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Marketing support</span>
                      <span className="font-semibold text-bangladesh-green">Included</span>
                    </div>
                  </div>
                  <button className="w-full mt-6 bg-bangladesh-green text-white py-3 rounded-lg hover:bg-green-700 transition-colors" data-testid="button-apply-agent">
                    Apply to Become an Agent
                  </button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
