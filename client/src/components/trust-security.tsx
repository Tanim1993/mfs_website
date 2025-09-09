import { Card, CardContent } from "@/components/ui/card";
import { trustFeatures, certifications } from "@/lib/data";

export function TrustSecurity() {
  return (
    <section className="py-20 bg-white" data-testid="trust-security">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Your Money, Our Responsibility</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bank-grade security, regulatory compliance, and 24/7 monitoring ensure your financial safety.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {trustFeatures.map((feature, index) => (
            <div key={index} className="text-center" data-testid={`trust-feature-${index}`}>
              <div className={`w-20 h-20 ${feature.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                <i className={`${feature.icon} text-white text-3xl`}></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <Card className="border-0 shadow-lg">
          <CardContent className="p-8 bg-gray-50 rounded-2xl">
            <h3 className="text-2xl font-semibold text-gray-900 text-center mb-8">Trusted by Regulators</h3>
            <div className="grid md:grid-cols-3 gap-8 items-center">
              {certifications.map((cert, index) => (
                <div key={index} className="text-center" data-testid={`certification-${index}`}>
                  <div className="w-24 h-24 bg-white rounded-xl shadow-lg flex items-center justify-center mx-auto mb-4">
                    <i className={`${cert.icon} ${cert.color} text-3xl`}></i>
                  </div>
                  <h4 className="font-semibold text-gray-900">{cert.title}</h4>
                  <p className="text-sm text-gray-600">{cert.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
