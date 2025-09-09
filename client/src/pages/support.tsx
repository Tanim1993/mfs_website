import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FaqSection } from "@/components/faq-section";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, MessageCircle, Clock, Shield } from "lucide-react";

export default function Support() {
  return (
    <div className="min-h-screen bg-gray-50" data-testid="page-support">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-bangladesh-green to-emerald-600 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6" data-testid="support-hero-title">
                Customer Support Center
              </h1>
              <p className="text-xl text-green-100 mb-8">
                Get help when you need it. Our dedicated support team is available 24/7 to assist you 
                with any questions or issues regarding PayFlow services.
              </p>
              <div className="grid md:grid-cols-4 gap-4 mt-12">
                <Badge className="bg-white bg-opacity-20 text-white p-4">
                  <Phone className="mr-2 h-5 w-5" />
                  24/7 Hotline
                </Badge>
                <Badge className="bg-white bg-opacity-20 text-white p-4">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Live Chat
                </Badge>
                <Badge className="bg-white bg-opacity-20 text-white p-4">
                  <Clock className="mr-2 h-5 w-5" />
                  Quick Response
                </Badge>
                <Badge className="bg-white bg-opacity-20 text-white p-4">
                  <Shield className="mr-2 h-5 w-5" />
                  Secure Support
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Support Options Overview */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Support Channel</h2>
              <p className="text-xl text-gray-600">Multiple ways to get help, available in Bengali and English</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-bangladesh-green rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Phone className="text-white h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone Support</h3>
                  <p className="text-gray-600 text-sm mb-4">Direct line to our customer service representatives</p>
                  <div className="text-bangladesh-green font-bold">16247</div>
                  <div className="text-xs text-gray-500">Toll-free from any operator</div>
                </CardContent>
              </Card>

              <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-trust-blue rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="text-white h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Live Chat</h3>
                  <p className="text-gray-600 text-sm mb-4">Chat with support agents in real-time</p>
                  <div className="text-trust-blue font-bold">In-App Chat</div>
                  <div className="text-xs text-gray-500">Average response: 2 minutes</div>
                </CardContent>
              </Card>

              <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-envelope text-white text-2xl"></i>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Support</h3>
                  <p className="text-gray-600 text-sm mb-4">Send detailed queries and get comprehensive responses</p>
                  <div className="text-purple-600 font-bold text-sm">support@payflow.com.bd</div>
                  <div className="text-xs text-gray-500">Response within 24 hours</div>
                </CardContent>
              </Card>

              <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-crimson-red rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <i className="fab fa-facebook text-white text-2xl"></i>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Social Media</h3>
                  <p className="text-gray-600 text-sm mb-4">Connect with us on social platforms</p>
                  <div className="text-crimson-red font-bold">@PayFlowBD</div>
                  <div className="text-xs text-gray-500">Facebook, Twitter, Instagram</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Service Status */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Service Status</h2>
              <p className="text-xl text-gray-600">Real-time status of PayFlow services</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-900">Cash In/Out</h3>
                      <p className="text-sm text-gray-600">Agent services</p>
                    </div>
                    <Badge className="bg-green-100 text-green-800">Operational</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-900">Send Money</h3>
                      <p className="text-sm text-gray-600">P2P transfers</p>
                    </div>
                    <Badge className="bg-green-100 text-green-800">Operational</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-900">Bill Payment</h3>
                      <p className="text-sm text-gray-600">Utility and services</p>
                    </div>
                    <Badge className="bg-green-100 text-green-800">Operational</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-900">Mobile App</h3>
                      <p className="text-sm text-gray-600">Android application</p>
                    </div>
                    <Badge className="bg-green-100 text-green-800">Operational</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-900">USSD Service</h3>
                      <p className="text-sm text-gray-600">*247# code</p>
                    </div>
                    <Badge className="bg-green-100 text-green-800">Operational</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-900">Customer Support</h3>
                      <p className="text-sm text-gray-600">All channels</p>
                    </div>
                    <Badge className="bg-green-100 text-green-800">Operational</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ and Contact Form */}
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
