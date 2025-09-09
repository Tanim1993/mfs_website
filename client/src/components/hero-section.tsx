import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Users, MapPin, Smartphone, Phone } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-bangladesh-green via-green-600 to-emerald-700 text-white overflow-hidden">
      {/* Bangladesh-inspired pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full"></div>
        <div className="absolute top-32 right-20 w-16 h-16 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 border-2 border-white rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight" data-testid="hero-title">
              Bangladesh's Most <span className="text-golden-yellow">Trusted</span> Mobile Financial Service
            </h1>
            <p className="text-xl mb-8 text-green-100" data-testid="hero-description">
              Cash in, cash out, send money, pay bills, and more - all from your mobile phone. 
              Serving over 10 million customers across Bangladesh.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-4 mb-8 justify-center lg:justify-start">
              <Badge className="flex items-center space-x-2 bg-white bg-opacity-20 text-white border-0 hover:bg-opacity-30">
                <Shield className="h-4 w-4 text-golden-yellow" />
                <span className="text-sm">Bank Grade Security</span>
              </Badge>
              <Badge className="flex items-center space-x-2 bg-white bg-opacity-20 text-white border-0 hover:bg-opacity-30">
                <Users className="h-4 w-4 text-golden-yellow" />
                <span className="text-sm">10M+ Users</span>
              </Badge>
              <Badge className="flex items-center space-x-2 bg-white bg-opacity-20 text-white border-0 hover:bg-opacity-30">
                <MapPin className="h-4 w-4 text-golden-yellow" />
                <span className="text-sm">50,000+ Agents</span>
              </Badge>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-golden-yellow text-bangladesh-green hover:bg-yellow-400 font-semibold"
                data-testid="button-download-android"
              >
                <Smartphone className="mr-2 h-5 w-5" />
                Download for Android
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white bg-opacity-20 backdrop-blur-md text-white border-white hover:bg-opacity-30"
                data-testid="button-use-ussd"
              >
                <Phone className="mr-2 h-5 w-5" />
                Use USSD: *247#
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="People using mobile financial services"
              className="rounded-2xl shadow-2xl w-full"
              data-testid="hero-image"
            />

            {/* Floating Stats Cards */}
            <div className="absolute -bottom-4 -left-4 bg-white text-bangladesh-green p-4 rounded-xl shadow-lg" data-testid="stat-transactions">
              <div className="text-2xl font-bold">৳9,90,004</div>
              <div className="text-sm">Crore Transacted</div>
            </div>

            <div className="absolute -top-4 -right-4 bg-golden-yellow text-bangladesh-green p-4 rounded-xl shadow-lg" data-testid="stat-accounts">
              <div className="text-2xl font-bold">178.6M</div>
              <div className="text-sm">Registered Accounts</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
