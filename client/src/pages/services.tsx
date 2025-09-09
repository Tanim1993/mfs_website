import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/data";
import { ArrowRight, Calculator } from "lucide-react";

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-50" data-testid="page-services">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-bangladesh-green to-emerald-600 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6" data-testid="services-hero-title">
                Complete Mobile Financial Services
              </h1>
              <p className="text-xl text-green-100 mb-8">
                From cash transactions to digital payments, we provide comprehensive financial services 
                that make banking accessible to everyone in Bangladesh.
              </p>
              <Button size="lg" className="bg-golden-yellow text-bangladesh-green hover:bg-yellow-400" data-testid="button-calculate-fees">
                <Calculator className="mr-2 h-5 w-5" />
                Calculate Transaction Fees
              </Button>
            </div>
          </div>
        </section>

        {/* Detailed Services */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid gap-12">
              {services.map((service, index) => (
                <Card key={service.id} className="border-0 shadow-lg overflow-hidden" data-testid={`service-detail-${service.id}`}>
                  <CardContent className="p-0">
                    <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                      <div className={`p-8 lg:p-12 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                        <div className="flex items-center space-x-4 mb-6">
                          <div className={`w-16 h-16 ${service.iconBg} rounded-2xl flex items-center justify-center`}>
                            <i className={`${service.icon} text-white text-2xl`}></i>
                          </div>
                          <div>
                            <h2 className="text-2xl font-bold text-gray-900">{service.title}</h2>
                            <Badge className={`${service.iconBg} text-white`}>
                              {service.fee}
                            </Badge>
                          </div>
                        </div>
                        
                        <p className="text-gray-600 text-lg mb-6">{service.description}</p>
                        
                        <div className="mb-6">
                          <h3 className="font-semibold text-gray-900 mb-3">How it works:</h3>
                          <ul className="space-y-2 text-gray-600">
                            <li className="flex items-start space-x-2">
                              <ArrowRight className="h-5 w-5 text-bangladesh-green mt-0.5 flex-shrink-0" />
                              <span>Visit any PayFlow agent or use the mobile app</span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <ArrowRight className="h-5 w-5 text-bangladesh-green mt-0.5 flex-shrink-0" />
                              <span>Provide your mobile number and transaction details</span>
                            </li>
                            <li className="flex items-start space-x-2">
                              <ArrowRight className="h-5 w-5 text-bangladesh-green mt-0.5 flex-shrink-0" />
                              <span>Complete the transaction securely with your PIN</span>
                            </li>
                          </ul>
                        </div>
                        
                        <Button className="bg-bangladesh-green hover:bg-green-700" data-testid={`button-learn-more-${service.id}`}>
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                      
                      <div className={`bg-gradient-to-br ${service.color} p-8 lg:p-12 flex items-center justify-center ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                        <div className="text-center">
                          <div className={`w-32 h-32 ${service.iconBg} rounded-3xl flex items-center justify-center mx-auto mb-6`}>
                            <i className={`${service.icon} text-white text-5xl`}></i>
                          </div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">Available 24/7</h3>
                          <p className="text-gray-600">Access this service anytime, anywhere across Bangladesh</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Service Availability */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Service Availability</h2>
              <p className="text-xl text-gray-600">Our services are available across all districts of Bangladesh</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-bangladesh-green rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-map-marked-alt text-white text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Nationwide Coverage</h3>
                  <p className="text-gray-600">Available in all 64 districts and 8 divisions of Bangladesh</p>
                </CardContent>
              </Card>
              
              <Card className="text-center border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-trust-blue rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-clock text-white text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Availability</h3>
                  <p className="text-gray-600">Services available round the clock, including holidays</p>
                </CardContent>
              </Card>
              
              <Card className="text-center border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-language text-white text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Multi-Language Support</h3>
                  <p className="text-gray-600">Available in Bengali, English, and regional languages</p>
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
