import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Smartphone, Apple } from "lucide-react";
import { appFeatures } from "@/lib/data";

export function MobileAppSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-bangladesh-green via-green-600 to-emerald-700 text-white" data-testid="mobile-app-section">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* App Features */}
          <div>
            <h2 className="text-4xl font-bold mb-6">Get the PayFlow Mobile App</h2>
            <p className="text-xl text-green-100 mb-8">
              Experience faster, easier mobile banking with our user-friendly app. Available for Android and coming soon to iOS.
            </p>

            {/* App Features List */}
            <div className="space-y-4 mb-8">
              {appFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3" data-testid={`app-feature-${index}`}>
                  <CheckCircle className="h-5 w-5 text-golden-yellow flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                size="lg" 
                className="bg-black text-white hover:bg-gray-800 font-semibold"
                data-testid="button-download-android"
              >
                <Smartphone className="mr-3 h-6 w-6" />
                <div className="text-left">
                  <div className="text-xs">Download on</div>
                  <div className="text-lg">Google Play</div>
                </div>
              </Button>

              <Button 
                size="lg" 
                disabled
                className="bg-gray-800 text-white opacity-75 cursor-not-allowed font-semibold"
                data-testid="button-download-ios"
              >
                <Apple className="mr-3 h-6 w-6" />
                <div className="text-left">
                  <div className="text-xs">Coming Soon</div>
                  <div className="text-lg">App Store</div>
                </div>
              </Button>
            </div>

            {/* App Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-green-400">
              <div className="text-center" data-testid="app-stat-rating">
                <div className="text-2xl font-bold">4.8★</div>
                <div className="text-green-100 text-sm">Play Store Rating</div>
              </div>
              <div className="text-center" data-testid="app-stat-downloads">
                <div className="text-2xl font-bold">5M+</div>
                <div className="text-green-100 text-sm">Downloads</div>
              </div>
              <div className="text-center" data-testid="app-stat-uptime">
                <div className="text-2xl font-bold">99.9%</div>
                <div className="text-green-100 text-sm">Uptime</div>
              </div>
            </div>
          </div>

          {/* App Screenshots */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="PayFlow mobile app interface"
              className="rounded-3xl shadow-2xl"
              data-testid="app-screenshot"
            />

            {/* Floating Feature Cards */}
            <Badge className="absolute -top-4 -left-4 bg-white text-bangladesh-green p-4 shadow-lg border-0">
              <div className="text-center">
                <i className="fas fa-fingerprint text-2xl mb-2 block"></i>
                <div className="text-sm font-semibold">Biometric Login</div>
              </div>
            </Badge>

            <Badge className="absolute -bottom-4 -right-4 bg-golden-yellow text-bangladesh-green p-4 shadow-lg border-0">
              <div className="text-center">
                <i className="fas fa-qrcode text-2xl mb-2 block"></i>
                <div className="text-sm font-semibold">QR Payments</div>
              </div>
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
}
